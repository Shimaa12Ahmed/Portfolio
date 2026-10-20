import { useEffect, useRef, useState } from "react";
import { supabase } from "../lib/supabase";

function useProjectReactions() {
  const [reactions, setReactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const pendingVotes = useRef({});
  useEffect(() => {
    async function fetchReactions() {
      try {
        const { data, error } = await supabase.rpc(
          "get_project_reaction_stats"
        );

        if (error) {
          throw error;
        }

        setReactions(data ?? []);
      } catch (err) {
        console.error("Failed to load project reactions:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchReactions();
  }, []);




async function vote(projectId, reaction) {
  const currentProject = reactions.find(
    (project) => project.project_id === projectId
  );

  if (!currentProject) return;

  const pending = pendingVotes.current[projectId];

  // أثناء الحفظ، احتفظ بآخر اختيار فقط
  if (pending?.saving) {
    pending.latestReaction = reaction;

    setReactions((current) =>
      current.map((project) => {
        if (project.project_id !== projectId) return project;

        const oldReaction = project.user_reaction;

        let likes = project.likes;
        let dislikes = project.dislikes;

        if (oldReaction === "like") likes--;
        if (oldReaction === "dislike") dislikes--;

        if (reaction === "like") likes++;
        if (reaction === "dislike") dislikes++;

        return {
          ...project,
          likes,
          dislikes,
          user_reaction: reaction,
        };
      })
    );

    return;
  }

  if (currentProject.user_reaction === reaction) return;

  pendingVotes.current[projectId] = {
    saving: true,
    latestReaction: reaction,
  };

  // تحديث فوري قبل الاتصال بقاعدة البيانات
  setReactions((current) =>
    current.map((project) => {
      if (project.project_id !== projectId) return project;

      let likes = project.likes;
      let dislikes = project.dislikes;

      if (project.user_reaction === "like") likes--;
      if (project.user_reaction === "dislike") dislikes--;

      if (reaction === "like") likes++;
      if (reaction === "dislike") dislikes++;

      return {
        ...project,
        likes,
        dislikes,
        user_reaction: reaction,
      };
    })
  );

  try {
    let nextReaction = reaction;

    while (true) {
      const { error } = await supabase.rpc(
        "cast_project_reaction",
        {
          p_project_id: projectId,
          p_reaction: nextReaction,
        }
      );

      if (error) throw error;

      const latestReaction =
        pendingVotes.current[projectId].latestReaction;

      if (latestReaction === nextReaction) break;

      nextReaction = latestReaction;
    }
  } catch (err) {
    console.error("Failed to save reaction:", err);

    const { data, error } = await supabase.rpc(
      "get_project_reaction_stats"
    );

    if (!error) setReactions(data ?? []);
  } finally {
    delete pendingVotes.current[projectId];
  }
}


  return { reactions, loading, error,vote };
}

export default useProjectReactions;

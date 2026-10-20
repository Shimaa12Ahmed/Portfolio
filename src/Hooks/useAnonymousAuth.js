import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

function useAnonymousAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function initializeAuth() {
      try {
  const { data: sessionData, error: sessionError } =
    await supabase.auth.getSession();

  if (sessionError) {
    throw sessionError;
  }

  if (sessionData.session) {
    setUser(sessionData.session.user);
  } else {
    const { data, error } =
      await supabase.auth.signInAnonymously();

    if (error) {
      throw error;
    }

    setUser(data.user);
  }
} catch (err) {
  console.error("Anonymous auth error:", err);
  setError(err.message);
} finally {
  setLoading(false);
}
    }

    initializeAuth();
  }, []);

  return { user, loading, error };
}

export default useAnonymousAuth;
import { useState } from "react";
import { Projects } from "../Data/Projects";

export const useProjects = () => {
 const [projects,setProjects]=useState(Projects)
 const toggleLike = (id) => {
  setProjects(prevProjects =>
    prevProjects.map((project) => {
      if (project.id !== id) {
        return project;
      }

    
      if (project.liked) {
        return {
          ...project,
          liked: false,
          likes: project.likes?project.likes-1:0,
        };
      }

   
      if (project.disliked) {
        return {
          ...project,
          liked: true,
          disliked: false,
          likes: project.likes + 1,
          dislikes: project.dislikes? project.dislikes-1:0,
        };
      }

      
      return {
        ...project,
        liked: true,
        likes: project.likes + 1,
      };
    })
  );
};
const toggleDislike = (id) => {
  setProjects(prevProjects =>
    prevProjects.map((project) => {
      if (project.id !== id) {
        return project;
      }

      if (project.disliked) {
        return {
          ...project,
          disliked: false,
         dislikes: project.dislikes? project.dislikes-1:0,
        };
      }

      
      if (project.liked) {
        return {
          ...project,
          liked: false,
          disliked: true,
      likes: project.likes?project.likes-1:0,
          dislikes: project.dislikes + 1,
        };
      }

     
      return {
        ...project,
        disliked: true,
        dislikes: project.dislikes + 1,
      };
    })
  );

};
  return{
    projects,toggleDislike,toggleLike
  }
}






import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaAngular,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPython,
  FaLayerGroup,
} from "react-icons/fa";
 
import {
  SiJavascript,
  SiC,
  SiRedux,
  SiReactquery,

  SiChakraui,
  SiMui,
  SiMongodb,
  SiMysql,
  SiGit,
  SiPostman,

} from "react-icons/si";

export const skillsData = [
  {
    id: 1,
    title: "Languages",
    skills: [
      {
        name: "HTML5",
        icon: FaHtml5,
        color: "#E34F26",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "#1572B6",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
      },
      {
        name: "C",
        icon: SiC,
        color: "#00599C",
      },
      {
        name: "Java",
        icon: FaJava,
        color: "#ED8B00",
      },
      {
        name: "Python",
        icon: FaPython,
        color: "#3776AB",
      },
    ],
  },

  {
    id: 2,
    title: "Frameworks & Libraries",
    skills: [
      {
        name: "React.js",
        icon: FaReact,
        color: "#61DAFB",
      },
      {
        name: "Angular",
        icon: FaAngular,
        color: "#DD0031",
      },
      {
        name: "React Router",
        icon: FaReact,
        color: "#CA4245",
      },
      {
        name: "React Query",
        icon: SiReactquery,
        color: "#FF4154",
      },
      {
        name: "Redux",
        icon: SiRedux,
        color: "#764ABC",
      },
      {
        name: "Zustand",
        icon:FaLayerGroup,
        color: "#7A5C3E",
      },
    ],
  },

  {
  id: 3,
  title: "UI Frameworks",
  skills: [
    {
      name: "Chakra UI",
      icon: SiChakraui,
      color: "#319795",
    },
    {
      name: "Material UI",
      icon: SiMui,
      color: "#007FFF",
    },
    {
      name: "Mantine UI",
      icon: FaReact,
      color: "#339AF0",
    },
    {
      name: "Bootstrap",
      icon: FaBootstrap,
      color: "#7952B3",
    },
  ],
},

  {
    id: 4,
    title: "Tools & Version Control",
    skills: [
      {
        name: "Git",
        icon: FaGitAlt,
        color: "#F05032",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "#181717",
      },
      {
        name: "Git Bash",
        icon: SiGit,
        color: "#F05032",
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "#FF6C37",
      },
    ],
  },

  {
    id: 5,
    title: "Databases",
    skills: [
      {
        name: "SQL",
        icon: SiMysql,
        color: "#4479A1",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "#47A248",
      },
    ],
  },

  {
    id: 6,
    title: "Web Technologies",
    skills: [
      {
        name: "REST APIs",
        icon: FaReact,
        color: "#5B7FFF",
      },
      {
        name: "Responsive Design",
        icon: FaHtml5,
        color: "#F97316",
      },
      {
        name: "Local Storage",
        icon: FaReact,
        color: "#10B981",
      },
    ],
  },

  {
    id: 7,
    title: "Soft Skills",
    skills: [
      {
        name: "Teamwork",
        color: "#3B82F6",
      },
      {
        name: "Time Management",
        color: "#8B5CF6",
      },
      {
        name: "Problem Solving",
        color: "#F59E0B",
      },
      {
        name: "Communication",
        color: "#06B6D4",
      },
      {
        name: "Self-Learning",
        color: "#10B981",
      },
    ],
  },

  {
    id: 8,
    title: "Additional Skills",
    skills: [
      {
        name: "Tkinter",
        icon: FaPython,
        color: "#3776AB",
      },
    ],
  },
];
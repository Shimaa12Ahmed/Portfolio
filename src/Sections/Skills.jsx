import { fadeUp } from "../theme/animation";
import { skillsData } from "../Data/skills";
import{ chakra, Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import SkillsCard from "../Components/Cards/SkillsCard";
const MotionBox = chakra(motion.div);

const technicalTitles = [
  "Languages",
  "Frameworks & Libraries",
  "UI Frameworks",
  "Tools & Version Control",
  "Database",
  "Web Technologies",
];

const softTitles = ["Soft Skills"];

const additionalTitles = ["Additional Skills"];

const Skills= () => {
  const technicalSkills = skillsData.filter((item) =>
    technicalTitles.includes(item.title)
  );

  const softSkills = skillsData.filter((item) =>
    softTitles.includes(item.title)
  );

  const additionalSkills = skillsData.filter((item) =>
    additionalTitles.includes(item.title)
  );

  return (
    <Box
      layerStyle="section"
      id="skills"
    >
      <Heading
        textStyle="sectionTitle"
        textAlign="center"
        mb={12}
      >
        My Skills
      </Heading>

      <MotionBox
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        {SkillsCard("Technical Skills", technicalSkills)}

        {SkillsCard("Soft Skills", softSkills)}

        {SkillsCard("Additional Skills", additionalSkills)}
      </MotionBox>
    </Box>
  );
};
export default Skills;

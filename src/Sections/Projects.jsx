import { Box, Heading } from "@chakra-ui/react";
import ProjectsCard from "../Components/Cards/ProjectsCard";
const Projects = () => {
  return (
  <>
 <Box layerStyle="section" id="projects">
      <Heading
        textStyle="sectionTitle"
        textAlign="center"
        mb={12}
      >
       Projects
      </Heading>

  <ProjectsCard/>
  </Box>
  </>
  )
}
export default Projects;

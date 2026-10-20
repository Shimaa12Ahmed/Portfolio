
import {
  Box,
  Heading,
  HStack,
  Text,
  Card,
  CardBody,
  CardFooter,
  Stack,
  Button,
  Divider,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { useProjects } from "../../Hooks/useProjects";
import { ReactionsButtons } from "../Buttons/ReactionsButtons";
import useProjectReactions from "../../Hooks/useProjectReactions";
const ProjectsCard = () => {
  const { projects} = useProjects();
const {
  reactions,
  loading: reactionsLoading,
  error: reactionsError,
  vote,
} = useProjectReactions();

  if (reactionsLoading) {
    return <Text>Loading reactions...</Text>;
  }

  if (reactionsError) {
    return (
      <Text>
        Failed to load reactions: {reactionsError}
      </Text>
    );
  }

  return (

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={8}
      >
     {projects.map((project) => {
  const reaction = reactions.find(
    (item) => item.project_id === project.id
  );

  const projectWithReactions = {
    ...project,
    likes: reaction?.likes ?? 0,
    dislikes: reaction?.dislikes ?? 0,
    liked: reaction?.user_reaction === "like",
    disliked: reaction?.user_reaction === "dislike",
  };
  
return(
          <Card key={project.id}>
            <CardBody>
              <Box
                position="relative"
                overflow="hidden"
                borderRadius="lg"
                role="group"
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  transition=".4s"
                  _groupHover={{
                    transform: "scale(1.05)",
                  }}
                />

                <Box
                  position="absolute"
                  inset="0"
                  bg="blackAlpha.700"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  opacity="0"
                  transition=".3s"
                  _groupHover={{
                    opacity: 1,
                  }}
                >
                  {project.liveUrl ? (
                    <Button
                      as="a"
                      href={project.liveUrl}
                      target="_blank"
                    >
                      View Project
                    </Button>
                  ) : (
                    <Button>
                      Coming Soon
                    </Button>
                  )}
                </Box>
              </Box>

              <Stack mt={6} spacing={3}>
                <Heading size="md">
                  {project.title}
                </Heading>

                <Text
                  textStyle="paragraph"
                  noOfLines={3}
                >
                  {project.description}
                </Text>

                <HStack
                  flexWrap="wrap"
                  spacing={2}
                >
                  {project.technologies?.map((tech) => (
                    <Button
                      key={tech}
                      size="xs"
                      variant="outline"
                    >
                      {tech}
                    </Button>
                  ))}
                </HStack>
              </Stack>
            </CardBody>

            <Divider />

            <CardFooter
              justify="center"
              gap={10}
            >
           <ReactionsButtons
  project={projectWithReactions}
  onVote={vote}
/>

            </CardFooter>
          </Card>
        )})}
        
      </SimpleGrid>
 
  );
};

export default ProjectsCard;

import {
  IoHeartOutline,
  IoHeartDislikeOutline,
  IoHeart,
  IoHeartDislike,
} from "react-icons/io5";


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
  IconButton,
  Image,
  Tooltip,
  SimpleGrid,
} from "@chakra-ui/react";


import { Projects } from "../../Data/Projects";


import { useProjects } from "../../Hooks/useProjects";

const ProjectsCard = () => {
  const { projects, toggleLike, toggleDislike } = useProjects();

  return (

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={8}
      >
        {projects.map((project) => (
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
              <HStack spacing={1}>
                <Tooltip label="Like">
                  <IconButton
                    variant="unstyled"
                    aria-label="Like"
                    fontSize="2xl"
                    color={
                      project.liked
                        ? "red.500"
                        : "gray.400"
                    }
                    _hover={{
                      color: "red.500",
                      transform: "scale(1.15)",
                    }}
                    transition="all .2s"
                    icon={
                      project.liked ? (
                        <IoHeart />
                      ) : (
                        <IoHeartOutline />
                      )
                    }
                    onClick={() =>
                      toggleLike(project.id)
                    }
                  />
                </Tooltip>

                <Text
                  fontSize="sm"
                  fontWeight="medium"
                >
                  {project.likes}
                </Text>
              </HStack>

              <HStack spacing={1}>
                <Tooltip label="Dislike">
                  <IconButton
                    variant="unstyled"
                    aria-label="Dislike"
                    fontSize="2xl"
                    color={
                      project.disliked
                        ? "red.500"
                        : "gray.400"
                    }
                    _hover={{
                      color: "red.500",
                      transform: "scale(1.15)",
                    }}
                    transition="all .2s"
                    icon={
                      project.disliked ? (
                        <IoHeartDislike />
                      ) : (
                        <IoHeartDislikeOutline />
                      )
                    }
                    onClick={() =>
                      toggleDislike(project.id)
                    }
                  />
                </Tooltip>

                <Text
                  fontSize="sm"
                  fontWeight="medium"
                >
                  {project.dislikes}
                </Text>
              </HStack>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
 
  );
};

export default ProjectsCard;
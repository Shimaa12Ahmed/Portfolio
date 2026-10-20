
import {
  IoHeartOutline,
  IoHeartDislikeOutline,
  IoHeart,
  IoHeartDislike,
} from "react-icons/io5";

import {
    HStack,
    Text,
  IconButton,
  Tooltip,
}  from "@chakra-ui/react";

export const ReactionsButtons = ({ project, onVote }) => {
    
  return (
  <>
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
                   onClick={() => onVote(project.id, "like")}
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
                    onClick={() => onVote(project.id, "dislike")}
                  />
                </Tooltip>

                <Text
                  fontSize="sm"
                  fontWeight="medium"
                >
                  {project.dislikes}
                </Text>
              </HStack>
  </>
  )
}

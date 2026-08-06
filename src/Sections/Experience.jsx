import {
  Box,
  Heading,
  Text,
  VStack,
  Card,
  CardBody,
  Badge,
  HStack,
  chakra,
} from "@chakra-ui/react";

import { motion } from "framer-motion";
import { fadeUp } from "../theme/animation";
import { experienceData } from "../Data/experience";

const MotionBox = chakra(motion.div);

const Experience = () => {
  return (
    <Box layerStyle="section" id="experience">
      <Heading
        textStyle="sectionTitle"
        textAlign="center"
        mb={12}
      >
        Experience
      </Heading>

      <VStack spacing={8}>
        {experienceData.map((item) => (
          <MotionBox
            key={item.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            w="100%"
          >
            <Card maxW="900px" mx="auto">
              <CardBody>
                <VStack
                  align="start"
                  spacing={4}
                >
                  <Heading size="md">
                    {item.title}
                  </Heading>

                  <HStack
                    justify="space-between"
                    w="100%"
                    flexWrap="wrap"
                  >
                    <Text
                      fontWeight="600"
                      color="brand.600"
                    >
                      {item.company}
                    </Text>

                    <Badge
                      colorScheme="brand"
                    >
                      {item.duration}
                    </Badge>
                  </HStack>

                  <VStack
                    align="start"
                    spacing={2}
                  >
                    {item.responsibilities.map((point, index) => (
                      <Text
                        key={index}
                        textStyle="paragraph"
                      >
                        • {point}
                      </Text>
                    ))}
                  </VStack>
                </VStack>
              </CardBody>
            </Card>
          </MotionBox>
        ))}
      </VStack>
    </Box>
  );
};

export default Experience;
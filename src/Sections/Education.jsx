import {
  Box,
  Card,
  CardBody,
  Text,
  Heading,
  chakra,
  Icon,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { fadeUp } from "../theme/animation";
import { FaUniversity } from "react-icons/fa";

const MotionBox = chakra(motion.div);

const Education = () => {
  return (
    <Box layerStyle="section" id="education">
      <Heading
        textStyle="sectionTitle"
        textAlign="center"
        mb={12}
      >
        Education
      </Heading>

      <MotionBox
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <Card
          maxW="450px"
          mx="auto"
        >
          <CardBody
            p={{ base: 8, md: 12 }}
          >
            <VStack spacing={5}>
              <Box
                w={20}
                h={20}
                rounded="full"
                bg="brand.100"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Icon
                  as={FaUniversity}
                  color="brand.700"
                  boxSize={10}
                />
              </Box>

              <Heading
                size="md"
                textAlign="center"
              >
                Capital (Helwan) University
              </Heading>

              <Text
                fontWeight="600"
                textAlign="center"
              >
                Bachelor of Computer and Artificial Intelligence
              </Text>

              <Text
                textStyle="paragraph"
                textAlign="center"
              >
                Information Systems
              </Text>

              <Text
                color="gray.500"
                fontWeight="500"
              >
                2023 – June 2027
              </Text>
            </VStack>
          </CardBody>
        </Card>
      </MotionBox>
    </Box>
  );
};

export default Education;
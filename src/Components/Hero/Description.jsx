import { Heading, Text, Badge, HStack, VStack, chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../theme/animation";

const MotionBox = chakra(motion.div);

const Description = () => {
  return (
    <MotionBox
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <VStack align="flex-start" spacing={6}>

        <MotionBox variants={fadeUp}>
          <Badge
            colorScheme="brand"
            px={4}
            py={1}
            rounded="full"
            fontSize="sm"
          >
            Hi, I'm
          </Badge>
        </MotionBox>

        <MotionBox variants={fadeUp}>
          <Heading textStyle="heroTitle">
            SHIMAA
            <br />
            AHMED
          </Heading>
        </MotionBox>

        <MotionBox variants={fadeUp}>
          <Heading
            size="lg"
            color="brand.500"
            fontWeight="600"
          >
            Front-End Developer
          </Heading>
        </MotionBox>

        <MotionBox variants={fadeUp}>
          <Text
            textStyle="paragraph"
            maxW="600px"
          >
            Passionate Front-End Developer focused on building
            modern, responsive and user-friendly web applications
            I love creating clean and interactive user experiences that bring ideas to life.
          </Text>
        </MotionBox>

        <MotionBox variants={fadeUp}>
          <HStack spacing={3} flexWrap="wrap">

            <Badge colorScheme="brand">React</Badge>

            <Badge colorScheme="brand">Angular</Badge>

            <Badge colorScheme="brand">Chakra UI</Badge>

            <Badge colorScheme="brand">Redux</Badge>

            <Badge colorScheme="brand">REST API</Badge>

          </HStack>
        </MotionBox>

      </VStack>
    </MotionBox>
  );
};

export default Description;
          
    
import { Button, HStack, chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { fadeUp } from "../../theme/animation";

const MotionBox = chakra(motion.div);

const HeroButtons = () => {
  return (
    <MotionBox variants={fadeUp}>
      <HStack
        spacing={5}
        mt={8}
        flexWrap="wrap"
      >
        <Button
          size="lg"
        >
          Download Resume
        </Button>

        <Button
          as={HashLink}
          smooth
          to="#projects"
          size="lg"
          variant="outline"
        >
          View Projects
        </Button>

        <Button
          as={HashLink}
          smooth
          to="#contact"
          size="lg"
          variant="ghost"
        >
          Contact Me
        </Button>
      </HStack>
    </MotionBox>
  );
};

export default HeroButtons;
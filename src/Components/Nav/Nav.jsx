import { motion } from "framer-motion";
import { chakra } from "@chakra-ui/react";
import { slideDown } from "../../theme/animation";

import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";

import {
  HamburgerIcon,
  CloseIcon,
} from "@chakra-ui/icons";

const MotionBox = chakra(motion.div);

export default function Nav() {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (

    <MotionBox
      initial="hidden"
      animate="visible"
      variants={slideDown}
    >

      <Box
       
        px={8}
        shadow="sm"
        position="fixed"
        top="0"
        w="100%"
        zIndex="999"
      >

        <Flex
          h={20}
          alignItems="center"
          justifyContent="space-between"
        >

          <Box
            fontWeight="bold"
            fontSize="xl"
            color="brand.500"
          >
            Shimaa.
          </Box>

          <HStack
            spacing={8}
            display={{ base: "none", md: "flex" }}
          >
            <Link href="#home">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#experience">Experience</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#contact">Contact</Link>
          </HStack>

          <IconButton
            display={{ base: "flex", md: "none" }}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="menu"
            onClick={isOpen ? onClose : onOpen}
          />

        </Flex>

       {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            <Link href="#home">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#experience">Experience</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#contact">Contact</Link>
          </Stack>
        </Box>
      ) : null}

      </Box>

    </MotionBox>

  );
}
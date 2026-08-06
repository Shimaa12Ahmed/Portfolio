import {
  Box,
  Flex,
  Text,
  HStack,
  Link,
  IconButton,
} from "@chakra-ui/react";

import { HashLink } from "react-router-hash-link";


const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box
      as="footer"
      mt={20}
      borderTop="1px solid"
      borderColor="gray.200"
    >
      <Box
        layerStyle="section"
        py={6}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          gap={6}
        >
         
          <Text
            fontSize="sm"
            color="gray.500"
            textAlign={{ base: "center", md: "left" }}
          >
            © {year} Shimaa Ahmed. All rights reserved.
          </Text>

         
          <HStack spacing={6}>
            <Link
              as={HashLink}
              smooth
              to="#about"
            >
              About
            </Link>

            <Link
              as={HashLink}
              smooth
              to="#projects"
            >
              Projects
            </Link>

            <Link
              as={HashLink}
              smooth
              to="#contact"
            >
              Contact
            </Link>
          </HStack>

         
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
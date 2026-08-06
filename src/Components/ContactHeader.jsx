import { Heading, Text, VStack } from "@chakra-ui/react";

const ContactHeader = () => {
  return (
    <VStack spacing={4} mb={12}>
      <Heading
        textStyle="sectionTitle"
        textAlign="center"
      >
        Contact Me
      </Heading>

      <Text
        textStyle="paragraph"
        textAlign="center"
        maxW="650px"
      >
        Interested in working together?
        <br />
        Feel free to reach out for projects, internships, or collaboration opportunities.
      </Text>
    </VStack>
  );
};

export default ContactHeader;
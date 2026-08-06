import {
  Card,
  CardBody,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
} from "@chakra-ui/react";

const ContactForm = () => {
  return (
    <Card>
      <CardBody>
        <VStack spacing={5}>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={5}
            w="100%"
          >
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Your Name" />
            </FormControl>

            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Your Email"
              />
            </FormControl>
          </SimpleGrid>

          <FormControl>
            <FormLabel>Subject</FormLabel>
            <Input placeholder="Subject" />
          </FormControl>

          <FormControl>
            <FormLabel>Message</FormLabel>
            <Textarea
              rows={6}
              placeholder="Write your message..."
            />
          </FormControl>

          <Button
            alignSelf="flex-start"
            size="lg"
          >
            Send Message
          </Button>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default ContactForm;
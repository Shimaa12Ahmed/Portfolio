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
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import useContactForm from '../../Hooks/useContactForm'
import { useEffect } from "react";
const ContactForm = () => {
 const { sendEmail, loading, status ,clearStatus} = useContactForm();
 useEffect(() => {
  if (!status.message) return;

  const timer = setTimeout(() => {
   clearStatus();
  }, 4000);

  return () => clearTimeout(timer);
}, [status.message]);
  return (
    <Card>
      <CardBody>
        <form onSubmit={sendEmail}>
        <VStack spacing={5}>
          
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={5}
            w="100%"
          >
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input 
              placeholder="Your Name"
              name="name"
              required
              />
            </FormControl>

            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Your Email"
                name="email"
                required
              />
            </FormControl>
          </SimpleGrid>

          <FormControl>
            <FormLabel>Subject</FormLabel>
            <Input placeholder="Subject"  
            name="subject"
            required
            />
          </FormControl>

          <FormControl>
            <FormLabel>Message</FormLabel>
            <Textarea
              rows={6}
              placeholder="Write your message..."
              name="message"
              required
            />
          </FormControl>

          <Button
            alignSelf="flex-start"
            size="lg"
            type="submit"
            isLoading={loading}
            loadingText="Sending..."
            isDisabled={loading}
          >
            Send Message
          </Button>
          {status.message && (
  <Alert
    status={status.type}
    borderRadius="md"
    w="100%"
  >
    <AlertIcon />
    {status.message}
  </Alert>
)}
        </VStack>
        </form>
      </CardBody>
    </Card>
  );
};

export default ContactForm;
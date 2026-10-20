import {
  Card,
  CardBody,
  VStack,
  HStack,
  Icon,
  Link,
  Text,
} from "@chakra-ui/react";

import {
  MdEmail,
  MdLocationOn,

} from "react-icons/md";

import { IoLogoWhatsapp } from "react-icons/io";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const ContactInfo = () => {
const WHATSAPP_NUMBER="201118256116";
const WHATSAPP_MESSAGE=encodeURIComponent(
  "Hello! I would like to contact you."
);
const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
  return (
    <Card h="fit-content">
      <CardBody>
        <VStack
          align="start"
          spacing={6}
        >
          <HStack>
            <Icon as={MdEmail} color="brand.600" />
            <Text>shimaahmed871@gmail.com</Text>
          </HStack>

          <HStack>
            <Icon as={FaGithub} color="brand.600" />
            <Link
              href="https://github.com/Shimaa12Ahmed"
              isExternal
            >
              GitHub
            </Link>
          </HStack>

          <HStack>
            <Icon as={FaLinkedin} color="brand.600" />
            <Link
              href="https://www.linkedin.com/in/shaima-ahmed-9aba78300/"
              isExternal
            >
              LinkedIn
            </Link>
          </HStack>
<HStack>
            <Icon as={IoLogoWhatsapp } color="brand.600" />
            <Link
  href={WHATSAPP_URL}
  isExternal
>
  01118256116
</Link>
          </HStack>
          <HStack>
            <Icon as={MdLocationOn} color="brand.600" />
            <Text>Egypt</Text>
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default ContactInfo;
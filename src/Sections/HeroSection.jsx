import { Container, Flex} from "@chakra-ui/react";

import Content from "../Components/Hero/Content";
import HeroImage from "../Components/Hero/HeroImage";

const HeroSection = () => {
  return (
    <>
    <Container  maxW='7xl'  id="home"  py={{ base: 10, md: 20 }} px={{ base: 4, md: 8 }} >
<Flex   direction={{ base: "column-reverse", lg: "row" }}
    align="center"
    justify="space-between"
    gap={12}
    minH="80vh"
    py={20}>
  <Content/>
  <HeroImage/>
</Flex>
    </Container>
    </>
  )
}

export default HeroSection
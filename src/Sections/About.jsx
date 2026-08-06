import React from 'react'
import { Box,Card,CardBody,Text, Heading,chakra } from '@chakra-ui/react'
import { motion } from "framer-motion";
import { fadeUp } from '../theme/animation';
const MotionBox = chakra(motion.div);
const About = () => {
  return (
    <>
    <Box layerStyle="section" id="about">
<Heading textStyle={"sectionTitle"} mb={12} textAlign="center">About Me</Heading>
<MotionBox
initial="hidden"

whileInView="visible"

viewport={{ once: true }}

variants={fadeUp}>
    <Card  maxW="800px" mx="auto">
      
      <CardBody p={{ base: 8, md: 12 }}>
        <Text   textStyle="paragraph" maxW="700px" mb={2}>
       I'm a Front-End Developer specializing in React.js with a passion for building scalable, responsive, and user-focused web applications. 
        My journey began at 18 when I built my first website, long before discovering modern frameworks.
        </Text>
         <Text   textStyle="paragraph" maxW="700px" >
        Since then, I've focused on developing clean, maintainable interfaces and transforming complex frontend logic into seamless user experiences. I enjoy solving challenging problems, writing scalable code, and building applications that are both intuitive for users and easy for teams to maintain.
       </Text>
      </CardBody>
    </Card>
    </MotionBox>
</Box>
</>
  )
}

export default About



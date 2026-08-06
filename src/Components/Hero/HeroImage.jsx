import { Box, Image, chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";
import shimaa from "/images/shimaa.png";
import { scaleImage } from "../../theme/animation";

const MotionBox = chakra(motion.div);

const HeroImage = () => {
  return (
    <Box
      flex="1"
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
     
      <Box
        position="absolute"
        w={{ base: "260px", md: "360px" }}
        h={{ base: "260px", md: "360px" }}
        rounded="full"
        bg="brand.100"
        filter="blur(70px)"
        opacity={0.6}
      />

    
      <Box
        position="absolute"
        w={{ base: "220px", md: "300px" }}
        h={{ base: "220px", md: "300px" }}
        rounded="full"
        bg="brand.200"
        filter="blur(40px)"
        opacity={0.4}
      />

      <MotionBox
        variants={scaleImage}
        initial="hidden"
        animate="visible"
        whileHover={{
          scale: 1.03,
          y: -5,
          transition: { duration: 0.3 },
        }}
        sx={{
          animation: "float 4s ease-in-out infinite",
        }}
        zIndex={1}
      >
        <Image
          src={shimaa}
          alt="Shimaa Ahmed"
          boxSize={{ base: "220px", md: "320px" }}
          objectFit="cover"
          borderRadius="full"
          border="6px solid"
          borderColor="white"
          shadow="xl"
        />
      </MotionBox>

      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0px);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default HeroImage;
import {
  Box,
  Grid,
  chakra,
} from "@chakra-ui/react";

import { motion } from "framer-motion";
import { fadeUp } from "../theme/animation";

import ContactHeader from "../Components/ContactHeader";
import ContactForm from "../Components/Form/ContactForm";
import ContactInfo from "../Components/ContactInfo";

const MotionBox = chakra(motion.div);

const Contact = () => {
  return (
    <Box
      layerStyle="section"
      id="contact"
    >
      <ContactHeader />

      <MotionBox
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <Grid
          templateColumns={{
            base: "1fr",
            lg: "2fr 1fr",
          }}
          gap={8}
        >
          <ContactForm />

          <ContactInfo />
        </Grid>
      </MotionBox>
    </Box>
  );
};

export default Contact;
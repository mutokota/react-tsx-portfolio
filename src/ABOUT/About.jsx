import FadeInUp from "../COMPONENT/FadeInUp";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <FadeInUp>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        About画面です
      </motion.div>
    </FadeInUp>
  );
};

export default About;

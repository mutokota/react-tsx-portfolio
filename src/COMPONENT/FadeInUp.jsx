import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const FadeInUp = ({ children }: { children: ReactNode }) => {
  const fadeInBox = {
    initial: {
      height: "100vh",
      bottom: 0,
      opacity: 0,
    },
    animate: {
      height: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className="abosolute">
      <motion.div
        initial="initial"
        animate="animate"
        variants={fadeInBox}
        onAnimationStart={() => document.body.classList.add("overflow-hidden")}
        onAnimationComplete={() =>
          document.body.classList.remove("overflow-hidden")
        }
        className="relative bg-black w-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FadeInUp;

import * as React from "react";
import { motion } from "framer-motion";

export const Example = () => (
  <>
  {/* <motion.div
    animate={{ scale: 2 }}
    transition={{ duration: 1 }}
  /> */}

  <motion.div
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    transition={{
      duration: 5
    }}
    />
  </>
);

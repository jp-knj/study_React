import * as React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export const Example = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);

  return (
    <div className="wrapper">
      <motion.div
        className="container"
        style={{
          scale
        }}
      >

      <motion.div
        className="item"
        style={{
          scaleX: scrollYProgress
        }}
      />
      </motion.div>
    </div>
  );
};

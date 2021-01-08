import React, { useState } from 'react'
import { motion, useViewportScroll } from "framer-motion";
export const Hero = () => {
  const { scrollY } = useViewportScroll();
  const [hasScrolled, setHasScrolled] = useState(false);
  scrollY.onChange(value => {
    if (value > 100) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  });
  return (
      <section style={{ padding: 0 }}>
        <motion.div className="intro" transition={{ ease: "easeInOut", duration: 0.2 }}>
          <motion.div className="intro__left" initial={{ opacity: 0, translateX: -20 }} animate={{ opacity: 1, translateX: 0 }} transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
          >
            <h1>Omar <br />  Ibrahim <span /></h1>
          </motion.div>

          {/* <motion.div className="intro__right" initial={{ opacity: 0, translateX: 20 }} animate={{ opacity: 1, translateX: 0 }} transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}>

          </motion.div> */}
        </motion.div>
      </section>
  )
}

export default Hero;

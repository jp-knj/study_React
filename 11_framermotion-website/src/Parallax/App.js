import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { images } from "./images";
import "./styles.css";

const ParallaxImage = ({ src, ...img }) => {
  const [elementTop, setElementTop] = React.useState(false);
  const ref = React.useRef(null);
  const { scrollY } = useViewportScroll();

  const y = useTransform(scrollY, [elementTop, elementTop + 1], [1, -1], {
    clamp: false
  });

  React.useLayoutEffect(() => {
    const element = ref.current;
    setElementTop(element.offsetTop);
  }, [ref]);

  return (
    <div className="img-container" ref={ref}>
      <motion.div className="overlay" style={{ ...img, y }} />
      <img src={src} alt="" />
    </div>
  );
};

export default function App() {
  const { scrollYProgress } = useViewportScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -3000]);
  return (
    <div className="App">
      <motion.h1 style={{ x }}>Hello Parallax</motion.h1>
      {images.map((img, i) => (
        <ParallaxImage key={i} {...img} />
      ))}
    </div>
  );
}

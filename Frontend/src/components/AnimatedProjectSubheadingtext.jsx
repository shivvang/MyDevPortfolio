/* eslint-disable react/prop-types */
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

function AnimatedProjectSubheadingtext() {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  // Split text into words
  const text = "Projects, gotta create 'em all!";
  const words = text.split(" ");

  // Create opacity transforms for each word outside of the map
  const opacities = words.map((_, index) => {
    return useTransform(
      scrollYProgress,
      [0.1 * index, 0.1 * (index + 1)],
      [0, 1]
    );
  });

  return (
    <p
      ref={element}
      className="font-source text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold"
    >
      {words.map((word, index) => (
        <Word key={index} opacities={opacities} index={index}>
          {word}
        </Word>
      ))}
    </p>
  );
}

const Word = ({ children, opacities, index }) => {
  return (
    <span className="relative">
      <span className="absolute opacity-[0.3]">{children}</span>
      <motion.span
        style={{
          opacity: opacities[index],
        }} // Use the precomputed opacity
        className="inline-block mr-2 text-primary"
      >
        {children}
      </motion.span>
    </span>
  );
};
export default AnimatedProjectSubheadingtext;

/* eslint-disable react/prop-types */
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

function AnimatedProjectSubheadingtext() {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  const text = "Projects, gotta create 'em all!";
  const words = text.split(" ");

  const opacities = words.map((_, index) => {
    return useTransform(
      scrollYProgress,
      [0.2 * index, 0.2 * (index + 1)],
      [0, 1]
    );
  });

  return (
    <p
      ref={element}
      className="font-source text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-6"
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
        className="inline-block mr-2 text-secondary"
      >
        {children}
      </motion.span>
    </span>
  );
};

export default AnimatedProjectSubheadingtext;

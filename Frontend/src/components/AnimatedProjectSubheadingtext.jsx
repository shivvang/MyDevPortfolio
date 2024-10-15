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
    <motion.div ref={element} className="font-source text-4xl font-bold">
      {words.map((word, index) => (
        <motion.span
          key={index}
          style={{
            opacity: opacities[index],
          }} // Use the precomputed opacity
          className="inline-block mr-2 text-primary"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default AnimatedProjectSubheadingtext;

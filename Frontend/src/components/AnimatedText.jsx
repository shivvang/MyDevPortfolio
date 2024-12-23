/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const AnimatedText = () => {
  return (
    <h1
      className="text-4xl text-tertiary font-source sm:text-6xl md:text-7xl lg:text-8xl flex items-center gap-2"
      style={{ textShadow: "2px 2px 3px rgba(0, 0, 0, 1)" }}
    >
      Hi, I&apos;m
      <FlipText name="Shivang" />
    </h1>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipText = ({ name }) => {
  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className="relative font-sans inline-block overflow-hidden whitespace-nowrap align-bottom"
      style={{
        lineHeight: 1.2,
      }}
    >
      <div className="relative z-10 overflow-hidden">
        {name.split("").map((l, i) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: 0 },
              hovered: { y: "-106%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            style={{ willChange: "transform" }}
          >
            {l}
          </motion.span>
        ))}
      </div>

      <div className="absolute inset-0">
        {name.split("").map((l, i) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: "106%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            style={{
              willChange: "transform",
            }}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.span>
  );
};

export default AnimatedText;

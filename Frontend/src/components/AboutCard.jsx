import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const AboutCard = () => {
  const ref = useRef(null);

  // Create motion values for X and Y
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the motion with springs
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  // Use motion template to combine X and Y rotations
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  // Constants to control rotation range
  const ROTATION_RANGE = 32.5;
  const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

  // Mouse move handler to update X and Y motion values
  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to the card
    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    // Set the rotation values
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  // Reset motion values on mouse leave
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative grid min-h-screen w-full rounded-xl bg-secondary"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-8 grid place-content-center rounded-xl bg-white shadow-lg"
      >
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-xs md:text-sm lg:text-base font-semibold leading-relaxed px-4"
        >
          <strong>I am Shivang.</strong> <br />
          I&apos;m a mechanical engineering student, but my curiosity for{" "}
          <strong>software development</strong> led me to explore various
          technologies beyond the mechanical field.
          <br />
          <br />I thrive on challenges that strengthen my{" "}
          <strong>critical and logical thinking</strong>. Platforms like{" "}
          <strong>LeetCode</strong> and <strong>GeeksforGeeks</strong> are my
          go-to tools to sharpen these skills and apply them to solving complex
          problems in software development.
          <br />
          <br />
          While I study mechanical engineering, I&apos;m deeply invested in the
          tech world, continually honing my skills for a future in{" "}
          <strong>software development</strong>.
        </p>
      </div>
    </motion.div>
  );
};

export default AboutCard;

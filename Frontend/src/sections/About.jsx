import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import SwipeCards from "../components/SwipeCard";
import { useEffect } from "react";
import StatCard from "../components/StatCard";

const COLORS = [
  "#111111", // Jet black
  "#5A5A5A", // Neutral grey
  "#E0E0E0", // Pale white
  "#FFB6C1", // Light pink
  "#48D1CC", // Cool turquoise
];

export default function About() {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%,#ffff 50%,${color})`;
  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);
  return (
    <section className="flex flex-col p-8 gap-4">
      <div className="flex gap-2 items-center ">
        <h1 className="font-source text-primary text-4xl md:text-5xl lg:text-6xl">
          About<span className="text-secondary">.</span>
        </h1>
        <hr className="bg-secondary w-full h-1" />
      </div>

      <div className="flex flex-col md:flex-row  mt-4 break-words">
        {/* This div takes 60% width on medium and larger screens */}
        <motion.div
          className="bg-tertiary w-full md:w-3/5 shadow-lg p-4 border-2 border-primary"
          style={{
            backgroundImage,
          }}
        >
          <p className="font-futura text-secondary lg:leading-10">
            👨‍💻{" "}
            <span className="font-bold text-primary">From Gears to Code:</span>{" "}
            Once a mechanical engineer, now a{" "}
            <span className="font-extrabold text-primary">
              full-stack explorer
            </span>{" "}
            navigating the digital world with a{" "}
            <span className="font-extrabold text-primary">
              passion for backend wizardry.
            </span>{" "}
            My curiosity knows no bounds—whether it&apos;s{" "}
            <span className="font-bold text-primary">building systems</span>,
            diving into{" "}
            <span className="font-bold text-primary">new technologies</span>, or
            cracking the toughest{" "}
            <span className="font-extrabold text-primary">
              data structure problems
            </span>{" "}
            on platforms like{" "}
            <span className="font-bold text-primary">Leetcode</span>, I&apos;m
            always searching for the{" "}
            <span className="font-bold text-primary">
              why and how of things.
            </span>{" "}
            From studying{" "}
            <span className="font-bold text-primary">CS fundamentals</span> to
            crafting solutions across domains, I&apos;m driven by the joy of{" "}
            <span className="font-extrabold text-primary">
              problem-solving and innovation.
            </span>{" "}
            Each line of code is a new adventure, and I&apos;m constantly
            sharpening my{" "}
            <span className="font-bold text-primary">critical thinking</span>,
            logic, and love for learning. 😁
          </p>
        </motion.div>

        {/* This div takes 40% width on medium and larger screens */}
        <div className="w-full md:w-2/5 bg-primary p-4">
          <h1 className="font-source text-2xl text-white">My Skillsets</h1>
          <div className="mt-4">
            <SwipeCards />
          </div>
        </div>
      </div>
      <StatCard />
    </section>
  );
}

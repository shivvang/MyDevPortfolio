import {
  motion,
  useMotionValue,
  useMotionTemplate,
  animate,
} from "framer-motion";
import SwipeCards from "../components/SwipeCard";
import { useEffect } from "react";
import StatCard from "../components/StatCard";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const COLORS = ["#13ffaa", "#1e67c6", "#ce84cf", "#dd335c"];

export default function About() {
  const notify = () => toast("The key to discovery is just a swipe away...");

  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #222222 50%, ${color})`;
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
          className="w-full md:w-3/5 shadow-lg p-6 border-4 border-primary"
          style={{
            backgroundImage,
          }}
        >
          <p className="font-futura font-semibold  text-[#A6A6A6] md:leading-6  lg:leading-8">
            👨‍💻 <span className="font-bold text-white">From Gears to Code:</span>{" "}
            Once a mechanical engineer, now a{" "}
            <span className="font-extrabold text-white">
              full-stack explorer
            </span>{" "}
            navigating the digital world with a{" "}
            <span className="font-extrabold text-white">
              passion for backend wizardry.
            </span>{" "}
            My curiosity knows no bounds—whether it&apos;s{" "}
            <span className="font-bold text-white">building systems</span>,
            diving into{" "}
            <span className="font-bold text-white">new technologies</span>, or
            cracking the toughest{" "}
            <span className="font-extrabold text-white">
              data structure problems
            </span>{" "}
            , I&apos;m always searching for the{" "}
            <span className="font-bold text-white">why and how of things.</span>{" "}
            From studying{" "}
            <span className="font-bold text-white">CS fundamentals</span> to
            crafting solutions across domains, I&apos;m driven by the joy of{" "}
            <span className="font-extrabold text-white">
              problem-solving and innovation.
            </span>{" "}
            Each line of code is a new adventure, and I&apos;m constantly
            sharpening my{" "}
            <span className="font-bold text-white">critical thinking</span>,
            logic, and love for learning. 😁
          </p>
        </motion.div>

        {/* This div takes 40% width on medium and larger screens */}
        <div className="w-full md:w-2/5 bg-primary p-4">
          <h1 className="font-source text-2xl text-white" onMouseEnter={notify}>
            My Skillsets
          </h1>
          <div className="mt-4">
            <SwipeCards />
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={2000} // Toast disappears after 2 seconds
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
      <StatCard />
    </section>
  );
}

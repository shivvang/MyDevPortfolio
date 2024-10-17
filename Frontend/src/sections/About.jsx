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
import AboutHeader from "../components/AboutHeader";

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
      <AboutHeader />

      <div className="flex flex-col md:flex-row  mt-4 break-words">
        {/* This div takes 60% width on medium and larger screens */}
        <motion.div
          className="w-full md:w-3/5 shadow-lg p-6 border-4 border-secondary"
          style={{
            backgroundImage,
          }}
        >
          <p className="font-futura font-semibold text-[#A6A6A6] leading-6 sm:leading-7 md:leading-8 lg:leading-9 text-sm sm:text-base md:text-lg lg:text-xl">
            👨‍💻{" "}
            <span className="font-bold text-white font-avenir">
              From Gears to Code:
            </span>{" "}
            Once a mechanical engineer, now a{" "}
            <span className="font-extrabold text-white font-avenir">
              full-stack explorer
            </span>{" "}
            navigating the digital world with a{" "}
            <span className="font-extrabold text-white font-avenir">
              passion for backend wizardry.
            </span>{" "}
            My curiosity knows no bounds—whether it&apos;s{" "}
            <span className="font-bold text-white font-avenir">
              building systems
            </span>
            , diving into{" "}
            <span className="font-bold text-white font-avenir">
              new technologies
            </span>
            , or cracking the toughest{" "}
            <span className="font-extrabold text-white font-avenir">
              data structure problems
            </span>{" "}
            , I&apos;m always searching for the{" "}
            <span className="font-bold text-white font-avenir">
              why and how of things.
            </span>{" "}
            From studying{" "}
            <span className="font-bold text-white">CS fundamentals</span> to
            crafting solutions across domains, I&apos;m driven by the joy of{" "}
            <span className="font-extrabold text-white font-avenir">
              problem-solving and innovation.
            </span>{" "}
            Each line of code is a new adventure, and I&apos;m constantly
            sharpening my{" "}
            <span className="font-bold text-white font-avenir">
              critical thinking
            </span>
            , logic, and love for learning. 😁
          </p>
        </motion.div>

        {/* This div takes 40% width on medium and larger screens */}
        <div className="w-full md:w-2/5 bg-primary p-4">
          <h1
            className="font-source text-2xl   text-white"
            onMouseEnter={notify}
            style={{ textShadow: "2px 2px 5px rgba(128, 128, 128, 0.9)" }}
          >
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

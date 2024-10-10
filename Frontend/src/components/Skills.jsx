/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

//image imports
import Reactjs from "../assets/Reactjs.png";
import Nodejs from "../assets/Nodejs.png";
import MongoDb from "../assets/MongoDb.png";
import CPlusPlus from "../assets/C++.png";
import Html from "../assets/Html.jpg";
import Css from "../assets/Css.jpg";
import Javascript from "../assets/Js.png";
import MySql from "../assets/MySql.png";
import TailwindCss from "../assets/Tailwindcss.jpg";

function Skills() {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-neutral-950">
      <h2 className="relative z-0 text-[10vw] sm:text-[15vw] md:text-[200px] font-black text-neutral-800">
        Tech Stack<span className="text-yellow-500">.</span>
      </h2>
      <Cards />
    </section>
  );
}

export default Skills;

function Cards() {
  const contiainerRef = useRef(null);
  return (
    <div ref={contiainerRef} className="absolute inset-0 z-10">
      <Card
        contiainerRef={contiainerRef}
        src={Reactjs}
        alt="React"
        rotate="6deg"
        top="20%"
        left="25%"
        className="w-24 sm:w-36 md:w-56"
      />

      <Card
        contiainerRef={contiainerRef}
        src={Nodejs}
        alt="Node.js"
        rotate="8deg"
        top="10%"
        left="45%"
        className="w-24 sm:w-36 md:w-56"
      />

      <Card
        contiainerRef={contiainerRef}
        src={MongoDb}
        alt="MongoDB"
        rotate="12deg"
        top="50%"
        left="75%"
        className="w-24 sm:w-36 md:w-56"
      />

      <Card
        contiainerRef={contiainerRef}
        src={CPlusPlus}
        alt="C++"
        rotate="35deg"
        top="75%"
        left="15%"
        className="w-24 sm:w-36 md:w-56"
      />
      <Card
        contiainerRef={contiainerRef}
        src={Html}
        alt="HTML"
        rotate="8deg"
        top="80%"
        left="25%"
        className="w-24 sm:w-36 md:w-56"
      />
      <Card
        contiainerRef={contiainerRef}
        src={Css}
        alt="CSS"
        rotate="45deg"
        top="0%"
        left="5%"
        className="w-24 sm:w-36 md:w-56"
      />
      <Card
        contiainerRef={contiainerRef}
        src={Javascript}
        alt="JavaScript"
        rotate="50deg"
        top="60%"
        left="40%"
        className="w-24 sm:w-36 md:w-56"
      />
      <Card
        contiainerRef={contiainerRef}
        src={MySql}
        alt="MySQL"
        rotate="60deg"
        top="40%"
        left="10%"
        className="w-24 sm:w-36 md:w-56"
      />
      <Card
        contiainerRef={contiainerRef}
        src={TailwindCss}
        alt="TailwindCss"
        rotate="20deg"
        top="20%"
        left="50%"
        className="w-24 sm:w-36 md:w-56"
      />
    </div>
  );
}

function Card({ contiainerRef, className, alt, top, left, rotate, src }) {
  const [zIndex, setZindex] = useState(0);
  const updateZindex = () => {
    const els = document.querySelectorAll(".drag-elements");
    let maxZindex = -Infinity;
    els.forEach((el) => {
      let zindex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );
      if (!isNaN(zindex) && zindex > maxZindex) {
        maxZindex = zindex;
      }
    });
    setZindex(maxZindex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZindex}
      src={src}
      alt={alt}
      drag
      dragConstraints={contiainerRef}
      dragElastic={0.65}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute w-24 sm:w-36 md:w-56 bg-neutral-200 p-1 pb-4",
        className
      )}
    />
  );
}

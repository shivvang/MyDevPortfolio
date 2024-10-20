import { useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";

const App = () => {
  const trailerRef = useRef(null);
  const scalingRef = useRef(false);
  useEffect(() => {
    const showSecretMessage = () => {
      toast.info(
        "🕵️‍♂️ Psst... If you're looking for my resume, maybe it's hidden in the footer... but where exactly is the footer?",
        {
          position: "top-center",
          autoClose: 5000, // Auto close the toast after 5 seconds
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        }
      );
    };

    // Show the message a few seconds after the page loads
    setTimeout(showSecretMessage, 1000);
  }, []);

  useEffect(() => {
    const trailer = trailerRef.current;
    let mouseX = 0,
      mouseY = 0;
    let posX = 0,
      posY = 0;

    const lerp = (start, end, amount) => start + (end - start) * amount;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      posX = lerp(posX, mouseX, 0.1);
      posY = lerp(posY, mouseY, 0.1);

      // Update the trailer position
      trailer.style.transform = `translate(${posX}px, ${posY}px) ${
        scalingRef.current ? "scale(2)" : "scale(1)"
      }`; // Conditional scaling

      requestAnimationFrame(animate);
    };

    // Start the animation loop
    requestAnimationFrame(animate);
    window.addEventListener("mousemove", handleMouseMove);

    // Handle scaling on hover
    const handleMouseEnter = () => {
      scalingRef.current = true; // Set scaling to true
    };

    const handleMouseLeave = () => {
      scalingRef.current = false; // Set scaling to false
    };

    // Select all relevant elements
    const hoverElements = document.querySelectorAll(
      "a, p, img, button, h1, h2, h3"
    );

    // Add hover event listeners
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      // Clean up hover event listeners
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col gap-2">
      {/* The  cursor (trailer) */}
      <div
        ref={trailerRef}
        className="h-20 w-20 bg-white rounded-full fixed left-0 top-0 z-50 transition-transform duration-300 ease-out mix-blend-difference pointer-events-none"
      ></div>

      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;

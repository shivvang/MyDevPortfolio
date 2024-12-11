import AnimatedProjectSubheadingtext from "../components/AnimatedProjectSubheadingtext";
import ProjectCard from "../components/ProjectCard";
import ProjectsHeader from "../components/ProjectsHeader ";

import DevPortfolioCoverImage from "../assests/devPortfolioCoverImage.png";
import RealEstateCoverImage from "../assests/RealEstateCoverImage.png";
import ChatAppCoverImage from "../assests/ChatAppCoverImage.png";

function Projects() {
  return (
    <section id="projects" className="flex flex-col p-8 gap-10 my-4">
      {/* Section Header */}
      <ProjectsHeader />

      {/* Animated Subheading */}
      <AnimatedProjectSubheadingtext />

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <div className="transform hover:scale-105 transition-all duration-300 ease-in-out rotate-1">
          <ProjectCard
            title="Real Estate MarketPlace"
            imageUrl={RealEstateCoverImage}
            abilities={["Insight Scan ", "Trail Tracker", "Echo Mark"]}
            techStack={[
              "React",
              "TailwindCss",
              "Node.js",
              "MongoDb",
              "Express.js",
              "React Redux",
              "Firebase",
            ]}
            githubLink="https://github.com/shivvang/Real_estate_marketplace"
          />
        </div>
        <div className="transform hover:scale-105 transition-all duration-300 ease-in-out rotate-2">
          <ProjectCard
            title="Connectify"
            imageUrl={ChatAppCoverImage}
            abilities={[
              "Instant Sync",
              "Load Surge",
              "Media Burst",
              "Secure Shield",
            ]}
            description="This project is about building an awesome web app with React."
            techStack={[
              "React",
              "ShadCn",
              "Zustand",
              "Node.js",
              "Express.js",
              "Firebase",
              "Socket.Io",
              "MongoDb",
              "TailwindCss",
            ]}
            githubLink="https://github.com/shivvang/chat_app_but_better"
            
          />
        </div>
        <div className="transform hover:scale-105 transition-all duration-300 ease-in-out">
          <ProjectCard
            title="DevShowcase"
            imageUrl={DevPortfolioCoverImage}
            abilities={["Ghost Trail", "Aura Flicker", "Spectral Shift"]}
            description="This project is about building an awesome web app with React."
            techStack={["React", "TailwindCss", "FramerMotion"]}
            githubLink="https://github.com/shivvang/MyDevPortfolio"
            LiveLink="https://my-dev-portfolio-tau.vercel.app/"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;

import AnimatedProjectSubheadingtext from "../components/AnimatedProjectSubheadingtext";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section className="flex flex-col p-8 gap-10">
      {/* Section Header */}
      <div className="flex gap-2 items-center">
        <hr className="bg-secondary w-full h-1" />
        <h1 className="font-source text-primary text-4xl md:text-5xl lg:text-6xl">
          Projects<span className="text-secondary">.</span>
        </h1>
      </div>

      {/* Animated Subheading */}
      <AnimatedProjectSubheadingtext />

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <div className="transform hover:scale-105 transition-all duration-300 ease-in-out rotate-1">
          <ProjectCard />
        </div>
        <div className="transform hover:scale-105 transition-all duration-300 ease-in-out rotate-2">
          <ProjectCard />
        </div>
        <div className="transform hover:scale-105 transition-all duration-300 ease-in-out">
          <ProjectCard />
        </div>
        <div className="transform hover:scale-105 transition-all duration-300 ease-in-out -rotate-1">
          <ProjectCard />
        </div>
        <div className="transform hover:scale-105 transition-all duration-300 ease-in-out rotate-1">
          <ProjectCard />
        </div>
      </div>
    </section>
  );
}

export default Projects;

import AnimatedProjectSubheadingtext from "../components/AnimatedProjectSubheadingtext";
import ProjectCard from "../components/ProjectCard";
import ProjectsHeader from "../components/ProjectsHeader ";

function Projects() {
  return (
    <section className="flex flex-col p-8 gap-10">
      {/* Section Header */}
      <ProjectsHeader />

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

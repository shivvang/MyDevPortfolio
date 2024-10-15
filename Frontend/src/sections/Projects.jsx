import AnimatedProjectSubheadingtext from "../components/AnimatedProjectSubheadingtext";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section className="flex flex-col p-8 gap-6">
      <div className="flex gap-2 items-center ">
        <hr className="bg-secondary w-full h-1" />
        <h1 className="font-source text-primary text-4xl md:text-5xl lg:text-6xl">
          Projects<span className="text-secondary">.</span>
        </h1>
      </div>
      <AnimatedProjectSubheadingtext />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-4">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}

export default Projects;

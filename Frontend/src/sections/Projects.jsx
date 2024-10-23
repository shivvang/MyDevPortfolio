import AnimatedProjectSubheadingtext from "../components/AnimatedProjectSubheadingtext";
import ProjectCard from "../components/ProjectCard";
import ProjectsHeader from "../components/ProjectsHeader ";

function Projects() {
  return (
    <section id="projects" className="flex flex-col p-8 gap-10">
      {/* Section Header */}
      <ProjectsHeader />

      {/* Animated Subheading */}
      <AnimatedProjectSubheadingtext />

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <div className="transform hover:scale-105 transition-all duration-300 ease-in-out rotate-1">
          <ProjectCard
            title="Real Estate MarketPlace"
            imageUrl="https://example.com/project-image.jpg"
            abilities={[
              "Advanced Search",
              "Recent Properties",
              "Commenting System",
              "Property Management",
            ]}
            techStack={[
              "React",
              "Node.js",
              "MongoDb",
              "Express.js",
              "React Redux",
              "Firebase",
            ]}
            githubLink="https://github.com/shivvang/Real_estate_marketplace"
            LiveLink="https://github.com/shivvang/Real_estate_marketplace"
          />
        </div>
        <div className="transform hover:scale-105 transition-all duration-300 ease-in-out rotate-2">
          <ProjectCard
            title="My Awesome Project"
            imageUrl="https://example.com/project-image.jpg"
            abilities="Fast, Scalable, Secure"
            description="This project is about building an awesome web app with React."
            techStack={["React", "Node.js", "Firebase"]}
            githubLink="https://github.com/my-awesome-project"
          />
        </div>
        <div className="transform hover:scale-105 transition-all duration-300 ease-in-out">
          <ProjectCard
            title="My Awesome Project"
            imageUrl="https://example.com/project-image.jpg"
            abilities="Fast, Scalable, Secure"
            description="This project is about building an awesome web app with React."
            techStack={["React", "Node.js", "Firebase"]}
            githubLink="https://github.com/my-awesome-project"
          />
        </div>
        <div className="transform hover:scale-105 transition-all duration-300 ease-in-out -rotate-1">
          <ProjectCard
            title="My Awesome Project"
            imageUrl="https://example.com/project-image.jpg"
            abilities="Fast, Scalable, Secure"
            description="This project is about building an awesome web app with React."
            techStack={["React", "Node.js", "Firebase"]}
            githubLink="https://github.com/my-awesome-project"
          />
        </div>
        <div className="transform hover:scale-105 transition-all duration-300 ease-in-out rotate-1">
          <ProjectCard
            title="My Awesome Project"
            imageUrl="https://example.com/project-image.jpg"
            abilities="Fast, Scalable, Secure"
            description="This project is about building an awesome web app with React."
            techStack={["React", "Node.js", "Firebase"]}
            githubLink="https://github.com/my-awesome-project"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;

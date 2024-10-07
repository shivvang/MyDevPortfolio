import Card from "../components/Card";

function Projects() {
  return (
    <section className="pb-16 lg:py-24 lg:max-w-5xl mx-auto">
      <div className="px-4 pt-4 md:px-8 md:pt-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl mt-2 mb-4 uppercase font-semibold tracking-widest bg-gradient-to-r from-yellow-300 to-yellow-500 text-transparent bg-clip-text">
            Featured Projects
          </h2>
          <p className="font-black text-[#bf40bf] text-sm md:text-lg lg:text-xl mt-2 max-w-md mx-auto">
            See How I Transform concepts into engaging digital experiences.
          </p>
        </div>

        <Card />
      </div>
    </section>
  );
}

export default Projects;

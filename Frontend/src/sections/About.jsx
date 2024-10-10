import AboutCard from "../components/AboutCard";
import Skills from "../components/Skills";

function About() {
  return (
    <>
      {/* Header Section */}
      <div className="flex flex-col items-center md:flex-row md:items-center p-4 md:p-6">
        <h1 className="text-center text-3xl md:text-4xl font-black mb-4 md:mb-0 md:mr-4">
          About<span className="text-yellow-500">.</span>
        </h1>
        <hr className="w-3/4 md:w-auto flex-grow border-yellow-500" />
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 md:p-6">
        {/* About Card Section */}
        <div className="p-4 md:p-8 bg-black rounded-lg">
          <AboutCard />
        </div>

        {/* Skills Section */}
        <div className="p-4 md:p-6 bg-black rounded-lg">
          <Skills />
        </div>
      </div>
    </>
  );
}

export default About;

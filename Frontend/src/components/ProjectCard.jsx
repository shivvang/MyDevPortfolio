/* eslint-disable react/prop-types */

function ProjectCard({
  title,
  imageUrl,
  abilities,
  techStack,
  githubLink,
  LiveLink,
}) {
  return (
    <div className="relative flex flex-col bg-tertiary p-4 rounded-xl shadow-lg hover:shadow-2xl border-8 border-gradient-primary-to-secondary transform hover:-translate-y-1 transition-all duration-300 ease-out hover:scale-105">
      {/* Image Section */}
      <div className="bg-gradient-to-b from-secondary to-primary rounded-lg p-2 hover:opacity-90 transition-opacity duration-300">
        <img
          src={imageUrl}
          alt="Project Image"
          className="rounded-lg object-cover w-full h-[150px] md:h-[200px] border-2 border-white"
        />
      </div>

      {/* Title Section */}
      <h1 className="font-sans text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mt-4 bg-gradient-to-r from-secondary to-primary py-2 px-4 rounded-md shadow-lg hover:text-white transition-colors duration-300">
        {title}
      </h1>

      {/* Abilities Section */}
      <div className="mt-4">
        <p className="text-primary font-semibold text-lg font-source">
          Abilities:
        </p>
        <p className="text-secondary text-sm md:text-base lg:text-lg leading-tight font-avenir">
          {Array.isArray(abilities) && abilities.length > 0 ? (
            abilities.map((ability, index) => (
              <span key={index} className="block my-1">
                {ability}
              </span>
            ))
          ) : (
            <span>No abilities available</span>
          )}
        </p>
      </div>

      {/* Tech Section */}
      <div className="flex justify-between items-center mt-4 p-2 bg-gradient-to-r from-tertiary to-white rounded-lg shadow-inner font-avenir">
        <p className="text-primary font-bold">Tech Stack:</p>
        <p className="text-secondary text-sm md:text-base">
          {techStack && techStack.length > 0 ? techStack.join(", ") : "N/A"}
        </p>
      </div>

      {/* Links Section */}
      <div className="flex justify-between mt-6 text-secondary font-bold font-futura">
        <a
          href={githubLink}
          className="hover:text-primary transition-all duration-200 hover:scale-110"
        >
          GitHub
        </a>
        <a
          href={LiveLink}
          className="hover:text-primary transition-all duration-200 cursor-pointer hover:scale-110"
        >
          Live Link
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;

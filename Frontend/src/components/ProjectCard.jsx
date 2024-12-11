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
    <div className="relative bg-tertiary rounded-lg shadow-2xl border-4 border-secondary max-w-xs mx-auto transform hover:-translate-y-1 transition-all duration-300 ease-out hover:scale-105 p-4 sm:max-w-sm md:max-w-md lg:max-w-lg">
      {/* Card Header with Title and HP */}
      <div className="flex items-center justify-between rounded-t-md bg-gradient-to-r from-secondary to-primary px-4 py-3 border-b-4 border-primary shadow-md">
        <span className="text-white font-bold text-xl tracking-wide uppercase">
          {title}
        </span>
        <div className="flex items-center bg-white text-primary rounded-full px-3 py-1 border-2 border-primary shadow-lg">
          <span className="font-bold text-md">HP</span>
          <span className="ml-2 font-bold text-lg">100</span>
        </div>
      </div>

      {/* Image Section with adjusted size and responsiveness */}
      <div className="p-4 bg-tertiary border-4 border-primary rounded-lg mt-4 flex justify-center items-center transition-all duration-300 hover:shadow-2xl relative overflow-hidden group">
        <img
          src={imageUrl}
          alt="Project Image"
          className="rounded-lg object-cover w-48 h-36 sm:w-56 sm:h-40 md:w-60 md:h-44 lg:w-64 lg:h-48 border-4 border-secondary shadow-lg transition-transform duration-300 transform group-hover:scale-105 group-hover:translate-y-2 group-hover:translate-x-2"
        />
        <div className="absolute inset-0 rounded-lg border-4 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary -z-10" />
      </div>

      {/* Abilities Section - Styled like Pokémon moves */}
      <div className="mt-4 px-4 py-3 bg-gradient-to-r from-primary to-secondary rounded-md border-2 border-primary">
        <p className="text-white font-bold text-lg mb-2 border-b-2 border-white inline-block pb-1">
          Abilities
        </p>
        <div className="text-white text-base mt-2">
          {Array.isArray(abilities) && abilities.length > 0 ? (
            abilities.map((ability, index) => (
              <div
                key={index}
                className="flex justify-between items-center mt-2 bg-secondary rounded-md px-4 py-2 border-2 border-primary shadow-[3px_3px_0px_black] transition-all hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
              >
                <span className="font-bold text-primary">{ability}</span>
                <span className="text-white font-bold">⚡ 20</span>
              </div>
            ))
          ) : (
            <span className="italic text-white">No abilities available</span>
          )}
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="mt-4 px-4 py-3 bg-white rounded-lg shadow-inner border-4 border-secondary mx-4 text-center">
        <p className="text-primary font-bold border-b-2 border-primary inline-block pb-1">
          Tech Stack
        </p>
        <p className="text-secondary text-sm mt-2">
          {techStack && techStack.length > 0 ? techStack.join(", ") : "N/A"}
        </p>
      </div>

      {/* Links Section */}
      <div className="flex justify-between mt-6 text-secondary font-bold px-4 pb-4">
        <a
          href={githubLink}
          className="hover:text-primary transition-transform duration-200 hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        {LiveLink ? (
  <a
    href={LiveLink}
    className="hover:text-primary transition-transform duration-200 hover:scale-110"
    target="_blank"
    rel="noopener noreferrer"
  >
    Live Link
  </a>
) : (
  <span className="text-gray-400">Live Link Unavailable</span>
)}
      </div>
    </div>
  );
}

export default ProjectCard;

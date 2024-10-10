const portfolioProjects = [
  {
    title: "Something",
    year: "2024",
    advancetopicsincluded: [
      { title: "Some crazy tech people never seen before" },
      { title: "Even crazier innovation ahead" },
      { title: "Unimaginable breakthroughs!" },
    ],
    link: "https://yourprojectlink.com",
    image:
      "https://images.unsplash.com/photo-1494625927555-6ec4433b1571?w=500&auto=format&fit=crop&q=60",
  },
  {
    title: "Project 2",
    year: "2024",
    advancetopicsincluded: [
      { title: "Revolutionary ideas" },
      { title: "Game-changing concepts" },
      { title: "Mind-blowing tech" },
    ],
    link: "",
    image:
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=500&auto=format&fit=crop&q=60",
  },
  {
    title: "Project 3",
    year: "2024",
    advancetopicsincluded: [
      { title: "Next-level solutions" },
      { title: "Cutting-edge implementation" },
      { title: "Futuristic design" },
    ],
    link: "",
    image:
      "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?w=500&auto=format&fit=crop&q=60",
  },
];

export default function Card() {
  return (
    <div className="flex flex-col gap-14 mt-8 md:mt-10">
      {portfolioProjects.map((project) => (
        <div
          key={project.title}
          className="bg-[#0B0B0D] inset-10 rounded-3xl overflow-hidden pt-8 px-8 lg:pr-0 lg:pb-0"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center lg:gap-8">
            {/* Text Section */}
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-r from-yellow-300 to-yellow-500 inline-flex gap-2 font-bold uppercase tracking-widest text-transparent bg-clip-text text-xl md:text-2xl">
                <span>{project.title}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div>
              <h3 className="text-white text-sm mt-4">
                Enhanced User Experience
              </h3>
              <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
              <ul className="list-disc list-inside flex flex-col gap-4 mt-4">
                {project.advancetopicsincluded.map((item, idx) => (
                  <li className="text-white/50 text-sm md:text-base" key={idx}>
                    {item.title}
                  </li>
                ))}
              </ul>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold mt-8 md:w-auto px-6">
                    Visit Live Site
                  </button>
                </a>
              )}
            </div>

            {/* Image Section */}
            <img
              className="mt-8 lg:mt-0 lg:h-full lg:w-full"
              src={project.image}
              alt={project.title}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

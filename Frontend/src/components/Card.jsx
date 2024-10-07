import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const portfolioProjects = [
  {
    title: "something",
    year: "2024",
    advancetopicsincluded: [
      { title: "some crazy shit people never seen before" },
      { title: "some crazy shit people never seen before" },
      { title: "some crazy shit people never seen before" },
    ],
    link: "",
    image:
      "https://images.unsplash.com/photo-1494625927555-6ec4433b1571?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    title: "drugs",
    year: "2024",
    advancetopicsincluded: [
      { title: "some crazy shit people never seen before" },
      { title: "some crazy shit people never seen before" },
      { title: "some crazy shit people never seen before" },
    ],
    link: "",
    image:
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "daru",
    year: "2024",
    advancetopicsincluded: [
      { title: "some crazy shit people never seen before" },
      { title: "some crazy shit people never seen before" },
      { title: "some crazy shit people never seen before" },
    ],
    link: "",
    image:
      "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fHw%3D",
  },
];

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;





function Card() {
    const TiltCard = () => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    
      <div className="flex flex-col gap-14 mt-8 md:mt-10">
        {portfolioProjects.map((project) => (
          <div
            key={project.title}
            className=" p-10  rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              key={project.title}
              style={{
                transform: "translateZ(75px)",
                transformStyle: "preserve-3d",
              }}
              className="bg-[#0B0B0D] inset-10 rounded-3xl  z-10 overflow-hidden pt-8 px-8 
              lg:pr-0 lg:pb-0"
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
                    {project.advancetopicsincluded.map((item) => (
                      <li
                        className="text-white/50 text-sm md:text-base"
                        key={item.title}
                      >
                        {item.title}
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold mt-8 md:w-auto px-6">
                      Visit Live Site
                    </button>
                  </a>
                </div>

                {/* Image Section */}

                <img
                  className="mt-8 -mb-4 md:mb-0 lg:mb-0 lg:h-full lg:w-full"
                  src={project.image}
                  alt={project.title}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
  );
}

export default Card;

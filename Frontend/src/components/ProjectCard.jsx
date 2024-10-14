function PokemonStyleCard() {
  return (
    <div className="relative max-w-sm bg-white border-4 border-yellow-400 rounded-2xl shadow-xl p-4">
      {/* Image Section */}
      <div className="bg-gradient-to-b from-yellow-200 to-yellow-500 rounded-lg p-2">
        <img
          src="https://evokewellness.com/wp-content/uploads/2022/08/How-Did-Robert-Downey-Jr.-Get-Clean.jpg"
          alt="ProjectImage"
          className="rounded-lg object-cover w-full h-40"
        />
      </div>

      {/* Title Section */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mt-4 uppercase border-b-4 border-yellow-300 pb-1">
        Shivang is hot Af
      </h1>

      {/* Text/Abilities Section */}
      <div className="mt-4">
        <p className="text-gray-700 font-semibold text-lg">Abilities:</p>
        <p className="text-gray-600 text-sm leading-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ea
          earum aliquam qui magnam et praesentium. Eaque deserunt saepe, aliquid
          officia distinctio impedit excepturi cumque nam, eius voluptatibus,
          beatae nesciunt.
        </p>
      </div>

      {/* Tech Section */}
      <div className="flex justify-between items-center mt-4 p-2 bg-gray-100 rounded-lg shadow-inner">
        <p className="text-yellow-500 font-bold">Tech Stack:</p>
        <p className="text-gray-800">firebase, html, css, reactjs, nodejs</p>
      </div>

      {/* Links Section */}
      <div className="flex justify-between mt-6 text-yellow-600 font-bold">
        <a
          href="#"
          className="hover:text-yellow-400 transition-all duration-200"
        >
          GitHub
        </a>
        <a
          href="#"
          className="hover:text-yellow-400 transition-all duration-200"
        >
          Show More
        </a>
      </div>
    </div>
  );
}

export default PokemonStyleCard;

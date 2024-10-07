function About() {
  return (
    <>
      <div className="flex items-center p-6">
        <h1 className="text-center text-4xl font-black mr-4">
          About<span className="text-yellow-500">.</span>
        </h1>
        <hr className="flex-grow border-yellow-500" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-white">
        <div className="p-6 bg-black text-gray-200 rounded-lg">
          <p className="mb-4">
            I am a Mechanical Engineer turned Software Engineer, motivated by a
            passion for exploration and learning. My journey includes:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Exploring different areas in software, including machine learning
              and supervised learning.
            </li>
            <li>
              Sharpening my full-stack skills, delving into both frontend and
              backend development.
            </li>
            <li>
              Developing a strong preference for backend development, eager to
              learn more in this area.
            </li>
            <li>
              Building a solid foundation in key subjects such as:
              <ul className="list-disc list-inside space-y-1">
                <li>Data Structures and Algorithms</li>
                <li>Networking</li>
                <li>Object-Oriented Programming (OOP)</li>
                <li>Database Management Systems (DBMS)</li>
                <li>Operating Systems</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="flex flex-col p-6 bg-black text-gray-200 rounded-lg">
          <div className="text-2xl font-semibold mb-4">Skills</div>

          <div className="mt-6 text-2xl font-semibold">Beyond Code</div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-8 p-4 bg-black">
        <p className="text-gray-200">Coding profile related stuff</p>
      </div>
    </>
  );
}

export default About;

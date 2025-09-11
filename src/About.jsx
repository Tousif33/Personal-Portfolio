import { Helmet } from "react-helmet-async";
import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function About() {
  return (
    <>
      {/* Intro Section */}
      <section className="min-h-100 pt-28 bg-gray-900 text-white px-6">
        <h2 className="text-4xl font-bold text-center mb-8">Know Who I&apos;m</h2>

        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-300 text-center">
          Hi Everyone, I am{" "}
          <span className="text-purple-400 font-semibold">Tousif Raza</span> from{" "}
          <span className="text-purple-400 font-semibold">Bhubaneswar, India</span>.
          <br />
          I am currently pursuing my{" "}
          <span className="text-purple-400 font-semibold">
            B.Tech in Computer Science
          </span>{" "}
          from{" "}
          <span className="text-purple-400 font-semibold">
            Trident Academy of Technology (2024–2028)
          </span>.   
        </p>

        <div className="mt-8 max-w-2xl mx-auto text-gray-300 text-left leading-relaxed">
          <h3 className="text-2xl font-semibold text-purple-400 mb-4">
            Apart from coding, some other activities that I love to do:
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>✍️ Writing Blogs on Medium</li>
            <li>🎮 Playing Games</li>
            <li>✈️ Travelling</li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="Programlanguages"
        className="min-h-96 pt-20 bg-gray-900 text-white px-6"
      >
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

        <div className="flex flex-wrap justify-center gap-6 my-6">
          <div className="bg-gray-700 p-6 rounded-xl text-center flex flex-col items-center justify-center h-40 w-40 hover:scale-105 transition-transform hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(0,0,0,0.6)]">
            <FaHtml5 size={40} className="text-orange-500 mb-2" />
            HTML
          </div>

          <div className="bg-gray-700 p-6 rounded-xl text-center flex flex-col items-center justify-center h-40 w-40 hover:scale-105 transition-transform hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(0,0,0,0.6)]">
            <FaCss3Alt size={40} className="text-blue-500 mb-2" />
            CSS
          </div>

          <div className="bg-gray-700 p-6 rounded-xl text-center flex flex-col items-center justify-center h-40 w-40 hover:scale-105 transition-transform hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(0,0,0,0.6)]">
            <FaJs size={40} className="text-yellow-400 mb-2" />
            JavaScript
          </div>

          <div className="bg-gray-700 p-6 rounded-xl text-center flex flex-col items-center justify-center h-40 w-40 hover:scale-105 transition-transform hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(0,0,0,0.6)]">
            <FaJava size={40} className="text-red-500 mb-2" />
            Java
          </div>
           <div className="bg-gray-700 p-6 rounded-xl text-center flex flex-col items-center justify-center h-40 w-40 hover:scale-105 transition-transform hover:shadow-[0_0_25px_rgba(0,0,0,0.6)]">
            <FaReact size={40} className="text-blue-400 mb-2" />
            <span className="font-semibold">React</span>
          </div>

          {/* Tailwind Card */}
          <div className="bg-gray-700 p-6 rounded-xl text-center flex flex-col items-center justify-center h-40 w-40 hover:scale-105 transition-transform hover:shadow-[0_0_25px_rgba(0,0,0,0.6)]">
            <SiTailwindcss size={40} className="text-teal-400 mb-2" />
            <span className="font-semibold">Tailwind</span>
          </div>
        </div>
      </section>

      <section className="min-h-96 pt-20 bg-gray-900 text-white px-6">
  {/* Section Heading */}
  <h2 className="text-4xl font-bold text-center mb-12">Tools I Use</h2>

  {/* Cards Container */}
  <div className="flex justify-center gap-6 flex-wrap">
    {/* VS Code Card */}
    <div className="bg-gray-700 p-6 rounded-xl flex flex-col items-center justify-center w-40 h-40 text-center hover:scale-105 transition-transform hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(0,0,0,0.6)]">
      <img src="icons8-vs-code-144.png" alt="VsCode" className="w-12 h-12 mb-2" />
      <p>VS Code</p>
    </div>

    {/* Git Card */}
    <div className="bg-gray-700 p-6 rounded-xl flex flex-col items-center justify-center w-40 h-40 text-center hover:scale-105 transition-transform hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(0,0,0,0.6)]">
      <img src="icons8-git-100.png" alt="Git" className="w-12 h-12 mb-2" />
      <p>Git</p>
    </div>

    {/* Windows Card */}
    <div className="bg-gray-700 p-6 rounded-xl flex flex-col items-center justify-center w-40 h-40 text-center hover:scale-105 transition-transform hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(0,0,0,0.6)]">
      <img src="icons8-windows-144.png" alt="Windows" className="w-12 h-12 mb-2" />
      <p>Windows</p>
    </div>
  </div>
</section>



       
         
    </>
  );
}

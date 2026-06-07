
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaReact,
  FaNodeJs,
  FaWindows,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiGit,
  SiPostman,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export default function About() {
  return (
    <>
      {/* Intro Section */}
      <section className="min-h-100 pt-28 bg-gray-900 text-white px-6">
        <h2 className="text-4xl font-bold text-center mb-8">
          Know Who I&apos;m
        </h2>

        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-300 text-center">
          Hi Everyone, I am{" "}
          <span className="text-purple-400 font-semibold">Tousif Raza</span>{" "}
          from{" "}
          <span className="text-purple-400 font-semibold">
            Bhubaneswar, India
          </span>
          .
          <br />I am currently pursuing my{" "}
          <span className="text-purple-400 font-semibold">
            B.Tech in Computer Science
          </span>{" "}
          from{" "}
          <span className="text-purple-400 font-semibold">
            Trident Academy of Technology (2024–2028)
          </span>
          .
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
  className="py-20 bg-gray-900 text-white px-6"
>
  <h2 className="text-4xl font-bold text-center mb-4">
    Professional Skillset
  </h2>

  <p className="text-center text-gray-400 mb-12">
    Technologies I use to build modern web applications.
  </p>

  {/* Frontend */}
  <h3 className="text-2xl font-semibold text-purple-400 text-center mb-8">
    Frontend Development
  </h3>

  <div className="flex flex-wrap justify-center gap-6 mb-16">
    {[
      {
        icon: <FaHtml5 size={45} className="text-orange-500" />,
        name: "HTML5",
      },
      {
        icon: <FaCss3Alt size={45} className="text-blue-500" />,
        name: "CSS3",
      },
      {
        icon: <FaJs size={45} className="text-yellow-400" />,
        name: "JavaScript",
      },
      {
        icon: <FaReact size={45} className="text-cyan-400" />,
        name: "React.js",
      },
      {
        icon: <SiTailwindcss size={45} className="text-teal-400" />,
        name: "Tailwind CSS",
      },
    ].map((skill, index) => (
      <div
        key={index}
        className="bg-gray-800 border border-gray-700 p-6 rounded-2xl flex flex-col items-center justify-center h-40 w-40 text-center transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:border-purple-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]"
      >
        {skill.icon}
        <p className="mt-3 font-semibold">{skill.name}</p>
      </div>
    ))}
  </div>

  {/* Backend */}
  <h3 className="text-2xl font-semibold text-purple-400 text-center mb-8">
    Backend Development
  </h3>

  <div className="flex flex-wrap justify-center gap-6">
    {[
      {
        icon: <FaNodeJs size={45} className="text-green-500" />,
        name: "Node.js",
      },
      {
        icon: <SiExpress size={45} className="text-gray-300" />,
        name: "Express.js",
      },
      {
        icon: <SiMongodb size={45} className="text-green-600" />,
        name: "MongoDB",
      },
      {
        icon: <FaJava size={45} className="text-red-500" />,
        name: "Java",
      },
    ].map((skill, index) => (
      <div
        key={index}
        className="bg-gray-800 border border-gray-700 p-6 rounded-2xl flex flex-col items-center justify-center h-40 w-40 text-center transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:border-purple-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]"
      >
        {skill.icon}
        <p className="mt-3 font-semibold">{skill.name}</p>
      </div>
    ))}
  </div>
</section>

{/* Tools Section */}
<section className="py-20 bg-gray-900 text-white px-6">
  <h2 className="text-4xl font-bold text-center mb-4">
    Tools I Use
  </h2>

  <p className="text-center text-gray-400 mb-12">
    Development tools and platforms I work with.
  </p>

  <div className="flex flex-wrap justify-center gap-6">
    {[
      {
        icon: <VscVscode size={45} className="text-blue-500" />,
        name: "VS Code",
      },
      {
        icon: <SiGit size={45} className="text-orange-500" />,
        name: "Git",
      },
      {
        icon: <FaWindows size={45} className="text-blue-400" />,
        name: "Windows",
      },
      {
        icon: <SiPostman size={45} className="text-orange-400" />,
        name: "Postman",
      },
    ].map((tool, index) => (
      <div
        key={index}
        className="bg-gray-800 border border-gray-700 p-6 rounded-2xl flex flex-col items-center justify-center h-40 w-40 text-center transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:border-purple-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]"
      >
        {tool.icon}
        <p className="mt-3 font-semibold">{tool.name}</p>
      </div>
    ))}
  </div>
</section> 
</>
  );
}

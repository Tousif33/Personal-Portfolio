import weatherImg from "./assets/weatherimg.webp";
import portfolioImg from "./assets/portfolio.png";
import tictacImg from "./assets/Tictacgame.png";


const sampleProjects = [
 
  {
    id: "p1",
    title: "Weather App",
    description: "Weather App that fetches real-time weather data using the OpenWeather API.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Tousif33/Weather-App",
    live: "https://tousif33.github.io/Weather-App/",
    image: weatherImg,
    year: 2025,
  }, 
   {
    id: "p2",
    title: "Portfolio Website",
    description: "My personal portfolio with an interactive projects section and blog.",
    tech: ["Vite","React js", "Tailwind"],
    github: "https://github.com/Tousif33/Personal-Portfolio",
    live: "https://tousif33.github.io/home",
    image: portfolioImg ,
    year: 2025,
  },
  {
    id: "p3",
    title: "Tic-Tac Toe Game",
    description: "A simple Tic-Tac-Toe game built using HTML, CSS, and JavaScript. This project allows two players to play the classic Tic-Tac-Toe game in the browser.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Tousif33/Tic-Tac-Toe-Game",
    live: " https://tousif33.github.io/Tic-Tac-Toe-Game/",
    image: tictacImg,
    year: 2025,
  },
  
];

import { Github, ExternalLink } from "lucide-react";

export default function Projects({ projects = sampleProjects }) {
      
      console.log("Image paths:", sampleProjects.map(p => p.image));

  return (
    <div className="min-h-screen flex flex-col items-center justify-start text-white bg-gradient-to-b from-gray-800 to-black px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <p className="text-gray-300 mb-8">Here are a few projects that i've worked on recently.</p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
     

        {projects.map((p) => (
         
          <div
            key={p.id}
            className="group bg-gray-900 rounded-2xl shadow-md overflow-hidden transition-transform transform hover:-translate-y-1"
          >
            {p.image && (
              <div className="h-44 w-full bg-gray-700 flex items-center justify-center overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.title} preview`}
                  className="max-h-40 max-w-full object-contain group-hover:scale-105 transition-transform"
                />
              </div>
            )}

            <div className="p-4">
              <h3 className="text-lg font-medium truncate">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-400 line-clamp-3">{p.description}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech?.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex gap-2">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-700 text-sm font-medium hover:bg-gray-800"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  )}

                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>

                <div className="text-xs text-gray-500">{p.year}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


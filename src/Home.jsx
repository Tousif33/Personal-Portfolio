
import { useState, useEffect } from "react";

export default function Home() {
  const fullText = "Frontend Developer";
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(typingInterval);
    }, 120); // typing speed

    // blinking cursor
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-white bg-gradient-to-b from-gray-800 to-black px-6">
        {/* Heading */}
        <h1 className="text-3xl md:text-6xl font-bold text-center">
          Hi, I'm <span className="text-purple-400">Tousif Raza</span>
        </h1>

        {/* Typing Text */}
        <h2 className="text-2xl md:text-3xl mt-4 font-mono text-purple-300">
          {displayedText}
          <span
            className={`ml-1 ${
              showCursor ? "opacity-100" : "opacity-0"
            } animate-pulse`}
          >
            |
          </span>
        </h2>

        {/* About / Description */}
        <div className="mt-10 max-w-2xl text-left text-1xl">
          <p className="text-gray-300 leading-relaxed font-semibold mb-4">
            A passionate programmer who fell in love with coding 🤷‍♂️. <br />
            I am fluent in classics like{" "}
            <span className="text-purple-400  font-bold">Java</span>,{" "} 
            <span className="text-purple-400 font-bold">JavaScript</span>, and{" "}
            <span className="text-purple-400 font-bold">MERN Stack</span>. <br />
            My interests lie in building modern{" "}
            <span className="text-purple-400 font-bold">Web Technologies</span>{" "}
            and <span className="text-purple-400 font-bold">Products</span>,{" "}
            <br />
            along with a strong passion for{" "}
            <span className="text-purple-400 font-bold">Algorithms</span>.
          </p>

          <p className="text-gray-300 leading-relaxed font-semibold">
            Whenever possible, I channel my energy into developing products with{" "}
            <span className="text-purple-400 font-bold">Node.js</span> <br />
            and modern libraries like{" "}
            <span className="text-purple-400 font-bold">React.js</span>.
          </p>
        </div>
      </section>
    </>
  );
}

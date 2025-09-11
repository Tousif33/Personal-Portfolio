import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaFileAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // user scrolled
      } else {
        setIsScrolled(false); // back to top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tabs = [
    { name: "Home", icon: <FaHome />, to: "/home" },
    { name: "About", icon: <FaUser />, to: "/about" },
    { name: "Projects", icon: <FaProjectDiagram />, to: "/projects" },
    { name: "Resume", icon: <FaFileAlt />, to: "/resume" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gray-900/90 backdrop-blur-md shadow-lg" // when scrolling
          : "bg-transparent" // at top
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3 text-white">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="nav.png"
            alt="Logo"
            className="h-16 w-16 rounded-2xl border"
          />
          <span className="text-3xl font-bold pl-4">Raza</span>
        </div>

        {/* Desktop Tabs */}
        <ul className="hidden md:flex gap-12 font-bold">
          {tabs.map((tab) => (
            <li key={tab.name}>
              <Link
                to={tab.to}
                className="flex items-center gap-2 hover:text-purple-400 transition-all duration-300"
              >
                {tab.icon}
                <span>{tab.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col mt-4 gap-4 font-bold md:hidden bg-white px-4 py-4 shadow-md rounded">
          {tabs.map((tab) => (
            <li key={tab.name}>
              <Link
                to={tab.to}
                className="flex items-center gap-2 hover:text-purple-400 transition-all duration-300"
                onClick={() => setIsOpen(false)} // close menu on click
              >
                {tab.icon}
                <span>{tab.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

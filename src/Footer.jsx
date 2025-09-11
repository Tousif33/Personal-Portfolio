import { FaInstagram, FaGithub ,FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 flex flex-col items-center gap-4">
      <p>© 2025 Tousif Raza. All rights reserved.</p>
      <div className="flex gap-6 text-2xl">
    
        <a
          
          href="https://github.com/Tousif33"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400"
        >
          <FaGithub />
        </a>
         <a
          href="https://www.linkedin.com/in/tousifraza1257"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400"
        >
          <FaLinkedin  />
        </a>
         <a
          href="https://www.instagram.com/tausif._15?igsh=aG04b2kya21zajRt"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400"
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
}

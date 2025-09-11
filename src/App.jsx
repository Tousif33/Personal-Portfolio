// import { Routes, Route, Navigate } from "react-router-dom";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import NotFound from "./NotFound";
import Footer from "./Footer";

export default function App() {
     
  return(
     <>
      {/* Content */}
      <Navbar />

      <Routes>
        {/* Redirect / to /home */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    
    </>
  );
}

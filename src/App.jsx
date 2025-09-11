import About from "./About";
import Home from "./Home";
import Projects from "./Projects";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Resume from "./Resume";
import NotFound from "./NotFound";
import { Routes, Route, Navigate } from "react-router-dom";



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

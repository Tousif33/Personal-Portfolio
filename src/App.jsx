import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar stays on top */}
      <Navbar />

      {/* Main content grows to push footer down */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>

      {/* Footer stays at bottom */}
      <Footer />
    </div>
  );
}

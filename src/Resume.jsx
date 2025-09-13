import React from "react";

export default function Resume() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white  bg-gradient-to-b from-gray-800 to-black ">
      <h1 className="text-2xl font-bold mb-6">My Resume</h1>
      
      {/* Resume Preview (Optional: embed PDF) */}
      <iframe
        src="/resume.pdf"
        title="resume"
        className="w-3/4 h-[600px] border rounded-lg shadow-lg"
      ></iframe>

      {/* Download Button */}
      <a
        href="/resume.pdf"
        target="_blank"
        download="Tousif_Resume.pdf"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
      >
        Download Resume
      </a>
    </div>
  );
}

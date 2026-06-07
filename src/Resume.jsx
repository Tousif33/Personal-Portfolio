export default function Resume() {
  const resumePath = `${import.meta.env.BASE_URL}tousifrazaResume.pdf`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <h1 className="text-2xl font-bold mb-6">My Resume</h1>

      <iframe
        src={resumePath}
        title="resume"
        className="w-3/4 h-[600px] border rounded-lg shadow-lg"
      />

      <a
        href={resumePath}
        target="_blank"
        rel="noopener noreferrer"
        download
        className="mt-6 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700"
      >
        Download Resume
      </a>
    </div>
  );
}

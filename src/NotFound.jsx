
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-800 to-black">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl mb-6 text-white">Page Not Found</p>
      <Link
        to="/home"
        className="text-white bg-red-600 px-6 py-3 rounded hover:bg-red-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}

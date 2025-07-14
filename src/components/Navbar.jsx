import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Name */}
        <Link to="/" className="lg:text-3xl text-xl italic font-bold text-indigo-600">
          ZOYA SHAIKH
        </Link>

        {/* Nav Links */}
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-indigo-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-indigo-600 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-indigo-600 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/skills" className="hover:text-indigo-600 transition">
              Skills
            </Link>
          </li>
          
          <li>
            <Link to="/miniprojects" className="hover:text-indigo-600 transition">
              Mini Projects
            </Link>
          </li>
          <li>
            <Link to="/education" className="hover:text-indigo-600 transition">
              Education
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-indigo-600 transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

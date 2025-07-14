import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Mini Projects", path: "/miniprojects" },
    { name: "Education", path: "/education" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-indigo-600">
          Zoya <span className="text-gray-800">Shaikh</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-700 hover:text-indigo-600 transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/zoyaResume.pdf"
            download
            className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 transition-all duration-300"
          >
            Download Resume
          </a>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <span className="text-2xl">&#9776;</span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block text-gray-700 hover:text-indigo-600 transition-all"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            download
            className="block text-indigo-600 font-medium hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}

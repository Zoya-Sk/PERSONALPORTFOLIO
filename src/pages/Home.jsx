import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-white text-gray-800">
        <div className="text-center space-y-6 px-4 max-w-xl pt-12">
          <h2 className="text-xl text-gray-600">Hi, I'm</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-600">
            Zoya Shaikh
          </h1>
          <h3 className="text-2xl font-semibold">🚀 Full Stack Web Developer</h3>
          <p className="text-base text-gray-500">
            Passionate about building responsive web apps using the MERN stack.
          </p>

          <div className="flex justify-center space-x-4 pt-4">
            <a
              href="/zoyaResumeExp.pdf"
              download
              className="bg-indigo-600 text-white py-2 px-5 rounded hover:bg-indigo-700 transition"
            >
              View Resume
            </a>
            <Link
              to="/contact"
              className="border border-indigo-600 text-indigo-600 py-2 px-5 rounded hover:bg-indigo-50 transition"
            >
              Contact Me
            </Link>
     
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-indigo-600 mb-4">About Me</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          I'm a passionate and dedicated Full Stack Web Developer skilled in the MERN stack. With a strong foundation in both frontend and backend technologies, I love crafting clean, user-friendly web applications.
        </p>
        <div className="mt-6">
          <Link
            to="/about"
            className="inline-block bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
          >
            More About Me
          </Link>
                      <Link
            to="/projects"
            className="inline-block bg-indigo-600 text-white m-3 px-6 py-2 rounded hover:bg-indigo-700 transition"
          >
            View All Projects
          </Link>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-indigo-50 text-gray-700 py-6 text-center mt-12">
        <p>© 2025 Zoya Shaikh. Built with React & Tailwind CSS.</p>
        <p className="mt-1">
          <a
            href="https://github.com/Zoya-Sk"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-600 hover:underline"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/in/zoya-shaikh-508885350/"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-600 hover:underline"
          >
            LinkedIn
          </a>
        </p>
      </footer>
    </>
  );
}

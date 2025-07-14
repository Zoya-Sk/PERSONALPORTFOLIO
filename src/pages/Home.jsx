export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100 text-gray-800 px-4">
      <div className="text-left max-w-2xl w-full space-y-6">
        <h2 className="text-md text-gray-600">Hi, I'm</h2>

        <h1 className="text-4xl sm:text-5xl font-bold text-indigo-700">
          Zoya Shaikh
        </h1>

        <h3 className="text-2xl font-semibold">
          🚀 Full Stack Web Developer
        </h3>

        <p className="text-base text-gray-600 leading-relaxed">
          Passionate about building responsive and user-friendly web apps using the <strong>MERN</strong> stack. I love bringing ideas to life through clean, efficient code.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <a
            href="/zoyaResume.pdf"
            download
            className="bg-indigo-600 text-white px-6 py-2 rounded shadow hover:bg-indigo-700 transition"
          >
            View Resume
          </a>
          <a
            href="/contact"
            className="border border-indigo-600 text-indigo-600 px-6 py-2 rounded hover:bg-indigo-50 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

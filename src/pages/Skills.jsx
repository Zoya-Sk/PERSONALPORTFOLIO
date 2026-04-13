export default function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "JWT",
    "bcrypt",
    "Socket.io",
    "Groq API / AI",
    "Nodemailer",
    "Cloudinary",
    "Axios",
    "REST APIs",
    "Tailwind CSS",
    "Git & GitHub",
    "Vite"
  ];

  return (
    <section className="min-h-screen bg-gray-50 text-gray-800 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-indigo-600">My Skills</h2>
          <p className="text-gray-600 mt-2">Technologies I’m confident with:</p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg py-6 px-4 hover:shadow-lg transition duration-300"
            >
              <p className="text-lg font-semibold text-indigo-700">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Projects() {
  return (
    <section className="min-h-screen px-4 py-12 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <h2 className="text-4xl font-bold text-indigo-600">Projects</h2>
        <p className="text-gray-600">Here are some of my featured projects</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <img
              src="/airbnb.png"
              alt="StayEase Project"
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-left space-y-3">
              <h3 className="text-2xl font-semibold text-indigo-700">StayEase</h3>
              <p>
                An Airbnb-like full-stack app built with MERN stack. Includes
                user auth, listing CRUD, image upload, and deployment.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Zoya-Sk"
                  target="_blank"
                  className="text-indigo-600 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href="https://stayease.netlify.app"
                  target="_blank"
                  className="text-indigo-600 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <img
              src="/whatsapp.webp"
              alt="Mini WhatsApp"
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-left space-y-3">
              <h3 className="text-2xl font-semibold text-indigo-700">Mini WhatsApp</h3>
              <p>
                A basic real-time messaging app with user login, sender/receiver
                support, and message timestamp using Express and MongoDB.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Zoya-Sk"
                  target="_blank"
                  className="text-indigo-600 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Add more projects below as needed */}
        </div>
      </div>
    </section>
  );
}

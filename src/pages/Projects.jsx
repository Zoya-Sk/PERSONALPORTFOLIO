export default function Projects() {
  return (
    <section className="min-h-screen bg-white px-4 py-12 text-gray-800">
      <div className="mx-auto max-w-6xl space-y-10 text-center">
        <h2 className="text-4xl font-bold text-indigo-600">Projects</h2>
        <p className="text-gray-600">Here are some of my featured projects</p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {/* Project 1 */}
          <div className="overflow-hidden rounded-lg bg-gray-50 shadow-md">
            <img
              src="/airbnb.png"
              alt="StayEase Project"
              className="h-48 w-full object-cover"
            />
            <div className="space-y-3 p-5 text-left">
              <h3 className="text-2xl font-semibold text-indigo-700">
                StayEase
              </h3>
              <p>
                An Airbnb-like full-stack app built with MERN stack. Includes
                user auth, listing CRUD, image upload, and deployment.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Zoya-Sk/PERSONALPORTFOLIO"
                  target="_blank"
                  className="text-indigo-600 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href="https://stayease-full-stack-mern-accommodation.onrender.com/"
                  target="_blank"
                  className="text-indigo-600 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="overflow-hidden rounded-lg bg-gray-50 shadow-md">
            <img
              src="/whatsapp.webp"
              alt="Mini WhatsApp"
              className="h-48 w-full object-cover"
            />
            <div className="space-y-3 p-5 text-left">
              <h3 className="text-2xl font-semibold text-indigo-700">
                Mini WhatsApp
              </h3>
              <p>
                A basic real-time messaging app with user login, sender/receiver
                support, and message timestamp using Express and MongoDB.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Zoya-Sk/MINI-WHATSAPP"
                  target="_blank"
                  className="text-indigo-600 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href="https://stayease-full-stack-mern-accommodation.onrender.com/"
                  target="_blank"
                  className="text-indigo-600 hover:underline"
                >
                  Live Demo <br />(Coming Soon..)
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

export default function Projects() {
  return (
    <section className="min-h-screen bg-white px-4 py-12 text-gray-800">
      <div className="mx-auto max-w-6xl space-y-10 text-center">
        <h2 className="text-4xl font-bold text-indigo-600">Projects</h2>
        <p className="text-gray-600">Here are some of my featured projects</p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {/* Project 1 - SmartX */}
          <div className="overflow-hidden rounded-lg bg-gray-50 shadow-md">
            <img
              src="/smartx-cover.png"
              alt="SmartX AI Marketplace"
              className="h-48 w-full object-cover"
            />
            <div className="space-y-3 p-5 text-left">
              <h3 className="text-2xl font-semibold text-indigo-700">
                SmartX – AI Marketplace
              </h3>
              <p>
                AI-powered local marketplace for buying/selling second-hand goods.
                Features include Zara AI chatbot, fair price checker, real‑time chat,
                wishlist, OTP verification, and AI title/description enhancer.
                Built with MERN stack + Socket.io + Groq API (Llama 3.3).
              </p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://github.com/Zoya-Sk/SmartX-FrontEnd"
                  target="_blank"
                  className="text-indigo-600 hover:underline"
                >
                  Frontend Repo
                </a>
                <a
                  href="https://github.com/Zoya-Sk/SmartX-BackEnd"
                  target="_blank"
                  className="text-indigo-600 hover:underline"
                >
                  Backend Repo
                </a>
                <a
                  href="https://smart-x-front-end.vercel.app"
                  target="_blank"
                  className="text-indigo-600 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 - Stayease*/}
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
                  href="https://github.com/Zoya-Sk/StayEase---Full-Stack-MERN-Accommodation-Platform.git"
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

          {/* Project 3 - Whatsapp clone*/}
          <div className="overflow-hidden rounded-lg bg-gray-50 shadow-md">
            <img
              src="/ripple-img.png"
              alt="Mini WhatsApp"
              className="h-48 w-full object-cover"
            />
            <div className="space-y-3 p-5 text-left">
              <h3 className="text-2xl font-semibold text-indigo-700">
                Ripple — Real-Time Chat Application
              </h3>
              <p>
                A modern, full-stack real-time chat application built with the MERN stack and Socket.io. Ripple lets you connect and chat with people instantly — with live typing indicators, online presence, and read receipts.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Zoya-Sk/Ripple-chat-App"
                  target="_blank"
                  className="text-indigo-600 hover:underline"
                >
                  GitHub
                </a>
                <a
                  href="https://ripple-chat-app-eight.vercel.app/"
                  target="_blank"
                  className="text-indigo-600 hover:underline"
                >
                  Live Demo
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

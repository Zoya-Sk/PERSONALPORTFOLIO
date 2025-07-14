export default function Projects() {
  return (
    <section className="min-h-screen px-4 py-12 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <h2 className="text-4xl font-bold text-indigo-600">Projects</h2>
        <p className="text-gray-600">Some of my featured and mini projects built with MERN stack and core web tech</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Main Project 1 - StayEase */}
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <img
              src="https://via.placeholder.com/600x300.png?text=StayEase+Project"
              alt="StayEase"
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-left space-y-3">
              <h3 className="text-2xl font-semibold text-indigo-700">StayEase</h3>
              <p>A full-stack Airbnb clone built with MERN stack. Includes authentication, listings CRUD, Cloudinary image upload, and deployment.</p>
              <div className="flex gap-4">
                <a href="https://github.com/zoya/stayease" target="_blank" className="text-indigo-600 hover:underline">GitHub</a>
                <a href="https://stayease.netlify.app" target="_blank" className="text-indigo-600 hover:underline">Live Demo</a>
              </div>
            </div>
          </div>

          {/* Main Project 2 - Mini WhatsApp */}
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <img
              src="https://via.placeholder.com/600x300.png?text=WhatsApp+Chat+App"
              alt="Mini WhatsApp"
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-left space-y-3">
              <h3 className="text-2xl font-semibold text-indigo-700">Mini WhatsApp</h3>
              <p>Mini chat system with sender/receiver IDs, login session, message timestamp using Express and MongoDB.</p>
              <div className="flex gap-4">
                <a href="https://github.com/zoya/mini-whatsapp" target="_blank" className="text-indigo-600 hover:underline">GitHub</a>
              </div>
            </div>
          </div>

          {/* Mini Project - Calculator */}
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <img
              src="https://via.placeholder.com/600x300.png?text=Calculator+App"
              alt="Calculator"
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-left space-y-3">
              <h3 className="text-xl font-semibold text-indigo-700">Simple Calculator</h3>
              <p>Basic calculator app with clean UI using HTML, CSS, and vanilla JavaScript.</p>
              <a href="https://github.com/zoya/calculator" target="_blank" className="text-indigo-600 hover:underline">GitHub</a>
            </div>
          </div>

          {/* Mini Project - Spotify Clone */}
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <img
              src="https://via.placeholder.com/600x300.png?text=Spotify+Clone"
              alt="Spotify Clone"
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-left space-y-3">
              <h3 className="text-xl font-semibold text-indigo-700">Spotify Clone</h3>
              <p>Mini music UI clone with functional play/pause features using JavaScript.</p>
              <a href="https://github.com/zoya/spotify-clone" target="_blank" className="text-indigo-600 hover:underline">GitHub</a>
            </div>
          </div>

          {/* Mini Project - Car Racing Game */}
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <img
              src="https://via.placeholder.com/600x300.png?text=Car+Racing+Game"
              alt="Car Racing Game"
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-left space-y-3">
              <h3 className="text-xl font-semibold text-indigo-700">Car Racing Game</h3>
              <p>Fun racing game using canvas and JS. Dodge cars to earn score!</p>
              <a href="https://github.com/zoya/car-racing-game" target="_blank" className="text-indigo-600 hover:underline">GitHub</a>
            </div>
          </div>

          {/* Mini Project - Tic Tac Toe */}
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <img
              src="https://via.placeholder.com/600x300.png?text=Tic+Tac+Toe"
              alt="Tic Tac Toe"
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-left space-y-3">
              <h3 className="text-xl font-semibold text-indigo-700">Tic Tac Toe</h3>
              <p>Classic 2-player game with winning logic using JavaScript DOM manipulation.</p>
              <a href="https://github.com/zoya/tic-tac-toe" target="_blank" className="text-indigo-600 hover:underline">GitHub</a>
            </div>
          </div>

          {/* Mini Project - Rock Paper Scissor */}
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <img
              src="https://via.placeholder.com/600x300.png?text=Rock+Paper+Scissors"
              alt="Rock Paper Scissor"
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-left space-y-3">
              <h3 className="text-xl font-semibold text-indigo-700">Rock Paper Scissors</h3>
              <p>Interactive game with simple logic and score tracking.</p>
              <a href="https://github.com/zoya/rock-paper-scissor" target="_blank" className="text-indigo-600 hover:underline">GitHub</a>
            </div>
          </div>

          {/* Mini Project - Mini Game Hub */}
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <img
              src="https://via.placeholder.com/600x300.png?text=Mini+Game+Hub"
              alt="Mini Game Hub"
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-left space-y-3">
              <h3 className="text-xl font-semibold text-indigo-700">Mini Game Hub</h3>
              <p>A collection of simple browser games like snake, memory card, and more.</p>
              <a href="https://github.com/zoya/mini-game-hub" target="_blank" className="text-indigo-600 hover:underline">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

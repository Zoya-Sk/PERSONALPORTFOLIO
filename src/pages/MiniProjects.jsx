export default function Projects() {
  return (
    <section className="min-h-screen px-4 py-12 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <h2 className="text-4xl font-bold text-indigo-600">Projects</h2>
        <p className="text-gray-600">Some of my featured and mini projects built with MERN stack and core web tech</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Mini Project - Calculator */}
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <img
              src="/projectsImg/calculator.png"
              alt="Calculator"
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-left space-y-3">
              <h3 className="text-xl font-semibold text-indigo-700">Simple Calculator</h3>
              <p>Basic calculator app with clean UI using HTML, CSS, and vanilla JavaScript.</p>
              <a href="https://github.com/Zoya-Sk/Calculator-webApp" target="_blank" className="text-indigo-600 hover:underline">GitHub</a>
            </div>
          </div>

          {/* Mini Project - Spotify Clone */}
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <img
              src="/projectsImg/spotifyClone.png"
              alt="Spotify Clone"
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-left space-y-3">
              <h3 className="text-xl font-semibold text-indigo-700">Spotify Clone</h3>
              <p>Mini music UI clone with functional play/pause features using JavaScript.</p>
              <a href="https://github.com/zoya/spotify-clone" target="_blank" className="text-indigo-600 hover:underline">GitHub</a>
            </div>
          </div>

          {/* Mini Project - Restaurant Website */}
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <img
              src="/projectsImg/restaurant.png"
              alt="Restaurant Website img"
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-left space-y-3">
              <h3 className="text-xl font-semibold text-indigo-700"> Restaurant Website</h3>
              <p>A Multi Pages Responsive Restaurant Website using Frontend Technologies.</p>
              <a href="https://github.com/Zoya-Sk/Restaurant-website." target="_blank" className="text-indigo-600 hover:underline">GitHub</a>
            </div>
          </div>

          {/* Mini Project - Tic Tac Toe */}
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <img
              src="/projectsImg/tictactoe.png"
              alt="Tic Tac Toe"
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-left space-y-3">
              <h3 className="text-xl font-semibold text-indigo-700">Tic Tac Toe</h3>
              <p>Classic 2-player game with winning logic using JavaScript DOM manipulation.</p>
              <a href="https://github.com/Zoya-Sk/Tic-Tac-Toe" target="_blank" className="text-indigo-600 hover:underline">GitHub</a>
            </div>
          </div>

          {/* Mini Project - Mini Game Hub */}
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <img
              src="/projectsImg/mini-game-hub.jpg"
              alt="Mini Game Hub"
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-left space-y-3">
              <h3 className="text-xl font-semibold text-indigo-700">Mini Game Hub</h3>
              <p>A collection of simple browser games like snake, memory card, and more.</p>
              <a href="https://github.com/zoya/mini-game-hub" target="_blank" className="text-indigo-600 hover:underline">GitHub</a>
            </div>
          </div>

          {/* Mini Project - Premium Site */}
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <img
              src="/projectsImg/premium.png"
              alt="golf"
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-left space-y-3">
              <h3 className="text-xl font-semibold text-indigo-700">Sidcup - Family Golf</h3>
              <p>A collection of premium animations, smooth effects and extra ordinary designs. Clone of Sidcup Family Golf Website using plain HTML, CSS & JS.</p>
              <a href="/miniprojects/premium-site-resp-done/index.html" target="_blank" className="text-indigo-600 hover:underline">View Project</a>
            </div>
          </div>

          {/* Mini Project - Denty Tech Website landing page*/}
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <img
              src="/projectsImg/denty.png"
              alt="Denty"
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-left space-y-3">
              <h3 className="text-xl font-semibold text-indigo-700">Denty Tech</h3>
              <p>Denty Tech Website landing page.</p>
              <a href="https://github.com/Zoya-Sk/Zoya-Sk-Denty-Tech-website-clone" target="_blank" className="text-indigo-600 hover:underline">GitHub</a>
            </div>
          </div>

          {/* Mini Project - Amazon Clone */}
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            <img
              src="/projectsImg/amazon.png"
              alt="amzonClone"
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-left space-y-3">
              <h3 className="text-xl font-semibold text-indigo-700">Amazon.in Clone</h3>
              <p>A Clone Website of Amazon.in using HTML, CSS & JS.</p>
              <a href="https://github.com/Zoya-Sk/amazon-clone" target="_blank" className="text-indigo-600 hover:underline">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

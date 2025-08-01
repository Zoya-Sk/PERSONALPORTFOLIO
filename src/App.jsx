import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import MiniProjects from './pages/MiniProjects';
import Contact from './pages/Contact';
import Education from './pages/Education';

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-8 px-4">
        {console.log("App loaded")}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/miniprojects" element={<MiniProjects />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

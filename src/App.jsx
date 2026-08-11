import Header from './components/Header/Header';
import RevealOnScroll from './components/RevealOnScroll/RevealOnScroll';
import About from './components/About/About';
import Publications from './components/Publications/Publications';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="min-h-screen">
      <Header />

      <section 
        id="home" 
        className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-purple-50 pt-16"
      >
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">
            <span className="text-blue-600">(Spencer) Matthew Pollard</span>
          </h1>
          smpollard [at] ucdavis.edu
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Education Section */}
      <Education />

      {/* Publications Section */}
      <Publications />

      {/* Projects Section */}
      <Projects />

    </div>
  );
}

export default App;
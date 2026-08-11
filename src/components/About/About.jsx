import RevealOnScroll from '../RevealOnScroll/RevealOnScroll';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGooglescholar, SiOrcid } from 'react-icons/si';

function About() {
  return (
    <section id="about" className="min-h-screen py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">About Me</h2>
        </RevealOnScroll>
        
        {/* Bio Card */}
        <RevealOnScroll delay={100}>
          <div className="bg-gray-50 p-8 rounded-xl shadow-lg mb-8 flex flex-col md:flex-row gap-8 items-center">
            {/* Photo Placeholder */}
            <div className="shrink-0">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-linear-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white text-6xl font-bold shadow-lg">
                MP
              </div>
            </div>
            
            {/* Bio Text */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Matthew Pollard</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a second year Applied Mathematics PhD student at the 
                University of California, Davis. My research focuses on 
                computational fluid dynamics, with a particular interest in 
                numerical methods for complex systems.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  UC Davis
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  Applied Mathematics
                </span>
              </div>
              
              {/* Social Links with React Icons */}
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="https://www.linkedin.com/in/spencer-pollard-62a419260/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-200 text-2xl"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/smpollard0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-200 text-2xl"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://scholar.google.com/citations?user=NmeaNR8AAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-800 transition-colors duration-200 text-2xl"
                  aria-label="Google Scholar"
                >
                  <SiGooglescholar />
                </a>
                <a
                  href="https://orcid.org/0009-0009-8891-0503"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-green-600 transition-colors duration-200 text-2xl"
                  aria-label="ORCID"
                >
                  <SiOrcid />
                </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Research Interests Card */}
        <RevealOnScroll delay={200}>
          <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Research Interests</h3>
            <div className="flex flex-wrap gap-3">
              {['Differential Equations', 'Mathematical Modeling', 'Scientific Computing', 
                'Numerical Analysis', 'Fluid Dynamics'].map((interest) => (
                <span 
                  key={interest}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:border-blue-400 hover:shadow-md transition-all"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export default About;
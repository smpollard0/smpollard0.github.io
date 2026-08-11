const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          S. Matthew Pollard
        </div>
        
        <ul className="flex gap-8 text-gray-600 font-medium">
          <li>
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:text-blue-600 transition-colors"
            >
              About
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('education')}
              className="hover:text-blue-600 transition-colors"
            >
              Education
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('publications')}
              className="hover:text-blue-600 transition-colors"
            >
              Publications
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('projects')}
              className="hover:text-blue-600 transition-colors"
            >
              Projects
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
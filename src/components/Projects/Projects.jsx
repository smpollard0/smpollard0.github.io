import { useState } from 'react';
import RevealOnScroll from '../RevealOnScroll/RevealOnScroll';

// Project descriptions
const projectDescriptions = [
  "This mobile app was meant to go along side Chico State's 'Physics of Music' general education course. The main point of the app was to combine features of pre-existing mobile apps (i.e. Phyphox and Physics Toolbox) into a more cohesive and student friendly way. Some of the features are single-tone generation, power spectrum distribution for signal analysis, and an audio filter to extract the underlying wave from noisy input signals.",
  
  "This project is explained in a lot more detail if you click this card. Essentially, the LiDAR data acquisition (DAQ) software for the Raman-shifted Eye-safe Aerosol LiDAR (REAL) runs on a single machine that is 20+ years old running LabVIEW code that is maintained remotely. Dr. Shane Mayor wants to move the data acquisition software to a newer machine where the DAQ software is written in Python. The main reason for this is that LabVIEW is not only expensive to keep a license for, but it's also not very new-user friendly. I did as much as I could working on this project with part-time hours in a 3 week period. The program should be in a constant loop waiting for a particular trigger pulse which would start the data acquisition. Once that pulse is received, 6 data acquisition processes should begin at the same time which are then placed into a record, that record is broadcasted on a network socket, and all of that data is written to disk before starting the loop over waiting for another trigger event.",
  
  "This is my capstone for completing the Computer Science degree at Chico State built using Unity. The user can graphically create a 3-D electric charge configuration to calculate the electric field at a point in space. It also displays a qualitative electric vector field around the charge configuration to help introductory physics students build an intuition for E&M physics. This was my first real project done in Unity and I learned a lot of how to use the engine as well as make something that combined my interests in Physics and Computer Science.",
  
  "This was my final project for my Software Engineering class that I took at CSU Northridge. We were in groups of 5-7 and my group decided to create a glorified to-do list. This web application is to be a simple, space-themed to-do list primarily for those with ADHD. The web application comprises of users creating a to-do list of their daily tasks which are preserved in Google Firebase for future reference. To my knowledge, the website is hosted on some server at CSU Bakersfield, and I do not know if the Firebase backend is still functional.",
  
  "The website you're on is my portfolio website made using React. This is where I will be updating past and ongoing projects I have.",
  
  "Growing up, my friends and I used to play games together but it was always dependent on one specific individual to be online to host the game's server. This project is a discord bot that runs on an 8GB Raspberry Pi 4 which could start and stop the server given the proper commands. I made this using discord.py and the mcrcon python library to control the game through the discord bot. This is sadly a project that I did before I knew how to use Git/Github so it was lost to time, but if I have time I'll rebuild it and use Github to display it here.",
  
  "This was a project that I built in 2019 while I was in high school for my CAS project as a part of the International Baccalaureate program requirements. It combined the dance pads from two different arcade rhythm games, Dance Dance Revolution (DDR) and Pump It Up (PIU). DDR traditionally has 4 foot panels, up, down, left, and right, whereas PIU traditionally has 5, diagonal up-left, diagonal up-right, diagonal down-left, diagonal down-right, and the centre. This project was to combine both of these into a single dance pad that could be used with the game StepMania5. Even an image of this project was lost to time so I've just put an image of what the two arcade dance pads look like side-by-side. My version was basically a wooden frame made of 2x4s in a '#' pattern in a square box where the panels were a sheet of 1/2 inch MDF with acrylic on top. The electronics were done using custom pull up resistors made of tin foil for the buttons and were wired using cheap wire from Ace Hardware fed into a cheap USB encoder to simulate key presses."
];

const projects = [
  {
    id: 0,
    title: "Physics of Music Mobile App",
    description: projectDescriptions[0],
    image: "/mobileApp.png",
    url: null,
    tags: ["Flutter", "Mobile", "Physics Education"]
  },
  {
    id: 1,
    title: "LiDAR DAQ Software Development",
    description: projectDescriptions[1],
    image: "/newDac.png",
    url: "https://lidar.csuchico.edu/staff/pollard/",
    tags: ["Python", "LabVIEW", "Data Acquisition"]
  },
  {
    id: 2,
    title: "CSCI-PHYS Capstone: EFieldFlow",
    description: projectDescriptions[2],
    image: "/capstone.png",
    url: "https://github.com/smpollard0/EFieldFlow",
    tags: ["Unity", "C#", "Physics Simulation"]
  },
  {
    id: 3,
    title: "OrganizeOrbit - Software Engineering Project",
    description: projectDescriptions[3],
    image: "/organizeOrbit.png",
    url: "https://artemis.cs.csub.edu/~svargas/todo/signin.html",
    tags: ["JavaScript", "Firebase", "Web App"]
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: projectDescriptions[4],
    image: "/portfolio.png",
    url: "https://smpollard0.github.io",
    tags: ["React", "TailwindCSS", "Web", "Portfolio"]
  },
  {
    id: 5,
    title: "Discord Game Server Manager",
    description: projectDescriptions[5],
    image: "/minecraft.jpg",
    url: null,
    tags: ["Python", "Discord.py", "Raspberry Pi"]
  },
  {
    id: 6,
    title: "Custom 9-Panel DDR/PIU Dance Pad",
    description: projectDescriptions[6],
    image: "/ddr.jpg",
    url: null,
    tags: ["Hardware", "DIY", "Electronics"]
  }
];

function Projects() {
  const [expandedId, setExpandedId] = useState(null);

  const openProject = (id) => {
    setExpandedId(id);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setExpandedId(null);
    document.body.style.overflow = 'auto';
  };

  const handleUrlClick = (url) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  // Helper to render an image with fallback
  const renderImage = (imagePath, title, className = "w-full h-full object-cover") => {
    return (
      <img 
        src={imagePath} 
        alt={title}
        className={className}
        onError={(e) => {
          // If image fails to load, show a gradient background with the title
          e.target.style.display = 'none';
          const parent = e.target.parentElement;
          const fallback = document.createElement('div');
          fallback.className = `w-full h-full flex items-center justify-center p-6 text-white text-center bg-gradient-to-br from-blue-400 to-purple-400`;
          fallback.innerHTML = `<span class="text-xl font-bold">${title}</span>`;
          parent.appendChild(fallback);
        }}
      />
    );
  };

  return (
    <section id="projects" className="min-h-screen py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Projects</h2>
        </RevealOnScroll>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <RevealOnScroll key={project.id} delay={index * 100}>
              <div 
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group"
                onClick={() => openProject(project.id)}
              >
                {/* Image - This should show the image in the card */}
                <div className="h-48 bg-linear-to-br from-blue-400 to-purple-400 relative overflow-hidden">
                  {renderImage(project.image, project.title)}
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 text-blue-600 text-sm font-medium group-hover:underline">
                    Click to learn more →
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Expanded Project Modal */}
        {expandedId !== null && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn"
            onClick={closeProject}
          >
            <div 
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleIn"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <div className="sticky top-0 flex justify-end p-4 bg-white/90 backdrop-blur-sm z-10 border-b border-gray-100">
                <button
                  onClick={closeProject}
                  className="w-10 h-10 rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Project Content */}
              {projects.find(p => p.id === expandedId) && (
                <div className="p-6 md:p-8">
                  {(() => {
                    const project = projects.find(p => p.id === expandedId);
                    return (
                      <>
                        {/* Image - This should show the image in the modal too */}
                        <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden bg-linear-to-br from-blue-400 to-purple-400 mb-6">
                          {renderImage(project.image, project.title, "w-full h-full object-cover")}
                        </div>

                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                          {project.title}
                        </h2>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <span 
                              key={tag} 
                              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-6">
                          {project.description}
                        </p>

                        {project.url && (
                          <button
                            onClick={() => handleUrlClick(project.url)}
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                          >
                            View Project →
                          </button>
                        )}
                      </>
                    );
                  })()}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.95);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.25s ease-out;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}

export default Projects;
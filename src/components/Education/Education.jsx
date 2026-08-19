import RevealOnScroll from '../RevealOnScroll/RevealOnScroll';

function Education() {
  const educationData = [
    {
      school: "University of California, Davis",
      years: "2025 - Present",
      degrees: [
        {
          degree: "Ph.D. in Applied Mathematics",
          year: "Expected 2030",
          details: "Advisor: Robert Guy & Harishankar Manikantan",
          borderColor: "border-blue-500"
        }
      ]
    },
    {
      school: "California State University, Chico",
      years: "2021 - 2025",
      degrees: [
        {
          degree: "M.S. in Computer Science",
          year: "2025",
          details: "Thesis: A Comparison of Kalman Filtering and Deep Learning for State Estimation in Chaotic Systems",
          advisor: "Committee: Samuel B. Siewert, R. Carter Tillquist, Nicholas J. Nelson",
          borderColor: "border-purple-500"
        },
        {
          degree: "B.S. in Computer Science",
          year: "2024",
          borderColor: "border-green-500"
        },
        {
          degree: "B.S. in Physics",
          year: "2024",
          details: "Minor: Mathematics",
          borderColor: "border-orange-500"
        }
      ]
    }
  ];

    const experienceData = [
    {
      title: "Graduate Research Assistant",
      organization: "Los Alamos National Laboratory",
      period: "Summer 2026",
      description: "",
      tags: [""]
    },
    {
      title: "Teaching Assistant",
      organization: "UC Davis - Department of Mathematics",
      period: "2025 - Present",
      description: "Was a TA for the listed classes",
      tags: ["F25: MAT21A", "W26: MAT21B", "S26: MAT17C"]
    },
    {
      title: "Physics Department Student Assistant",
      organization: "CSU Chico - Physics Department",
      period: "2024 - 2025",
      description: "Rebuilt quantum optics experiments after the new Natural Sciences building was built for the physics Advanced Laboratory course.",
      tags: ["PHYS 427W", "Josie Otwell Student Assistant Award"]
    },
    {
      title: "Physics Research Assistant",
      organization: "CSU Chico",
      period: "Summer 2024",
      description: (
      <>
        Worked alongside{' '}
        <a 
          href="https://apps.csuchico.edu/directory/Employee/parpin?_gl=1*fgvdu9*global_ga*NTIyNjE1NDU5LjE3ODY0ODk3MzQ.*global_ga_VM2YX7L78G*czE3ODcxNzYzMzYkbzIkZzEkdDE3ODcxNzYzNDMkajUzJGwwJGgw"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
        >
          Dr. Paul Arpin
        </a>
        {' '}continuing the work based on his paper{' '}
        <a 
          href="https://pubs.aip.org/aip/jcp/article-abstract/160/16/164101/3283553/Theoretical-model-of-femtosecond-coherence?redirectedFrom=fulltext"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
        >
          "Theoretical model of femtosecond coherence spectroscopy of vibronic excitons in molecular aggregates"
        </a>
      </>
    ),
    tags: ["Python", "Spectroscopy"]
  },
  {
    title: "Computer Science Graduate Research Assistant",
    organization: "CSU Chico",
    period: "Summer 2024",
    description: (
      <>
        Worked alongside{' '}
        <a 
          href="https://sites.google.com/mail.csuchico.edu/sbsiewert/home"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
        >
          Dr. Sam Siewert
        </a>
        {' '}&{' '}
        <a 
          href="https://apps.csuchico.edu/directory/Employee/jraigoza?_gl=1*loz47i*global_ga*NTIyNjE1NDU5LjE3ODY0ODk3MzQ.*global_ga_VM2YX7L78G*czE3ODcxNzYzMzYkbzIkZzEkdDE3ODcxNzcxMjYkajUyJGwwJGgw"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
        >
          Dr. Jaime Raigoza
        </a>
        {' '}with bringing the University of Waterloo's Quantum Key Distribution classroom experiment to Chico State.
      </>
    ),
    tags: ["Quantum Key Distribution", "Quantum Computing"]
  },
  {
    title: "Lead Undergraduate Research Assistant",
    organization: "CSU Chico",
    period: "2023 - 2024",
    description: "Led development of a mobile app for the ''Physics of Music'' course as a research assistant.",
    tags: ["Flutter", "Project Management", "PHYS 307"]
  },
  {
    title: "Instructional Student Assistant",
    organization: "CSU Chico",
    period: "2022 - 2024",
    description: "Served as Instructional Student Assistant, providing valuable support to the Physics, Math, Earth and Environmental Sciences, and Computer Science departments.",
    tags: ["PHYS 202B", "CSCI 411", "ERTH 440"]
  },
  {
    title: "High School Geometry Teacher",
    organization: "North Hills Christian School",
    period: "2023 - 2024",
    description: "Provide students with daily lectures, homework, and assessments to provide meaningful feedback for student development",
    tags: ["Geometry"]
  },
  
  ];

  return (
    <section id="education" className="min-h-screen py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Education & Experience</h2>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Left Card: Degrees */}
          <RevealOnScroll delay={100}>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              {educationData.map((school, index) => (
                <div key={index} className={index > 0 ? "mt-8" : ""}>
                  {/* School Header */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">{school.school}</h3>
                    <p className="text-gray-500">{school.years}</p>
                  </div>
                  
                  {/* Multiple Degrees for this school */}
                  <div className="space-y-3">
                    {school.degrees.map((degree, degreeIndex) => (
                      <div 
                        key={degreeIndex} 
                        className={`bg-gray-50 p-4 rounded-lg border-l-4 ${degree.borderColor}`}
                      >
                        <h4 className="text-lg font-semibold text-gray-800">{degree.degree}</h4>
                        <p className="text-gray-600 text-sm">{degree.year}</p>
                        {degree.details && (
                          <p className="text-gray-600 text-sm mt-1">{degree.details}</p>
                        )}
                        {degree.advisor && (
                          <p className="text-gray-500 text-sm mt-1">{degree.advisor}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* Middle Card: Overview */}
          <RevealOnScroll delay={200}>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Education Overview</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Research Focus</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Computational fluid dynamics, numerical analysis, and 
                    mathematical modeling of complex systems.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Relevant Coursework</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Numerical Analysis', 'Advanced Fluid Mechanics', 'Numerical Methods of PDEs'].map((course) => (
                      <span key={course} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Awards Section */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Awards & Honors</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Helen Quinn Award (APS Far West 2024) — December 2024</li>
                    <li>Josie Otwell Student Assistant Award — August 2024</li>
                    <li>Lieutenant Robert Merton Rawlins Merit Award — August 2024</li>
                    <li>Physics Summer Research Institute (PSRI) Fellowship — June 2024</li>
                    <li>Michael R. McGie Service Scholarship — August 2023</li>
                    <li>Physics Summer Research Institute (PSRI) Fellowship — June 2023</li>
                    <li>Chico STEM Connections Collaborative Fellowship — June 2023</li>
                    <li>Chico State Dean's List Recipient — 2021 - 2025</li>
                  </ul>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right Card: Experiences */}
          <RevealOnScroll delay={200}>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow h-full">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">💼</span> Experience
              </h3>
              <div className="space-y-4">
                {experienceData.map((exp, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-800">{exp.title}</h4>
                    <p className="text-sm text-gray-600 font-medium">{exp.organization}</p>
                    <p className="text-xs text-gray-500 mb-2">{exp.period}</p>
                    <p className="text-sm text-gray-600 mb-2">{exp.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {exp.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

export default Education;
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
          advisor: "Advisor: Samuel B. Siewert",
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

  return (
    <section id="education" className="min-h-screen py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Education</h2>
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

          {/* Right Card: Overview */}
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
        </div>
      </div>
    </section>
  );
}

export default Education;
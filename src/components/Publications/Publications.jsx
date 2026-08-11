import { useState, useEffect } from 'react';
import RevealOnScroll from '../RevealOnScroll/RevealOnScroll';
import publicationsData from '../../data/publications.json';

function Publications() {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    try {
      // Check if data exists
      if (!publicationsData || publicationsData.length === 0) {
        console.warn('No publications data found');
        setPublications([]);
        return;
      }
      
      // Sort publications by year (newest first)
      const sorted = [...publicationsData].sort((a, b) => {
        return parseInt(b.year) - parseInt(a.year);
      });
      setPublications(sorted);
    } catch (error) {
      console.error('Error loading publications:', error);
      setPublications([]);
    }
  }, []);

  // If no publications, show a message
  if (publications.length === 0) {
    return (
      <section id="publications" className="min-h-screen py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Publications</h2>
          <p className="text-gray-500">No publications available.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="publications" className="min-h-screen py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <RevealOnScroll>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Publications</h2>
        </RevealOnScroll>

        {publications.map((pub, index) => (
          <RevealOnScroll key={pub.id || index} delay={index * 100}>
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg mb-4 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-800">{pub.title || 'Untitled'}</h3>
              <p className="text-gray-600 mt-1">{pub.author || 'Unknown Author'}</p>
              <div className="flex flex-wrap gap-2 mt-2 text-sm text-gray-500">
                <span>{pub.journal || ''}</span>
                {pub.year && <span>• {pub.year}</span>}
                {pub.volume && <span>• Vol. {pub.volume}</span>}
                {pub.pages && <span>• pp. {pub.pages}</span>}
              </div>
              {pub.doi && (
                <a 
                  href={`https://doi.org/${pub.doi}`}
                  className="inline-block mt-3 text-blue-600 hover:underline text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DOI: {pub.doi}
                </a>
              )}
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}

export default Publications;
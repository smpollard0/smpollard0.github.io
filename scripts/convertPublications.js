import fs from 'fs';
import path from 'path';
import bibtexParse from 'bibtex-parse-js';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const bibFilePath = path.join(__dirname, '../public/publications.bib');
const outputFilePath = path.join(__dirname, '../src/data/publications.json');

try {
  // Read the .bib file
  console.log('📖 Reading publications.bib...');
  const bibFileContent = fs.readFileSync(bibFilePath, 'utf8');
  
  // Parse the BibTeX
  console.log('🔄 Parsing BibTeX...');
  const parsedEntries = bibtexParse.toJSON(bibFileContent);
  
  // Transform to a cleaner format
  const publications = parsedEntries.map(entry => {
    // Extract fields (handle different field names)
    const fields = entry.entryTags;
    
    return {
      id: entry.id || '',
      title: fields.title || 'Untitled',
      author: fields.author || 'Unknown Author',
      journal: fields.journal || fields.booktitle || '',
      year: fields.year || '',
      volume: fields.volume || '',
      number: fields.number || '',
      pages: fields.pages || '',
      publisher: fields.publisher || '',
      doi: fields.doi || '',
      url: fields.url || '',
      abstract: fields.abstract || '',
      type: entry.type || 'article'
    };
  });

  // Write to JSON file
  console.log(`📝 Writing ${publications.length} publications to JSON...`);
  fs.writeFileSync(
    outputFilePath,
    JSON.stringify(publications, null, 2)
  );

  console.log(`✅ Success! Converted ${publications.length} publications.`);
  console.log(`📁 Output: ${outputFilePath}`);
  
} catch (error) {
  console.error('❌ Error converting publications:', error.message);
  process.exit(1);
}
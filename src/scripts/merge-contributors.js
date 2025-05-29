// filepath: c:\Users\user\Github\First-Commit\src\scripts\merge-contributors.js
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../data');
const output = path.join(dataDir, 'contributors.json');

const contributors = [];

fs.readdirSync(dataDir).forEach(file => {
  if (file.endsWith('.json') && file !== 'contributors.json') {
    const content = fs.readFileSync(path.join(dataDir, file), 'utf-8');
    try {
      const obj = JSON.parse(content);
      contributors.push(obj);
    } catch (e) {
      console.error(`Invalid JSON in ${file}`);
    }
  }
});

fs.writeFileSync(output, JSON.stringify(contributors, null, 4));
console.log('contributors.json generated!');
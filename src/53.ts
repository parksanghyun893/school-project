const fs = require('fs').promises;
const path = require('path');

(async () => {
  try {
    const filePath = path.join(__dirname, 'your-file.ts');
    
    await fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) throw err;
      
      console.log(data);
    });
  } catch (error) {
    console.error(error.message || error);
  }
})();

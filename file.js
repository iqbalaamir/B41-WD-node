const fs = require('fs');
const path = require('path');
const quote2 = 'Live More Worry Less';
const [, , n] = process.argv
for (let i = 1; i <= n; i++) {
  const filename = `note-${i}.txt`;
  const filepath = path.join(__dirname, 'backup', filename);
  fs.writeFile(filepath, quote2, (err) => {
    if (err) throw err;
    console.log(`File ${filename} has been written successfully.`);
  });
}

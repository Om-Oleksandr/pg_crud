const fs = require('fs');
const path = require('path');
const baseName = path.basename(__filename);
fs.readdirSync(__dirname)
  .filter((fileName) => /\.js$/.test(fileName) && fileName !== baseName)
  .forEach((fileName) => {
    const absPathToFile = path.resolve(__dirname, fileName);
    const model = require(absPathToFile);
  });

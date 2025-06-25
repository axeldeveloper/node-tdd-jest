const fs = require('fs');
const path = require('path');

function readTextFile(filePath) {
  return new Promise(
    (resolve, reject) => {

      fs.readFile(path.resolve( filePath), 'utf8', (err, data) =>{
        if (err) return reject(err);
        resolve(data);
      });
    }
  );

}

module.exports = {
  readTextFile
};
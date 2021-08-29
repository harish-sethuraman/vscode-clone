const fs = require('fs');

/** Takes all files in the directory and formats the name to all lower case
 * seperated with - instead of space */

fs.readdir('.', (err, files) => {
  files.forEach((file) => {
    console.log(`import ${file.split('.json')[0].split('-').join('')} from "${file}"`);
    fs.rename(file, file.toLowerCase().split(' ').join('-'), () => console.log('done'));
  });
});

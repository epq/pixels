const fs = require('fs');
const path = require('path');

const imageFolder = path.join(__dirname, '../images'); // Adjust this path to your images folder

const images = fs.readdirSync(imageFolder).filter(file => {
  return /\.(png|gif)$/i.test(file); // Filters only image files
}).map(file => {
  const [year, rest] = file.split('-', 2);
  // const [imageNumber, nameWithExt] = rest.split('_', 2);
  // split on the first underscore
  const [imageNumber, nameWithExt] = rest.split(/_(.+)/, 2);
  const [name, ext] = nameWithExt.split('.', 2);
  const formattedName = name.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return {
    year: parseInt(year, 10),
    image: `${imageNumber}.${ext}`,
    name: formattedName,
    filename: file
  };
});

module.exports = images;

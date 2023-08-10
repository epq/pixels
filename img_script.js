// script to rename the images to follow the new naming convention to automate the build. bc we no longer have the patience to manually update this old array!

const fs = require('fs');
const path = require('path');

const filesList = [{ year: 21, image: "03.png", name: "Milky" },{ year: 21, image: "04.gif", name: "Cow" },{ year: 21, image: "05.png", name: "Tortoiseshell" },{ year: 21, image: "06.gif", name: "Qiu" },{ year: 21, image: "07.gif", name: "Torus" },{ year: 21, image: "08.png", name: "Worm" },{ year: 21, image: "09.gif", name: "Tomat" },{ year: 21, image: "10.gif", name: "Ghosty" },{ year: 21, image: "11.gif", name: "Frog" },{ year: 21, image: "12.gif", name: "Potato" },{ year: 21, image: "13.gif", name: "Geometry" },{ year: 21, image: "14.gif", name: "String" },{ year: 21, image: "15.gif", name: "Egg" }, { year: 21, image: "16.gif", name: "Box"}, {year: 21, image: "17.gif", name: "Deutsch"}, {year: 21, image: "18.gif", name: "1998"}, {year: 21, image: "19.gif", name: "Voice"}, {year: 21, image: "20.gif", name: "Trash"}, {year: 21, image: "21.gif", name: "Tea Time"}, {year: 21, image: "22.gif", name: "Fungus"}, {year: 21, image: "23.gif", name: "Two"}, {year: 21, image: "24.gif", name: "Fabric"}, {year: 21, image: "25.gif", name: "Particle"}, {year: 21, image: "26.gif", name: "Bread"}, {year: 22, image:"01.png", name: "Van"}, {year: 22, image:"02.gif", name: "Jelly"}, {year: 22, image: "03.gif", name: "Up"}, {year: 22, image: "04.gif", name: "Wood/Would"}, {year: 22, image: "05.gif", name: "Hz"}, {year: 22, image: "12.gif", name: "Hot"}];

const imageFolder = path.join(__dirname, 'src/images'); // Adjust this path to your images folder

filesList.forEach(file => {
  const oldFileName = `${file.year}-${file.image}`;
  const newName = file.name.replace(/\s+/g, '_').replace(/\//g, 'or').toLowerCase();
  const newFileName = `${file.year}-${oldFileName.split('-')[1].split('.')[0]}_${newName}.${file.image.split('.').pop()}`;

  fs.rename(path.join(imageFolder, oldFileName), path.join(imageFolder, newFileName), (err) => {
    if (err) {
      console.error(`Error renaming ${oldFileName}:`, err);
    } else {
      console.log(`${oldFileName} renamed to ${newFileName}`);
    }
  });
});
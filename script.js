// old script to populate the gallery; re-written in Pug

const filesList = [
  { image: "03.png", name: "Milky" },
  { image: "04.gif", name: "Cow" },
  { image: "05.png", name: "Tortoiseshell" },
  { image: "06.gif", name: "Qiu" },
  { image: "07.gif", name: "Torus" },
  { image: "08.png", name: "Worm" },
  { image: "09.gif", name: "Tomat" },
  { image: "10.gif", name: "Ghosty" },
  { image: "11.gif", name: "Frog" },
  { image: "12.gif", name: "Potato" },
  { image: "13.gif", name: "Geometry" },
  { image: "14.gif", name: "String" },
  { image: "15.gif", name: "Egg" },
];

const gallery = document.querySelector(".gallery");

filesList.forEach((file) => {
  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "item");

  const img = document.createElement("img");
  img.src = `images/${file.image}`;
  img.setAttribute("alt", file.name);

  const titleDiv = document.createElement("div");
  titleDiv.setAttribute("class", "title");
  const title = document.createTextNode(file.name);
  titleDiv.appendChild(title);

  newDiv.appendChild(img);
  newDiv.appendChild(titleDiv);
  gallery.appendChild(newDiv);
});

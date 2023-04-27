let buttonPlay = document.querySelector(".play");
let buttonStop = document.querySelector(".pause");
let buttonPlusFive = document.querySelector(".plusFive");
let buttonSubFive = document.querySelector(".subFive");

let buttonTree = document.querySelector(".svgTree");
let buttonRain = document.querySelector(".svgRain");
let buttonStore = document.querySelector(".svgStore");
let buttonFire = document.querySelector(".svgFire");

let treeSound = new Audio("./sounds/Floresta.wav");
let rainSound = new Audio("./sounds/Chuva.wav");
let storeSound = new Audio("./sounds/Cafeteria.wav");
let fireSound = new Audio("./sounds/Lareira.wav");

let card = document.querySelectorAll(".card");
let plusFive = false;
let subFive = false;

let path = [4];
path[0] = buttonTree.querySelector("path");
path[1] = buttonRain.querySelector("path");
path[2] = buttonStore.querySelector("path");
path[3] = buttonFire.querySelector("path");

export {
  buttonPlay,
  buttonStop,
  buttonPlusFive,
  buttonSubFive,
  buttonTree,
  buttonRain,
  buttonStore,
  buttonFire,
  treeSound,
  rainSound,
  storeSound,
  card,
  fireSound,
  path,
  plusFive,
  subFive,
};

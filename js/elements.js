let minutes = document.querySelector(".minutes").textContent;
let seconds = document.querySelector(".seconds").textContent;
let buttonPlay = document.querySelector(".play");
let buttonStop = document.querySelector(".pause");
let buttonPlusFive = document.querySelector(".plusFive");
let buttonSubFive = document.querySelector(".subFive");

let card = document.querySelectorAll(".card");

let buttonTree = document.querySelector(".svgTree");
let buttonRain = document.querySelector(".svgRain");
let buttonStore = document.querySelector(".svgStore");
let buttonFire = document.querySelector(".svgFire");

const treeSound = new Audio("./sounds/Floresta.wav");
const rainSound = new Audio("./sounds/Chuva.wav");
const storeSound = new Audio("./sounds/Cafeteria.wav");
const fireSound = new Audio("./sounds/Lareira.wav");

let plusFive = false;
let subFive = false;
let clicked = false;

let statCard = "on";

let path = [4];
path[0] = buttonTree.querySelector("path");
path[1] = buttonRain.querySelector("path");
path[2] = buttonStore.querySelector("path");
path[3] = buttonFire.querySelector("path");

export {
  minutes,
  seconds,
  buttonPlay,
  buttonStop,
  buttonPlusFive,
  buttonSubFive,
  card,
  buttonTree,
  buttonRain,
  buttonStore,
  buttonFire,
  treeSound,
  rainSound,
  storeSound,
  fireSound,
  plusFive,
  subFive,
  clicked,
  statCard,
  path,
};

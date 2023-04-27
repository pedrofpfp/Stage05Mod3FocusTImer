import {
  card,
  treeSound,
  fireSound,
  rainSound,
  storeSound,
} from "./elements.js";

let i = 0;
let statCard = "on";

function clearButtons({ card, path }) {
  for (i = 0; i < 4; i++) {
    card[i].classList.remove("selected");
    path[i].setAttribute("style", "fill:var(--primary-color)");
  }

}

function changeColor({ cardNumber, typeCard }) {
  let typeCardRecived = typeCard;

  let paths = typeCardRecived.querySelectorAll("path");

  if (statCard == "on") {
    card[cardNumber].classList.add("selected");

    for (i = 0; i < paths.length; i++) {
      paths[i].setAttribute("style", "fill:white");
    }
    statCard = "off";
  } else if (statCard == "off") {
    stopSound();
    card[cardNumber].classList.remove("selected");
    for (i = 0; i < paths.length; i++) {
      paths[i].setAttribute("style", "fill:var(--primary-color)");
    }
    statCard = "on";
  }
}

function playTreeSound() {
  treeSound.play();
}
function stopSound() {
  treeSound.pause();
  rainSound.pause();
  storeSound.pause();
  fireSound.pause();
}

function playRainSound() {
  rainSound.play();
}

function playStoreSound() {
  storeSound.play();
}

function playFireSound() {
  fireSound.play();
}

export {
  clearButtons,
  changeColor,
  playTreeSound,
  stopSound,
  playRainSound,
  playStoreSound,
  playFireSound,
  statCard,
};

import {
  buttonPlay,
  buttonStop,
  buttonPlusFive,
  buttonSubFive,
  buttonTree,
  buttonRain,
  buttonStore,
  buttonFire,
  path,
  card,
  plusFive,
} from "./elements.js";
import {
  clearButtons,
  playTreeSound,
  playRainSound,
  playFireSound,
  playStoreSound,
  changeColor,
} from "./functions-sounds.js";

import { timerClock } from "./timer.js";

function handlePlay(stop) {
  console.log("chamou");
  timerClock({ stop });
  buttonPlay.classList.add("disabled");
}
buttonPlay.addEventListener("click", () => handlePlay(false));

function handleStop(stop) {
  timerClock({ stop });
  buttonPlay.classList.remove("disabled");
}
buttonStop.addEventListener("click", () => handleStop(true));

buttonPlusFive.addEventListener("click", function () {
  timerClock({ plusFive: true });
});
buttonSubFive.addEventListener("click", function () {
  timerClock({ subFive: true });
});
buttonTree.addEventListener("click", function () {
  clearButtons({ card, path });
  playTreeSound();
  let typeCard = buttonTree;
  let cardNumber = 0;

  changeColor({ cardNumber, typeCard });
});
buttonRain.addEventListener("click", function () {
  clearButtons({ card, path });
  playRainSound();
  let typeCard = buttonRain;
  let cardNumber = 1;

  changeColor({ cardNumber, typeCard });
});
buttonStore.addEventListener("click", function () {
  clearButtons({ card, path });
  playStoreSound();
  let typeCard = buttonStore;
  let cardNumber = 2;

  changeColor({ cardNumber, typeCard });
});
buttonFire.addEventListener("click", function () {
  clearButtons({ card, path });
  playFireSound();
  let typeCard = buttonFire;
  let cardNumber = 3;
  changeColor({ cardNumber, typeCard });
});

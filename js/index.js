import {
  minutes as minutes,
  seconds as seconds,
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
} from "./elements.js";



function timerClock() {
  clicked = true;
  if (plusFive) {
    plus();
    clicked = false;
    return;
  }
  if (subFive) {
    clicked = false;
    sub();
    return;
  }
  if (stop) {
    clicked = false;
    return;
  }

  if (stop == false) {
    time = setTimeout(function counter() {
      --seconds;

      if (seconds < 0) {
        if (minutes == 0) {
          return;
        }
        seconds = 59;
        document.querySelector(".seconds").textContent = String(
          seconds
        ).padStart(2, "0");
        --minutes;
        document.querySelector(".minutes").textContent = String(
          minutes
        ).padStart(2, "0");
      }
      document.querySelector(".seconds").textContent = String(seconds).padStart(
        2,
        "0"
      );
      plusFive = false;
      subFive = false;
      timerClock(stop);
    }, 1000);
  }
}

function plus() {
  minutes = Number(minutes) + 5;
  document.querySelector(".minutes").textContent = String(minutes).padStart(
    2,
    "0"
  );
  plusFive = false;
}
function sub() {
  if (minutes > 5) {
    minutes = Number(minutes) - 5;
    document.querySelector(".minutes").textContent = String(minutes).padStart(
      2,
      "0"
    );
    subFive = false;
  }
}

function clearButtons() {
  for (i = 0; i < 4; i++) {
    card[i].classList.remove("selected");
    path[i].setAttribute("style", "fill:var(--primary-color)");
  }
}

function changeColor(cardNumber, typeCard) {
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

buttonPlay.addEventListener("click", function () {
  stop = false;
  if (clicked == false) {
    timerClock(stop);
  }
});

buttonStop.addEventListener("click", function () {
  stop = true;
  timerClock(stop);
});

buttonPlusFive.addEventListener("click", function () {
  plusFive = true;
  timerClock(plusFive);
});

buttonSubFive.addEventListener("click", function () {
  subFive = true;
  timerClock(subFive);
});

buttonTree.addEventListener("click", function () {
  clearButtons();
  playTreeSound();
  typeCard = buttonTree;
  changeColor(0, typeCard);
});
buttonRain.addEventListener("click", function () {
  clearButtons();
  playRainSound();
  typeCard = buttonRain;
  changeColor(1, typeCard);
});
buttonStore.addEventListener("click", function () {
  playStoreSound();
  clearButtons();
  typeCard = buttonStore;
  changeColor(2, typeCard);
});
buttonFire.addEventListener("click", function () {
  playFireSound();
  clearButtons();
  typeCard = buttonFire;
  changeColor(3, typeCard);
});

let timer;
import { plus, sub } from "./functions.js";

function timerClock({ plusFive = false, subFive = false, stop = true }) {
  let minutes = document.querySelector(".minutes").textContent;
  let seconds = document.querySelector(".seconds").textContent;
  clearInterval(timer);
  console.log(plusFive);
  if (plusFive) {
    plus(minutes);
    stop = false;
  }
  if (subFive) {
    sub(minutes);
    stop = false;
  }

  if (stop) {
    return;
  }

  if (stop === false) {
    timer = setInterval(function counter() {
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
    }, 1000);
  }
}

export { timerClock };

function plus(minutes) {
  minutes = Number(minutes) + 5;
  document.querySelector(".minutes").textContent = String(minutes).padStart(
    2,
    "0"
  );
}
function sub(minutes) {
  if (minutes > 5) {
    minutes = Number(minutes) - 5;
    document.querySelector(".minutes").textContent = String(minutes).padStart(
      2,
      "0"
    );
  }
}

export { plus, sub };

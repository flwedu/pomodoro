import Clock from "./model/Clock.js";

const app = document.querySelector("#app");
const startButton = document.querySelector(".button__start");
const pauseButton = document.querySelector(".button__pause");
const endButton = document.querySelector(".button__end");

// View
const clock = new Clock(1);

setInterval(updateView, 1000);

function updateView() {
    app.textContent = clock.getTime();
}

// Buttons
startButton.addEventListener("click", () => clock.startClock())
pauseButton.addEventListener("click", () => clock.pauseClock())
endButton.addEventListener("click", () => clock.restartClock())
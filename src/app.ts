import { updateStartButton } from "./buttonsFunctions.js";
import Clock from "./model/Clock.js";

const startButton: HTMLElement = document.querySelector(".button__start");
const stopButton: HTMLElement = document.querySelector(".button__stop");

const app: HTMLElement = document.getElementById("app");

// Buttons
startButton.addEventListener("click", () => {
    clock.toggleCounting();
    startButton.classList.toggle("paused", !clock.getTimeIsCounting())
    startButton.textContent = updateStartButton(clock.getTimeIsCounting());
})
stopButton.addEventListener("click", () => {
    clock.restartClock();
    startButton.textContent = updateStartButton(false);
    startButton.classList.add('paused');
})

// View
const clock = new Clock(25);

setInterval(updateView, 1000);

function updateView() {
    app.textContent = clock.getTime();
}
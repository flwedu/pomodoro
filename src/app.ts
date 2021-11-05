import { updateStartButton } from "./buttonsFunctions.js";
import Clock from "./model/Clock.js";
import { hideElement, revealElement } from "./viewFunctions.js";

const focusButton: HTMLElement = document.getElementById("button__focus");
const endButton: HTMLElement = document.getElementById("button__end");
const relaxButton: HTMLElement = document.getElementById("button__relax");
const openConfigurationsButton: HTMLElement = document.getElementById("button__configurations");

const app: HTMLElement = document.getElementById("app");

// Buttons
focusButton.addEventListener("click", () => {
    clock.toggleCounting();
    focusButton.classList.toggle("paused", !clock.getTimeIsCounting())
    focusButton.textContent = updateStartButton(clock.getTimeIsCounting());
})
endButton.addEventListener("click", () => {
    clock.restartClock();
    focusButton.textContent = updateStartButton(false);
    focusButton.classList.add('paused');
})

openConfigurationsButton.addEventListener("click", () => {
    revealElement(document.getElementById("configurations"));
})

// View
const clock = new Clock(25);

setInterval(updateView, 1000);

function updateView() {
    app.textContent = clock.getTime();
}
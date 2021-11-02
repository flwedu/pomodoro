import { updateStartButton } from "./buttonsFunctions.js";
import Clock from "./model/Clock.js";
var startButton = document.querySelector(".button__start");
var stopButton = document.querySelector(".button__stop");
var app = document.getElementById("app");
// Buttons
startButton.addEventListener("click", function () {
    clock.toggleCounting();
    startButton.classList.toggle("paused", !clock.getTimeIsCounting());
    startButton.textContent = updateStartButton(clock.getTimeIsCounting());
});
stopButton.addEventListener("click", function () {
    clock.restartClock();
    startButton.textContent = updateStartButton(false);
    startButton.classList.add('paused');
});
// View
var clock = new Clock(25);
setInterval(updateView, 1000);
function updateView() {
    app.textContent = clock.getTime();
}

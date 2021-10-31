import Clock from "./model/Clock.js";
var app = document.getElementById("app");
var startButton = document.querySelector(".button__start");
var stopButton = document.querySelector(".button__stop");
// View
var clock = new Clock(25);
setInterval(updateView, 1000);
function updateView() {
    app.textContent = clock.getTime();
}
// Buttons
startButton.addEventListener("click", function () { return clock.startClock(); });
stopButton.addEventListener("click", function () { return clock.restartClock(); });

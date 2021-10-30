import Clock from "./model/Clock.js";
var app = document.querySelector("#app");
var startButton = document.querySelector(".button__start");
var pauseButton = document.querySelector(".button__pause");
var endButton = document.querySelector(".button__end");
// View
var clock = new Clock(1);
setInterval(updateView, 1000);
function updateView() {
    app.textContent = clock.getTime();
}
// Buttons
startButton.addEventListener("click", function () { return clock.startClock(); });
pauseButton.addEventListener("click", function () { return clock.pauseClock(); });
endButton.addEventListener("click", function () { return clock.restartClock(); });

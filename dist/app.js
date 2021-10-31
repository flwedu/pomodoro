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
startButton.addEventListener("click", function () {
    clock.toggleCounting();
    if (clock.getTimeIsCounting())
        startButton.textContent = "⏸️ Pause Counter";
    else
        startButton.textContent = "⏳ Start Counter";
});
stopButton.addEventListener("click", function () {
    clock.restartClock();
    startButton.textContent = "⏳ Start Counter";
});

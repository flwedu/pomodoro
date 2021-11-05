import { updateStartButton } from "./buttonsFunctions.js";
import { openConfigurationsWindow } from "./configurations.js";
import Clock from "./model/Clock.js";
var focusButton = document.getElementById("button__focus");
var endButton = document.getElementById("button__end");
var relaxButton = document.getElementById("button__relax");
var openConfigurationsButton = document.getElementById("button__configurations");
var app = document.getElementById("app");
// Buttons
focusButton.addEventListener("click", function () {
    clock.toggleCounting();
    focusButton.classList.toggle("paused", !clock.getTimeIsCounting());
    focusButton.textContent = updateStartButton(clock.getTimeIsCounting());
});
endButton.addEventListener("click", function () {
    clock.restartClock();
    focusButton.textContent = updateStartButton(false);
    focusButton.classList.add('paused');
});
openConfigurationsButton.addEventListener("click", function () {
    openConfigurationsWindow();
});
// View
var clock = new Clock(25);
setInterval(updateView, 1000);
function updateView() {
    app.textContent = clock.getTime();
}

import { openConfigurationsWindow } from "./configurations.js";
import { EventEmitter } from "./core/EventEmitter.js";
import Clock from "./model/Clock.js";
import { appPaused } from "./model/status.js";
var focusButton = document.getElementById("button__focus");
var endButton = document.getElementById("button__end");
var relaxButton = document.getElementById("button__relax");
var openConfigurationsButton = document.getElementById("button__configurations");
// View
var clock = new Clock(25);
setInterval(updateView, 1000);
function updateView() {
    app.textContent = clock.getTime();
}
// Listening to events
EventEmitter.listen("ChangeStatus", function (newAppStatus) {
    appStatus = newAppStatus;
    appStatus.onChange(clock);
});
EventEmitter.listen("ChangeClock", function (initialMinuts) {
    clock.changeInitialMinuts(initialMinuts);
});
var app = document.getElementById("app");
var appStatus = appPaused;
appStatus.onChange();
// Buttons
focusButton.addEventListener("click", function () {
    appStatus.focusButtonAction(clock);
});
relaxButton.addEventListener("click", function () {
    appStatus.relaxButtonAction(clock);
});
endButton.addEventListener("click", function () {
    appStatus.endButtonAction(clock);
});
openConfigurationsButton.addEventListener("click", function () {
    openConfigurationsWindow();
});

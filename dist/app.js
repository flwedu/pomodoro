import { openConfigurationsWindow } from "./configurations.js";
import { EventEmitter } from "./core/EventEmitter.js";
import Clock from "./model/Clock.js";
import { appPaused } from "./model/status.js";
var openConfigurationsButton = document.getElementById("button__configurations");
var app = document.getElementById("app");
var clock = new Clock(25);
var appStatus = appPaused;
appStatus.onChange(clock);
// View
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
// Listening to buttons click
document.querySelectorAll(".button").forEach(function (button) { button.addEventListener("click", function () { return appStatus[button.id](clock); }); });
openConfigurationsButton.addEventListener("click", function () {
    openConfigurationsWindow();
});

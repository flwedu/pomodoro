import { button__start } from "./buttons/Buttons.js";
import { openConfigurationsWindow } from "./configurations.js";
import { EventEmitter } from "./core/EventEmitter.js";
import Clock from "./model/Clock.js";
var app = document.getElementById("app");
var clock = new Clock(25);
// View
setInterval(updateView, 1000);
function updateView() {
    app.textContent = clock.getTime();
}
// Listening to events
EventEmitter.listen("ChangeClock", function (initialMinuts) {
    clock.changeInitialMinuts(initialMinuts);
});
EventEmitter.listen("StartClock", function () {
    button__start.innerHTML = "⏸️";
    clock.startClock();
});
EventEmitter.listen("PauseClock", function () {
    button__start.innerHTML = "▶️";
    clock.pauseClock();
});
EventEmitter.listen("RestartClock", function () {
    clock.restartClock();
});
EventEmitter.listen("OpenConfigurations", function () {
    openConfigurationsWindow();
});

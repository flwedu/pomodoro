import { button__start } from "./buttons/Buttons.js";
import { openConfigurationsWindow } from "./configurations.js";
import { EventEmitter } from "./core/EventEmitter.js";
import Clock from "./model/Clock.js";
var app = document.getElementById("app");
var clock = new Clock(25);
var focusTime = true;
// View
setInterval(updateView, 1000);
function updateView() {
    app.textContent = clock.getTime();
}
// Listening to events
EventEmitter.listen("ChangeClock", function (initialMinuts) {
    clock.changeInitialMinuts(initialMinuts);
});
EventEmitter.listen("StartClicked", function () {
    if (!clock.getTimeIsCounting()) {
        button__start.innerHTML = "⏸️";
        return clock.startClock();
    }
    button__start.innerHTML = "▶️";
    return clock.pauseClock();
});
EventEmitter.listen("EndClicked", function () {
    if (focusTime) {
        clock.changeInitialMinuts(5);
    }
    else {
        clock.changeInitialMinuts(25);
    }
    button__start.innerHTML = "▶️";
    focusTime = !focusTime;
});
EventEmitter.listen("RestartClock", function () {
    clock.restartClock();
});
EventEmitter.listen("OpenConfigurations", function () {
    openConfigurationsWindow();
});

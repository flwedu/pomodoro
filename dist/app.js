import { button__start } from "./buttons/Buttons.js";
import { configurations, openConfigurationsWindow } from "./configurations.js";
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
        clock.changeInitialMinuts(configurations.relaxTime);
    }
    else {
        clock.changeInitialMinuts(configurations.focusTime);
    }
    button__start.innerHTML = "▶️";
    focusTime = !focusTime;
});
EventEmitter.listen("OpenConfigurations", function () {
    openConfigurationsWindow();
});
EventEmitter.listen("SaveConfigurations", function () {
    EventEmitter.emit("EndClicked", null);
});

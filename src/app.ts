import { button__start } from "./buttons/Buttons.js";
import { configurations, openConfigurationsWindow } from "./configurations.js";
import { EventEmitter } from "./core/EventEmitter.js";
import Clock from "./model/Clock.js";

const app: HTMLElement = document.getElementById("app");

const clock = new Clock(25);
var focusTime = true;

// View
setInterval(updateView, 1000);

function updateView() {
    app.textContent = clock.getTime();
}

// Listening to events
EventEmitter.listen("StartClicked", () => {
    if (!clock.getTimeIsCounting()) {
        button__start.innerHTML = "⏸️"
        return clock.startClock();
    }
    button__start.innerHTML = "▶️";
    return clock.pauseClock();
});

EventEmitter.listen("EndClicked", () => {
    if (focusTime) {
        clock.changeInitialMinuts(configurations.relaxTime);
    }
    else {
        clock.changeInitialMinuts(configurations.focusTime);
    }
    button__start.innerHTML = "▶️";
    focusTime = !focusTime;
});

EventEmitter.listen("OpenConfigurations", () => {
    openConfigurationsWindow();
});

EventEmitter.listen("SaveConfigurations", () => {
    EventEmitter.emit("EndClicked", null);
})

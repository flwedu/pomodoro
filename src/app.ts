import { openConfigurationsWindow } from "./configurations.js";
import { EventEmitter } from "./core/EventEmitter.js";
import Clock from "./model/Clock.js";

const openConfigurationsButton: HTMLElement = document.getElementById(
    "button__configurations"
);
const app: HTMLElement = document.getElementById("app");

const clock = new Clock(25);

// View
setInterval(updateView, 1000);

function updateView() {
    app.textContent = clock.getTime();
}

// Listening to events
EventEmitter.listen("ChangeClock", (initialMinuts: number) => {
    clock.changeInitialMinuts(initialMinuts);
});

EventEmitter.listen("StartClock", () => {
    clock.startClock();
});

EventEmitter.listen("PauseClock", () => {
    clock.pauseClock();
});

EventEmitter.listen("RestartClock", () => {
    clock.restartClock();
});

// Listening to buttons click
openConfigurationsButton.addEventListener("click", () => {
    openConfigurationsWindow();
});

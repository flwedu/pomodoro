import { button__start } from "./buttons/Buttons.js";
import { openConfigurationsWindow } from "./configurations.js";
import { EventEmitter } from "./core/EventEmitter.js";
import Clock from "./model/Clock.js";

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
    button__start.innerHTML = "⏸️"
    clock.startClock();
});

EventEmitter.listen("PauseClock", () => {
    button__start.innerHTML = "▶️";
    clock.pauseClock();
});

EventEmitter.listen("RestartClock", () => {
    clock.restartClock();
});

EventEmitter.listen("OpenConfigurations", () => {
    openConfigurationsWindow();
});

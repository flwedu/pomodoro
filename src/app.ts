import { openConfigurationsWindow } from "./configurations.js";
import { EventEmitter } from "./core/EventEmitter.js";
import Clock from "./model/Clock.js";
import { appPaused } from "./model/status.js";

const openConfigurationsButton: HTMLElement = document.getElementById("button__configurations");
const app: HTMLElement = document.getElementById("app");

const clock = new Clock(25);
var appStatus: any = appPaused;
appStatus.onChange(clock);

// View

setInterval(updateView, 1000);

function updateView() {
    app.textContent = clock.getTime();
}

// Listening to events
EventEmitter.listen("ChangeStatus", (newAppStatus: any) => {
    appStatus = newAppStatus;
    appStatus.onChange(clock);
})

EventEmitter.listen("ChangeClock", (initialMinuts: number) => {
    clock.changeInitialMinuts(initialMinuts);
})

// Listening to buttons click
document.querySelectorAll(".button").forEach(button => { button.addEventListener("click", () => appStatus[button.id](clock)) });

openConfigurationsButton.addEventListener("click", () => {
    openConfigurationsWindow();
})


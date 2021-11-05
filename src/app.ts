import { openConfigurationsWindow } from "./configurations.js";
import { EventEmitter } from "./core/EventEmitter.js";
import Clock from "./model/Clock.js";
import { appPaused, IStatus } from "./model/status.js";

const focusButton: HTMLElement = document.getElementById("button__focus");
const endButton: HTMLElement = document.getElementById("button__end");
const relaxButton: HTMLElement = document.getElementById("button__relax");
const openConfigurationsButton: HTMLElement = document.getElementById("button__configurations");

// View
const clock = new Clock(25);

setInterval(updateView, 1000);

function updateView() {
    app.textContent = clock.getTime();
}

// Listening to events
EventEmitter.listen("ChangeStatus", (newAppStatus: IStatus) => {
    appStatus = newAppStatus;
    appStatus.onChange(clock);
})

EventEmitter.listen("ChangeClock", (initialMinuts: number) => {
    clock.changeInitialMinuts(initialMinuts);
})

const app: HTMLElement = document.getElementById("app");
var appStatus: IStatus = appPaused;
appStatus.onChange();

// Buttons
focusButton.addEventListener("click", () => {
    appStatus.focusButtonAction(clock);
})

relaxButton.addEventListener("click", () => {
    appStatus.relaxButtonAction(clock);
})

endButton.addEventListener("click", () => {
    appStatus.endButtonAction(clock);
})

openConfigurationsButton.addEventListener("click", () => {
    openConfigurationsWindow();
})


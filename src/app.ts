import { openConfigurationsWindow } from "./configurations.js";
import Clock from "./model/Clock.js";
import { appPaused, IStatus } from "./model/status.js";

const focusButton: HTMLElement = document.getElementById("button__focus");
const endButton: HTMLElement = document.getElementById("button__end");
const relaxButton: HTMLElement = document.getElementById("button__relax");
const openConfigurationsButton: HTMLElement = document.getElementById("button__configurations");

const app: HTMLElement = document.getElementById("app");
var appStatus: IStatus = appPaused;

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

// View
const clock = new Clock(25);

setInterval(updateView, 1000);

function updateView() {
    app.textContent = clock.getTime();
}

/**
 * This function works like a event emitter, changing the appStatus when it is called.
 * @param newAppStatus 
 */
export const updateStatus = function (newAppStatus: IStatus) {
    appStatus = newAppStatus;
    appStatus.onChange(clock);
}
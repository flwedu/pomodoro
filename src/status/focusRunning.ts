import { updateStartButton } from "../buttonsFunctions.js";
import { EventEmitter } from "../core/EventEmitter.js";
import { appStopped } from "./appStopped.js";
import { appPaused } from "./appPaused.js";

export const focusButton: HTMLElement = document.getElementById("button__focus");

export const focusRunning = {
    onChange: () => {
        EventEmitter.emit("StartClock", null);
        focusButton.textContent = updateStartButton(true);
        focusButton.classList.remove('paused');
    },

    button__focus: () => {
        EventEmitter.emit("ChangeStatus", appPaused);
    },

    button__relax: () => {
    },

    button__end: () => {
        EventEmitter.emit("ChangeStatus", appStopped);
    }
};

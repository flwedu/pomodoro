import { EventEmitter } from "../core/EventEmitter.js";
import { appStopped } from "./appStopped.js";
import { appPaused } from "./appPaused.js";
import { button__focus, updateStartButton } from "../buttons/Buttons.js";

export const focusRunning = {
    onChange: () => {
        EventEmitter.emit("StartClock", null);
        button__focus.textContent = updateStartButton(true);
        button__focus.classList.remove('paused');
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

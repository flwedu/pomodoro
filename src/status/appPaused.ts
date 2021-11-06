import { EventEmitter } from "../core/EventEmitter.js";
import { enableElement } from "../viewFunctions.js";
import { focusRunning } from "./focusRunning.js";
import { relaxRunning } from "./relaxRunning.js";
import { appStopped } from "./appStopped.js";
import { button__focus, button__relax } from "../buttons/Buttons.js";
import { updateStartButton } from "../buttonsFunctions.js";

export const appPaused = {
    onChange: () => {
        enableElement(button__focus, button__relax);
        EventEmitter.emit("PauseClock", null);
        button__focus.textContent = updateStartButton(false);
        button__focus.classList.add('paused');
    },

    button__focus: () => {
        EventEmitter.emit("ChangeStatus", focusRunning);
    },

    button__relax: () => {
        EventEmitter.emit("ChangeStatus", relaxRunning);
    },

    button__end: () => {
        EventEmitter.emit("ChangeStatus", appStopped);
    }
};

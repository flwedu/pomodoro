import { button__relax } from "../buttons/Buttons.js";
import { EventEmitter } from "../core/EventEmitter.js";
import { disableElement } from "../viewFunctions.js";
import { appStopped } from "./appStopped.js";
import { focusRunning } from "./focusRunning.js";

export const relaxRunning = {
    onChange: () => {
        disableElement(button__relax);
        EventEmitter.emit("ChangeClock", 5);
        EventEmitter.emit("StartClock", null);
    },

    button__focus: () => {
        EventEmitter.emit("ChangeStatus", focusRunning);
    },

    button__relax: () => {
    },

    button__end: () => {
        EventEmitter.emit("ChangeStatus", appStopped);
    }
};

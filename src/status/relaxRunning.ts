import { EventEmitter } from "../core/EventEmitter.js";
import { disableElement } from "../viewFunctions.js";
import { appStopped } from "./appStopped.js";
import { focusRunning } from "./focusRunning.js";

export const relaxButton: HTMLElement = document.getElementById("button__relax");

export const relaxRunning = {
    onChange: () => {
        disableElement(relaxButton);
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

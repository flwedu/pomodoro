import { EventEmitter } from "../core/EventEmitter.js";
import { enableElement } from "../viewFunctions.js";
import { focusRunning } from "./focusRunning.js";
import { relaxRunning } from "./relaxRunning.js";
import { appStopped } from "./appStopped.js";

export const focusButton: HTMLElement = document.getElementById("button__focus");
export const relaxButton: HTMLElement = document.getElementById("button__relax");
export const endButton: HTMLElement = document.getElementById("button__end");

export const appPaused = {
    onChange: () => {
        enableElement(focusButton, relaxButton);
        EventEmitter.emit("PauseClock", null);
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

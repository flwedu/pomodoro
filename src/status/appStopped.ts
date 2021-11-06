import { EventEmitter } from "../core/EventEmitter.js";
import { disableElement, enableElement } from "../viewFunctions.js";
import { focusRunning } from "./focusRunning.js";
import { relaxRunning } from "./relaxRunning.js";

export const focusButton: HTMLElement = document.getElementById("button__focus");
export const relaxButton: HTMLElement = document.getElementById("button__relax");
export const endButton: HTMLElement = document.getElementById("button__end");

export const appStopped = {
    onChange: () => {
        EventEmitter.emit("ChangeClock", 25);
        EventEmitter.emit("RestartClock", null);
        enableElement(relaxButton, focusButton);
        disableElement(endButton);
    },

    button__focus: () => {
        EventEmitter.emit("ChangeStatus", focusRunning);
    },

    button__relax: () => {
        EventEmitter.emit("ChangeStatus", relaxRunning);
    },

    button__end: () => {
    }
};

import { updateStartButton } from "../buttonsFunctions.js";
import { EventEmitter } from "../core/EventEmitter.js";
import { disableElement, enableElement } from "../viewFunctions.js";

const focusButton: HTMLElement = document.getElementById("button__focus");
const relaxButton: HTMLElement = document.getElementById("button__relax");
const endButton: HTMLElement = document.getElementById("button__end");

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
}

export const appPaused = {

    onChange: () => {
        enableElement(focusButton, relaxButton)
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
}

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
}
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
}
import { updateStartButton } from "../buttonsFunctions.js";
import { EventEmitter } from "../core/EventEmitter.js";
import { disableElement, enableElement } from "../viewFunctions.js";
import Clock from "./Clock.js"

const focusButton: HTMLElement = document.getElementById("button__focus");
const relaxButton: HTMLElement = document.getElementById("button__relax");
const endButton: HTMLElement = document.getElementById("button__end");

export const focusRunning = {

    onChange: (clock: Clock) => {
        focusButton.textContent = updateStartButton(true);
        focusButton.classList.remove('paused');
        clock.startClock();
    },

    button__focus: (clock: Clock) => {
        EventEmitter.emit("ChangeStatus", appPaused);
    },

    button__relax: (clock: Clock) => {

    },

    button__end: (clock: Clock) => {
        EventEmitter.emit("ChangeStatus", appStopped);
    }
}

export const appPaused = {

    onChange: (clock: Clock) => {
        enableElement(focusButton, relaxButton)
        clock.pauseClock();
    },

    button__focus: (clock: Clock) => {
        clock.toggleCounting();
        focusButton.classList.toggle("paused", !clock.getTimeIsCounting())
        focusButton.textContent = updateStartButton(clock.getTimeIsCounting());
    },

    button__relax: (clock: Clock) => {
        EventEmitter.emit("ChangeStatus", focusRunning);
    },

    button__end: (clock: Clock) => {
        EventEmitter.emit("ChangeStatus", appStopped);
    }
}

export const appStopped = {

    onChange: (clock: Clock) => {
        clock.restartClock();
        enableElement(relaxButton, focusButton);
        focusButton.textContent = updateStartButton(false);
        focusButton.classList.add('paused');
    },

    button__focus: (clock: Clock) => {
        EventEmitter.emit("ChangeStatus", focusRunning);
    },

    button__relax: (clock: Clock) => {
        EventEmitter.emit("ChangeStatus", relaxRunning);
    },

    button__end: (clock: Clock) => {
        disableElement(endButton);
    }
}
export const relaxRunning = {

    onChange: (clock: Clock) => {
        disableElement(relaxButton);
    },

    button__focus: (clock: Clock) => {
        EventEmitter.emit("ChangeStatus", focusRunning);
    },

    button__relax: (clock: Clock) => {

    },

    button__end: (clock: Clock) => {
        EventEmitter.emit("ChangeStatus", appStopped);
    }
}
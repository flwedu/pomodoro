import { updateStartButton } from "../buttonsFunctions.js";
import { EventEmitter } from "../core/EventEmitter.js";
import { disableElement, enableElement } from "../viewFunctions.js";
import Clock from "./Clock.js"

/**
 * This class abstract the behaviour and attibutes of each button according to the application status.
 */
export interface IStatus {

    /* onChange is fired when the status is changed */
    onChange: Function;

    focusButtonAction: Function;
    relaxButtonAction: Function;
    endButtonAction: Function;
}

const focusButton: HTMLElement = document.getElementById("button__focus");
const endButton: HTMLElement = document.getElementById("button__end");
const relaxButton: HTMLElement = document.getElementById("button__relax");

export const focusRunning: IStatus = {

    onChange: (clock: Clock) => {
        focusButton.textContent = updateStartButton(true);
        focusButton.classList.remove('paused');
        clock.startClock();
    },

    focusButtonAction: (clock: Clock) => {
        EventEmitter.emit("ChangeStatus", appPaused);
    },

    relaxButtonAction: (clock: Clock) => {

    },

    endButtonAction: (clock: Clock) => {
        EventEmitter.emit("ChangeStatus", appStopped);
    }
}

export const appPaused: IStatus = {

    onChange: (clock: Clock) => {
        enableElement(focusButton, relaxButton)
        clock.pauseClock();
    },

    focusButtonAction: (clock: Clock) => {
        clock.toggleCounting();
        focusButton.classList.toggle("paused", !clock.getTimeIsCounting())
        focusButton.textContent = updateStartButton(clock.getTimeIsCounting());
    },

    relaxButtonAction: (clock: Clock) => {
        EventEmitter.emit("ChangeStatus", focusRunning);
    },

    endButtonAction: (clock: Clock) => {
        EventEmitter.emit("ChangeStatus", appStopped);
    }
}

export const appStopped: IStatus = {

    onChange: (clock: Clock) => {
        clock.restartClock();
        enableElement(relaxButton, focusButton);
        focusButton.textContent = updateStartButton(false);
        focusButton.classList.add('paused');
    },

    focusButtonAction: (clock: Clock) => {
        EventEmitter.emit("ChangeStatus", focusRunning);
    },

    relaxButtonAction: (clock: Clock) => {
        EventEmitter.emit("ChangeStatus", relaxRunning);
    },

    endButtonAction: (clock: Clock) => {
        disableElement(endButton);
    }
}
export const relaxRunning: IStatus = {

    onChange: (clock: Clock) => {
        disableElement(relaxButton);
    },

    focusButtonAction: (clock: Clock) => {
        EventEmitter.emit("ChangeStatus", focusRunning);
    },

    relaxButtonAction: (clock: Clock) => {

    },

    endButtonAction: (clock: Clock) => {
        EventEmitter.emit("ChangeStatus", appStopped);
    }
}
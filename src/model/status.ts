import { updateStatus } from "../app.js";
import { updateStartButton } from "../buttonsFunctions.js";
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
        updateStatus(appPaused);
    },

    relaxButtonAction: (clock: Clock) => {

    },

    endButtonAction: (clock: Clock) => {
        updateStatus(appStopped);
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
        updateStatus(focusRunning);
    },

    endButtonAction: (clock: Clock) => {
        updateStatus(appStopped);
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
        updateStatus(focusRunning);
    },

    relaxButtonAction: (clock: Clock) => {
        updateStatus(relaxRunning);
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
        updateStatus(focusRunning);
    },

    relaxButtonAction: (clock: Clock) => {

    },

    endButtonAction: (clock: Clock) => {
        updateStatus(appStopped);
    }
}
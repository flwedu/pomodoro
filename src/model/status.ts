import { updateStartButton } from "../buttonsFunctions.js";
import { disableElement } from "../viewFunctions.js";
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
        disableElement(relaxButton);
    },

    focusButtonAction: (clock: Clock) => {

    },

    relaxButtonAction: (clock: Clock) => {

    },

    endButtonAction: (clock: Clock) => {

    }
}

export const appPaused: IStatus = {

    onChange: (clock: Clock) => {
        disableElement(relaxButton);
    },

    focusButtonAction: (clock: Clock) => {
        clock.toggleCounting();
        focusButton.classList.toggle("paused", !clock.getTimeIsCounting())
        focusButton.textContent = updateStartButton(clock.getTimeIsCounting());
    },

    relaxButtonAction: (clock: Clock) => {

    },

    endButtonAction: (clock: Clock) => {
        clock.restartClock();
        focusButton.textContent = updateStartButton(false);
        focusButton.classList.add('paused');
    }
}
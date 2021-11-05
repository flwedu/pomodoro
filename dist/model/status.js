import { updateStartButton } from "../buttonsFunctions.js";
import { disableElement } from "../viewFunctions.js";
var focusButton = document.getElementById("button__focus");
var endButton = document.getElementById("button__end");
var relaxButton = document.getElementById("button__relax");
export var focusRunning = {
    onChange: function (clock) {
        disableElement(relaxButton);
    },
    focusButtonAction: function (clock) {
    },
    relaxButtonAction: function (clock) {
    },
    endButtonAction: function (clock) {
    }
};
export var appPaused = {
    onChange: function (clock) {
        disableElement(relaxButton);
    },
    focusButtonAction: function (clock) {
        clock.toggleCounting();
        focusButton.classList.toggle("paused", !clock.getTimeIsCounting());
        focusButton.textContent = updateStartButton(clock.getTimeIsCounting());
    },
    relaxButtonAction: function (clock) {
    },
    endButtonAction: function (clock) {
        clock.restartClock();
        focusButton.textContent = updateStartButton(false);
        focusButton.classList.add('paused');
    }
};

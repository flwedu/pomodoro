import { updateStatus } from "../app.js";
import { updateStartButton } from "../buttonsFunctions.js";
import { disableElement, enableElement } from "../viewFunctions.js";
var focusButton = document.getElementById("button__focus");
var endButton = document.getElementById("button__end");
var relaxButton = document.getElementById("button__relax");
export var focusRunning = {
    onChange: function (clock) {
        focusButton.textContent = updateStartButton(true);
        focusButton.classList.remove('paused');
        clock.startClock();
    },
    focusButtonAction: function (clock) {
        updateStatus(appPaused);
    },
    relaxButtonAction: function (clock) {
    },
    endButtonAction: function (clock) {
        updateStatus(appStopped);
    }
};
export var appPaused = {
    onChange: function (clock) {
        enableElement(focusButton, relaxButton);
        clock.pauseClock();
    },
    focusButtonAction: function (clock) {
        clock.toggleCounting();
        focusButton.classList.toggle("paused", !clock.getTimeIsCounting());
        focusButton.textContent = updateStartButton(clock.getTimeIsCounting());
    },
    relaxButtonAction: function (clock) {
        updateStatus(focusRunning);
    },
    endButtonAction: function (clock) {
        updateStatus(appStopped);
    }
};
export var appStopped = {
    onChange: function (clock) {
        clock.restartClock();
        enableElement(relaxButton, focusButton);
        focusButton.textContent = updateStartButton(false);
        focusButton.classList.add('paused');
    },
    focusButtonAction: function (clock) {
        updateStatus(focusRunning);
    },
    relaxButtonAction: function (clock) {
        updateStatus(relaxRunning);
    },
    endButtonAction: function (clock) {
        disableElement(endButton);
    }
};
export var relaxRunning = {
    onChange: function (clock) {
        disableElement(relaxButton);
    },
    focusButtonAction: function (clock) {
        updateStatus(focusRunning);
    },
    relaxButtonAction: function (clock) {
    },
    endButtonAction: function (clock) {
        updateStatus(appStopped);
    }
};

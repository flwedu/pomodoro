import { updateStartButton } from "../buttonsFunctions.js";
import { EventEmitter } from "../core/EventEmitter.js";
import { disableElement, enableElement } from "../viewFunctions.js";
var focusButton = document.getElementById("button__focus");
var relaxButton = document.getElementById("button__relax");
var endButton = document.getElementById("button__end");
export var focusRunning = {
    onChange: function (clock) {
        focusButton.textContent = updateStartButton(true);
        focusButton.classList.remove('paused');
        clock.startClock();
    },
    button__focus: function (clock) {
        EventEmitter.emit("ChangeStatus", appPaused);
    },
    button__relax: function (clock) {
    },
    button__end: function (clock) {
        EventEmitter.emit("ChangeStatus", appStopped);
    }
};
export var appPaused = {
    onChange: function (clock) {
        enableElement(focusButton, relaxButton);
        clock.pauseClock();
    },
    button__focus: function (clock) {
        clock.toggleCounting();
        focusButton.classList.toggle("paused", !clock.getTimeIsCounting());
        focusButton.textContent = updateStartButton(clock.getTimeIsCounting());
    },
    button__relax: function (clock) {
        EventEmitter.emit("ChangeStatus", focusRunning);
    },
    button__end: function (clock) {
        EventEmitter.emit("ChangeStatus", appStopped);
    }
};
export var appStopped = {
    onChange: function (clock) {
        clock.restartClock();
        enableElement(relaxButton, focusButton);
        focusButton.textContent = updateStartButton(false);
        focusButton.classList.add('paused');
    },
    button__focus: function (clock) {
        EventEmitter.emit("ChangeStatus", focusRunning);
    },
    button__relax: function (clock) {
        EventEmitter.emit("ChangeStatus", relaxRunning);
    },
    button__end: function (clock) {
        disableElement(endButton);
    }
};
export var relaxRunning = {
    onChange: function (clock) {
        disableElement(relaxButton);
    },
    button__focus: function (clock) {
        EventEmitter.emit("ChangeStatus", focusRunning);
    },
    button__relax: function (clock) {
    },
    button__end: function (clock) {
        EventEmitter.emit("ChangeStatus", appStopped);
    }
};

import { updateStartButton } from "../buttonsFunctions.js";
import { EventEmitter } from "../core/EventEmitter.js";
import { disableElement, enableElement } from "../viewFunctions.js";
var focusButton = document.getElementById("button__focus");
var relaxButton = document.getElementById("button__relax");
var endButton = document.getElementById("button__end");
export var focusRunning = {
    onChange: function () {
        EventEmitter.emit("StartClock", null);
        focusButton.textContent = updateStartButton(true);
        focusButton.classList.remove('paused');
    },
    button__focus: function () {
        EventEmitter.emit("ChangeStatus", appPaused);
    },
    button__relax: function () {
    },
    button__end: function () {
        EventEmitter.emit("ChangeStatus", appStopped);
    }
};
export var appPaused = {
    onChange: function () {
        enableElement(focusButton, relaxButton);
        EventEmitter.emit("PauseClock", null);
    },
    button__focus: function () {
        EventEmitter.emit("ChangeStatus", focusRunning);
    },
    button__relax: function () {
        EventEmitter.emit("ChangeStatus", relaxRunning);
    },
    button__end: function () {
        EventEmitter.emit("ChangeStatus", appStopped);
    }
};
export var appStopped = {
    onChange: function () {
        EventEmitter.emit("ChangeClock", 25);
        EventEmitter.emit("RestartClock", null);
        enableElement(relaxButton, focusButton);
        disableElement(endButton);
    },
    button__focus: function () {
        EventEmitter.emit("ChangeStatus", focusRunning);
    },
    button__relax: function () {
        EventEmitter.emit("ChangeStatus", relaxRunning);
    },
    button__end: function () {
    }
};
export var relaxRunning = {
    onChange: function () {
        disableElement(relaxButton);
        EventEmitter.emit("ChangeClock", 5);
        EventEmitter.emit("StartClock", null);
    },
    button__focus: function () {
        EventEmitter.emit("ChangeStatus", focusRunning);
    },
    button__relax: function () {
    },
    button__end: function () {
        EventEmitter.emit("ChangeStatus", appStopped);
    }
};

import { EventEmitter } from "../core/EventEmitter.js";
import { disableElement, enableElement } from "../viewFunctions.js";
import { focusRunning } from "./focusRunning.js";
import { relaxRunning } from "./relaxRunning.js";
export var focusButton = document.getElementById("button__focus");
export var relaxButton = document.getElementById("button__relax");
export var endButton = document.getElementById("button__end");
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

import { EventEmitter } from "../core/EventEmitter.js";
import { enableElement } from "../viewFunctions.js";
import { focusRunning } from "./focusRunning.js";
import { relaxRunning } from "./relaxRunning.js";
import { appStopped } from "./appStopped.js";
export var focusButton = document.getElementById("button__focus");
export var relaxButton = document.getElementById("button__relax");
export var endButton = document.getElementById("button__end");
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

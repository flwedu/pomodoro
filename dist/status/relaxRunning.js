import { EventEmitter } from "../core/EventEmitter.js";
import { disableElement } from "../viewFunctions.js";
import { appStopped } from "./appStopped.js";
import { focusRunning } from "./focusRunning.js";
export var relaxButton = document.getElementById("button__relax");
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

import { button__end, button__focus, button__relax, } from "../buttons/Buttons.js";
import { EventEmitter } from "../core/EventEmitter.js";
import { disableElement, enableElement } from "../viewFunctions.js";
import { focusRunning } from "./focusRunning.js";
import { relaxRunning } from "./relaxRunning.js";
export var appStopped = {
    onChange: function () {
        EventEmitter.emit("ChangeClock", 25);
        EventEmitter.emit("RestartClock", null);
        enableElement(button__relax, button__focus);
        disableElement(button__end);
    },
    button__focus: function () {
        EventEmitter.emit("ChangeStatus", focusRunning);
    },
    button__relax: function () {
        EventEmitter.emit("ChangeStatus", relaxRunning);
    },
    button__end: function () { },
};

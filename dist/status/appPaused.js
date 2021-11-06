import { EventEmitter } from "../core/EventEmitter.js";
import { enableElement } from "../viewFunctions.js";
import { focusRunning } from "./focusRunning.js";
import { relaxRunning } from "./relaxRunning.js";
import { appStopped } from "./appStopped.js";
import { button__focus, button__relax } from "../buttons/Buttons.js";
export var appPaused = {
    onChange: function () {
        enableElement(button__focus, button__relax);
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

import { EventEmitter } from "../core/EventEmitter.js";
import { focusRunning } from "./focusRunning.js";
import { relaxRunning } from "./relaxRunning.js";
export var appStopped = {
    onChange: function () {
        EventEmitter.emit("ChangeClock", 25);
        EventEmitter.emit("RestartClock", null);
    },
    button__focus: function () {
        EventEmitter.emit("ChangeStatus", focusRunning);
    },
    button__relax: function () {
        EventEmitter.emit("ChangeStatus", relaxRunning);
    },
    button__end: function () { },
};

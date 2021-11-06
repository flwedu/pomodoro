import { EventEmitter } from "../core/EventEmitter.js";
import { focusRunning } from "./focusRunning.js";
import { relaxRunning } from "./relaxRunning.js";
import { appStopped } from "./appStopped.js";
export var appPaused = {
    onChange: function () {
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

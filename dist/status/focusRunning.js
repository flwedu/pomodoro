import { EventEmitter } from "../core/EventEmitter.js";
import { appPaused } from "./appPaused.js";
import { appStopped } from "./appStopped.js";
export var focusRunning = {
    onChange: function () {
        EventEmitter.emit("StartClock", null);
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

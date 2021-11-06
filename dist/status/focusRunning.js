import { EventEmitter } from "../core/EventEmitter.js";
import { appStopped } from "./appStopped.js";
import { appPaused } from "./appPaused.js";
import { button__focus, updateStartButton } from "../buttons/Buttons.js";
export var focusRunning = {
    onChange: function () {
        EventEmitter.emit("StartClock", null);
        button__focus.textContent = updateStartButton(true);
        button__focus.classList.remove('paused');
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

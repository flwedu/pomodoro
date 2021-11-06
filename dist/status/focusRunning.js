import { updateStartButton } from "../buttonsFunctions.js";
import { EventEmitter } from "../core/EventEmitter.js";
import { appStopped } from "./appStopped.js";
import { appPaused } from "./appPaused.js";
export var focusButton = document.getElementById("button__focus");
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

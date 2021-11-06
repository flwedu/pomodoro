import { EventEmitter } from "../core/EventEmitter.js";
import { appPaused } from "./appPaused.js";
import { appStopped } from "./appStopped.js";

export const focusRunning = {
    onChange: () => {
        EventEmitter.emit("StartClock", null);
    },

    button__focus: () => {
        EventEmitter.emit("ChangeStatus", appPaused);
    },

    button__relax: () => {
    },

    button__end: () => {
        EventEmitter.emit("ChangeStatus", appStopped);
    }
};

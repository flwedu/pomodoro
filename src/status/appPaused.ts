import { EventEmitter } from "../core/EventEmitter.js";
import { focusRunning } from "./focusRunning.js";
import { relaxRunning } from "./relaxRunning.js";
import { appStopped } from "./appStopped.js";

export const appPaused = {
    onChange: () => {
        EventEmitter.emit("PauseClock", null);
    },

    button__focus: () => {
        EventEmitter.emit("ChangeStatus", focusRunning);
    },

    button__relax: () => {
        EventEmitter.emit("ChangeStatus", relaxRunning);
    },

    button__end: () => {
        EventEmitter.emit("ChangeStatus", appStopped);
    }
};

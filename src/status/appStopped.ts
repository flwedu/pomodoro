import { EventEmitter } from "../core/EventEmitter.js";
import { focusRunning } from "./focusRunning.js";
import { relaxRunning } from "./relaxRunning.js";

export const appStopped = {
    onChange: () => {
        EventEmitter.emit("ChangeClock", 25);
        EventEmitter.emit("RestartClock", null);
    },

    button__focus: () => {
        EventEmitter.emit("ChangeStatus", focusRunning);
    },

    button__relax: () => {
        EventEmitter.emit("ChangeStatus", relaxRunning);
    },

    button__end: () => { },
};

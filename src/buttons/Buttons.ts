import { EventEmitter } from "../core/EventEmitter.js";

export const button__focus: HTMLElement = document.getElementById("button__focus");
export const button__relax: HTMLElement = document.getElementById("button__relax");
export const button__end: HTMLElement = document.getElementById("button__end");

export const updateStartButton = (clockIsRunning: boolean) => {

    if (clockIsRunning) return "⏸️ Pause Focus";
    return "⏳ Start Focus";
}

EventEmitter.listen("StartClock", () => { });
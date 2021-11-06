import { EventEmitter } from "../core/EventEmitter.js";

export const button__start: HTMLElement = document.getElementById("button__start");
export const button__end: HTMLElement = document.getElementById("button__end");

EventEmitter.listen("StartClock", () => { button__start.innerHTML = "▶️" });
EventEmitter.listen("PauseClock", () => { button__start.innerHTML = "⏸️" });
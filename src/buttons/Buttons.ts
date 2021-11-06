import { EventEmitter } from "../core/EventEmitter.js";

export const button__start: HTMLElement = document.getElementById("button__start");
export const button__end: HTMLElement = document.getElementById("button__end");
export const button__configurations = document.getElementById("button__configurations");


// Emiting events
button__start.addEventListener("click", () => {
    EventEmitter.emit("StartClicked", null);
})

button__end.addEventListener("click", () => {
    EventEmitter.emit("EndClicked", null);
})

button__configurations.addEventListener("click", () => {
    EventEmitter.emit("OpenConfigurations", null);
});
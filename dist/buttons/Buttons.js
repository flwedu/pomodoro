import { EventEmitter } from "../core/EventEmitter.js";
export var button__start = document.getElementById("button__start");
export var button__end = document.getElementById("button__end");
export var button__configurations = document.getElementById("button__configurations");
// Emiting events
button__start.addEventListener("click", function () {
    EventEmitter.emit("StartClicked", null);
});
button__end.addEventListener("click", function () {
    EventEmitter.emit("EndClicked", null);
});
button__configurations.addEventListener("click", function () {
    EventEmitter.emit("OpenConfigurations", null);
});

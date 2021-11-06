import { EventEmitter } from "../core/EventEmitter.js";
export var button__focus = document.getElementById("button__focus");
export var button__relax = document.getElementById("button__relax");
export var button__end = document.getElementById("button__end");
EventEmitter.listen("StartClock", function () { });

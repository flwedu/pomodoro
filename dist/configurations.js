import { EventEmitter } from "./core/EventEmitter.js";
import { hideElement, revealElement } from "./viewFunctions.js";
var saveButton = document.getElementById("button__save");
var window = document.getElementById("configurations");
var time__focus = document.getElementById("time__focus");
var time__relax = document.getElementById("time__relax");
export var configurations = {
    focusTime: 25,
    relaxTime: 5
};
export var openConfigurationsWindow = function () {
    revealElement(window);
};
var closeConfigurationWindow = function () {
    hideElement(window);
};
function getNewConfigurations() {
    configurations.focusTime = Number.parseInt(time__focus.value);
    configurations.relaxTime = Number.parseInt(time__relax.value);
}
saveButton.addEventListener("click", function () {
    getNewConfigurations();
    EventEmitter.emit("SaveConfigurations", configurations);
    closeConfigurationWindow();
});

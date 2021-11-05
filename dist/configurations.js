import { hideElement, revealElement } from "./viewFunctions.js";
var saveButton = document.getElementById("button__save");
var window = document.getElementById("configurations");
export var openConfigurationsWindow = function () {
    revealElement(window);
};
var closeConfigurationWindow = function () {
    hideElement(window);
};
saveButton.addEventListener("click", function () {
    closeConfigurationWindow();
});

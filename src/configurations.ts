import { hideElement, revealElement } from "./viewFunctions.js";

const saveButton = document.getElementById("button__save");
const window = document.getElementById("configurations");

export const openConfigurationsWindow = () => {
    revealElement(window);
}

const closeConfigurationWindow = () => {
    hideElement(window);
}

saveButton.addEventListener("click", () => {
    closeConfigurationWindow();
});
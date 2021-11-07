import { EventEmitter } from "./core/EventEmitter.js";
import { hideElement, revealElement } from "./viewFunctions.js";

const saveButton = document.getElementById("button__save");
const window = document.getElementById("configurations");

const time__focus: any = document.getElementById("time__focus");
const time__relax: any = document.getElementById("time__relax");

export const configurations = {
    focusTime: 25,
    relaxTime: 5
}

export const openConfigurationsWindow = () => {
    time__focus.value = configurations.focusTime;
    time__relax.value = configurations.relaxTime;
    revealElement(window);
}

function getNewConfigurations() {

    configurations.focusTime = Number.parseInt(time__focus.value);
    configurations.relaxTime = Number.parseInt(time__relax.value);
}

saveButton.addEventListener("click", () => {
    getNewConfigurations();
    EventEmitter.emit("SaveConfigurations", configurations);
    hideElement(window);
});
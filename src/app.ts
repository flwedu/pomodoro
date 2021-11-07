import { button__start } from "./buttons/Buttons.js";
import { configurations, openConfigurationsWindow } from "./configurations.js";
import { EventEmitter } from "./core/EventEmitter.js";
import Clock from "./model/Clock.js";
import { getStartButtonText, getTitleText } from "./view/textFuctions.js";

const title = document.getElementById("time__title")
const app: HTMLElement = document.getElementById("app");

const clock = new Clock(25);
var focusTime = true;

// View
setInterval(updateView, 1000);
title.textContent = getTitleText(focusTime);

function updateView() {
    app.textContent = clock.getTime();
}

// Listening to events
EventEmitter.listen("StartClicked", () => {
    button__start.innerHTML = getStartButtonText(!clock.getTimeIsCounting())
    if (!clock.getTimeIsCounting()) {
        return clock.startClock();
    }
    return clock.pauseClock();
});

EventEmitter.listen("EndClicked", () => {
    if (focusTime) {
        clock.changeInitialMinuts(configurations.relaxTime);
    }
    else {
        clock.changeInitialMinuts(configurations.focusTime);
    }
    title.textContent = getTitleText(!focusTime);
    button__start.innerHTML = getStartButtonText(clock.getTimeIsCounting());
    focusTime = !focusTime;
});

EventEmitter.listen("OpenConfigurations", () => {
    openConfigurationsWindow();
});

EventEmitter.listen("SaveConfigurations", () => {
    focusTime = true;
    title.textContent = getTitleText(focusTime);
    clock.changeInitialMinuts(configurations.focusTime);
    clock.restartClock();
})

import { button__start } from "./buttons/Buttons.js";
import { configurations, openConfigurationsWindow } from "./configurations.js";
import { EventEmitter } from "./core/EventEmitter.js";
import Clock from "./model/Clock.js";
import { getStartButtonText, getTitleText } from "./view/textFuctions.js";

const title = document.getElementById("time__title")
const app: HTMLElement = document.getElementById("app");

var clock: Clock;
var focusTime: boolean;

// View
window.setInterval(updateView, 1000);
title.textContent = getTitleText(focusTime);

function updateView() {
    app.textContent = clock.getTime();
}

// Document Lifecycle
window.addEventListener("load", () => {
    clock = new Clock(25);
    focusTime = true;
    app.textContent = clock.getTime();
});

// Initializing service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('dist/serviceWorker.js', { scope: "./dist/" })
        .then((registration) => {
            var serviceWorker: ServiceWorker;
            if (registration.active) {
                serviceWorker = registration.active;
            }
            if (serviceWorker) {
                console.log("service worker inicializado");
            }
        }).catch(err => console.error(err));
} else {
    alert("browser doesn't support Service Worker");
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

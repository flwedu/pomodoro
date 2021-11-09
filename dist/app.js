import { button__start } from "./buttons/Buttons.js";
import { configurations, openConfigurationsWindow } from "./configurations.js";
import { EventEmitter } from "./core/EventEmitter.js";
import Clock from "./model/Clock.js";
import { getStartButtonText, getTitleText } from "./view/textFuctions.js";
var title = document.getElementById("time__title");
var app = document.getElementById("app");
var clock;
var focusTime;
// View
window.setInterval(updateView, 1000);
title.textContent = getTitleText(focusTime);
function updateView() {
    app.textContent = clock.getTime();
}
// Document Lifecycle
window.addEventListener("load", function () {
    clock = new Clock(25);
    focusTime = true;
    app.textContent = clock.getTime();
});
// Initializing service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('dist/serviceWorker.js', { scope: "./dist/" })
        .then(function (registration) {
        var serviceWorker;
        if (registration.active) {
            serviceWorker = registration.active;
        }
        if (serviceWorker) {
            console.log("service worker inicializado");
        }
    }).catch(function (err) { return console.error(err); });
}
else {
    alert("browser doesn't support Service Worker");
}
// Listening to events
EventEmitter.listen("StartClicked", function () {
    button__start.innerHTML = getStartButtonText(!clock.getTimeIsCounting());
    if (!clock.getTimeIsCounting()) {
        return clock.startClock();
    }
    return clock.pauseClock();
});
EventEmitter.listen("EndClicked", function () {
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
EventEmitter.listen("OpenConfigurations", function () {
    openConfigurationsWindow();
});
EventEmitter.listen("SaveConfigurations", function () {
    focusTime = true;
    title.textContent = getTitleText(focusTime);
    clock.changeInitialMinuts(configurations.focusTime);
    clock.restartClock();
});

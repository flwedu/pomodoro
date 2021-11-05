import { openConfigurationsWindow } from "./configurations.js";
import Clock from "./model/Clock.js";
import { appPaused } from "./model/status.js";
var focusButton = document.getElementById("button__focus");
var endButton = document.getElementById("button__end");
var relaxButton = document.getElementById("button__relax");
var openConfigurationsButton = document.getElementById("button__configurations");
// View
var clock = new Clock(25);
setInterval(updateView, 1000);
function updateView() {
    app.textContent = clock.getTime();
}
/**
 * This function works like a event emitter, changing the appStatus when it is called.
 * @param newAppStatus
 */
export var updateStatus = function (newAppStatus) {
    appStatus = newAppStatus;
    appStatus.onChange(clock);
    return appStatus;
};
var app = document.getElementById("app");
var appStatus = updateStatus(appPaused);
// Buttons
focusButton.addEventListener("click", function () {
    appStatus.focusButtonAction(clock);
});
relaxButton.addEventListener("click", function () {
    appStatus.relaxButtonAction(clock);
});
endButton.addEventListener("click", function () {
    appStatus.endButtonAction(clock);
});
openConfigurationsButton.addEventListener("click", function () {
    openConfigurationsWindow();
});

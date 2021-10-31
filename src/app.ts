import Clock from "./model/Clock.js";

const app: any = document.getElementById("app");

const startButton = document.querySelector(".button__start");
const stopButton = document.querySelector(".button__stop");

// View
const clock = new Clock(25);

setInterval(updateView, 1000);

function updateView() {
    app.textContent = clock.getTime();
}

// Buttons
startButton.addEventListener("click", () => {
    clock.toggleCounting();

    if (clock.getTimeIsCounting()) startButton.textContent = "⏸️ Pause Counter";
    else startButton.textContent = "⏳ Start Counter";
})
stopButton.addEventListener("click", () => clock.restartClock())
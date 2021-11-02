export var updateStartButton = function (clockIsRunning) {
    if (clockIsRunning)
        return "⏸️ Pause Counter";
    return "⏳ Start Counter";
};

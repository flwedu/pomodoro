/**
 * Funtion thats returns the innetHtmlText to the start button
 * @param clockIsRunning
 * @returns
 */
export var updateStartButton = function (clockIsRunning) {
    if (clockIsRunning)
        return "⏸️ Pause Counter";
    return "⏳ Start Counter";
};

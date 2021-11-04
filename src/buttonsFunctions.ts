
/**
 * Funtion thats returns the innetHtmlText to the start button
 * @param clockIsRunning
 * @returns 
 */
export const updateStartButton = (clockIsRunning: boolean) => {

    if (clockIsRunning) return "⏸️ Pause Counter";
    return "⏳ Start Counter";
}
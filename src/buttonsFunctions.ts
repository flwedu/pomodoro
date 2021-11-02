

export const updateStartButton = (clockIsRunning: boolean) => {

    if (clockIsRunning) return "⏸️ Pause Counter";
    return "⏳ Start Counter";
}
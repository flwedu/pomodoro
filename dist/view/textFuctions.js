export function getTitleText(focusTime) {
    if (focusTime)
        return "Focus time! 🙏";
    return "Relaxing time 🤹";
}
export function getStartButtonText(running) {
    if (running)
        return "⏸️";
    return "▶️";
}

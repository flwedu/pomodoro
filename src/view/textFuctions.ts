export function getTitleText(focusTime: boolean) {
    if (focusTime) return "Focus time! 🙏";
    return "Relaxing time 🤹";
}

export function getStartButtonText(running: boolean) {
    if (running) return "⏸️";
    return "▶️"
}
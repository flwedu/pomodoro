export const revealElement = (element: HTMLElement) => {
    element.classList.remove("hidden");
}

export const hideElement = (element: HTMLElement) => {
    element.classList.add("hidden");
}
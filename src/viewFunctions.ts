export const revealElement = (element: HTMLElement) => {
    element.classList.remove("hidden");
}

export const hideElement = (element: HTMLElement) => {
    element.classList.add("hidden");
}

export const disableElement = (element: HTMLElement) => {
    element.classList.add("disabled")
}

export const enableElement = (element: HTMLElement) => {
    element.classList.remove("disabled")
}
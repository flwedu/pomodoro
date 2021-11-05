export const revealElement = (...elements: HTMLElement[]) => {
    elements.forEach(element => element.classList.remove("hidden"));
}

export const hideElement = (...elements: HTMLElement[]) => {
    elements.forEach(element => element.classList.add("hidden"));
}

export const disableElement = (...elements: HTMLElement[]) => {
    elements.forEach(element => element.classList.add("disabled"));
}

export const enableElement = (...elements: HTMLElement[]) => {
    elements.forEach(element => element.classList.remove("disabled"));
}
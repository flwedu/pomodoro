export var revealElement = function (element) {
    element.classList.remove("hidden");
};
export var hideElement = function (element) {
    element.classList.add("hidden");
};
export var disableElement = function (element) {
    element.classList.add("disabled");
};
export var enableElement = function (element) {
    element.classList.remove("disabled");
};

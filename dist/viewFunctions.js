export var revealElement = function () {
    var elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
    }
    elements.forEach(function (element) { return element.classList.remove("hidden"); });
};
export var hideElement = function () {
    var elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
    }
    elements.forEach(function (element) { return element.classList.add("hidden"); });
};
export var disableElement = function () {
    var elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
    }
    elements.forEach(function (element) { return element.classList.add("disabled"); });
};
export var enableElement = function () {
    var elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
    }
    elements.forEach(function (element) { return element.classList.remove("disabled"); });
};

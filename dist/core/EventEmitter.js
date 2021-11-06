var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
export var EventEmitter = {
    events: new Map(),
    listen: function (topic, callback) {
        var oldEvents = EventEmitter.events.get(topic);
        if (EventEmitter.events.has(topic)) {
            EventEmitter.events.set(topic, __spreadArray(__spreadArray([], oldEvents, true), [callback], false));
        }
        return EventEmitter.events.set(topic, [callback]);
    },
    emit: function (topic, data) {
        var listeners = EventEmitter.events.get(topic);
        if (Array.isArray(listeners) && listeners.length) {
            listeners.forEach(function (event) { return event(data); });
        }
    },
};

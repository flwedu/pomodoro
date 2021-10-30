import Time from "./Time.js";
var Clock = /** @class */ (function () {
    function Clock(initialMinuts) {
        this._initialMinuts = initialMinuts;
        this._time = new Time(initialMinuts);
    }
    Clock.prototype.getTime = function () {
        var seconds = this._time.getSeconds();
        return Math.floor(seconds / 60) + ":" + seconds % 60;
    };
    Clock.prototype.getTimeinSeconds = function () {
        return this._time.getSeconds();
    };
    Clock.prototype.startClock = function () {
        this._time.startCounter();
    };
    Clock.prototype.pauseClock = function () {
        this._time.pauseCounter();
    };
    Clock.prototype.restartClock = function () {
        this.pauseClock();
        this._time = new Time(this._initialMinuts);
    };
    return Clock;
}());
export default Clock;

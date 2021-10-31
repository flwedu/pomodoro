var Clock = /** @class */ (function () {
    function Clock(initialMinuts) {
        var _this = this;
        this._counting = false;
        this._initialSeconds = initialMinuts * 60;
        this._seconds = this._initialSeconds;
        setInterval(function () {
            if (_this._counting)
                _this.reduceOneSecond();
        }, 1000);
    }
    Clock.prototype.getTimeIsCounting = function () {
        return this._counting;
    };
    Clock.prototype.getTime = function () {
        return Math.floor(this._seconds / 60) + ":" + this._seconds % 60;
    };
    Clock.prototype.getTimeinSeconds = function () {
        return this._seconds;
    };
    Clock.prototype.startClock = function () {
        this._counting = true;
    };
    Clock.prototype.pauseClock = function () {
        this._counting = false;
    };
    Clock.prototype.toggleCounting = function () {
        this._counting = !this._counting;
    };
    Clock.prototype.restartClock = function () {
        this.pauseClock();
        this._seconds = this._initialSeconds;
    };
    Clock.prototype.reduceOneSecond = function () {
        this._seconds--;
    };
    return Clock;
}());
export default Clock;

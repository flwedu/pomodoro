var Time = /** @class */ (function () {
    function Time(minutes) {
        var _this = this;
        this.seconds = 0;
        this.seconds = minutes * 60;
        this.counting = false;
        window.setInterval(function () {
            if (_this.counting) {
                _this.subtractSecond();
            }
        }, 1000);
    }
    Time.prototype.getMinuts = function () {
        return this.seconds / 60;
    };
    Time.prototype.getSeconds = function () {
        return this.seconds;
    };
    Time.prototype.startCounter = function () {
        this.counting = true;
    };
    Time.prototype.pauseCounter = function () {
        this.counting = false;
    };
    Time.prototype.addMinuts = function (minutes) {
        this.seconds += minutes * 60;
    };
    Time.prototype.subtractSecond = function () {
        this.seconds--;
    };
    return Time;
}());
export default Time;

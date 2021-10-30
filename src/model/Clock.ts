import Time from "./Time.js";

export default class Clock {

    private _time: Time;
    private _initialMinuts: number;

    constructor(initialMinuts: number) {
        this._initialMinuts = initialMinuts;
        this._time = new Time(initialMinuts);
    }

    getTime() {
        const seconds = this._time.getSeconds();
        return `${Math.floor(seconds / 60)}:${seconds % 60}`;
    }

    getTimeinSeconds() {
        return this._time.getSeconds();
    }

    startClock() {
        this._time.startCounter();
    }

    pauseClock() {
        this._time.pauseCounter();
    }

    restartClock() {
        this.pauseClock();
        this._time = new Time(this._initialMinuts);
    }
}
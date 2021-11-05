
export default class Clock {

    private _counting: boolean;
    private _initialSeconds: number;
    private _seconds: number;

    constructor(initialMinuts: number) {
        this._counting = false;
        this._initialSeconds = initialMinuts * 60;
        this._seconds = this._initialSeconds;

        setInterval(() => {
            if (this._counting) this.reduceOneSecond()
        }, 1000);

    }

    changeInitialMinuts(initialMinuts: number) {
        this._initialSeconds = initialMinuts * 60;
        this.restartClock();
    }

    getTimeIsCounting() {
        return this._counting;
    }

    getTime() {
        return `${Math.floor(this._seconds / 60)}:${this._seconds % 60}`;
    }

    getTimeinSeconds() {
        return this._seconds;
    }

    startClock() {
        this._counting = true;
    }

    pauseClock() {
        this._counting = false;
    }

    toggleCounting() {
        this._counting = !this._counting;
    }

    restartClock() {
        this.pauseClock();
        this._seconds = this._initialSeconds;
    }

    private reduceOneSecond() {
        this._seconds--;
    }
}
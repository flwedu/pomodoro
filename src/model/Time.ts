export default class Time {

    private seconds = 0;
    private counting: boolean;

    constructor(minutes: number) {
        this.seconds = minutes * 60;
        this.counting = false;

        window.setInterval(() => {
            if (this.counting) {
                this.subtractSecond()
            }
        }, 1000);
    }

    getMinuts() {
        return this.seconds / 60;
    }

    getSeconds() {
        return this.seconds;
    }

    startCounter() {
        this.counting = true;
    }

    pauseCounter() {
        this.counting = false;
    }

    addMinuts(minutes: number) {
        this.seconds += minutes * 60;
    }
    private subtractSecond() {
        this.seconds--;
    }
}
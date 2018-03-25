export default class Duration {
    constructor() {
        this(0, 0, 0);
    }

    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    get _isZero() {
        return this.hours == 0 &&
               this.minutes == 0 &&
               this.seconds == 0;
    }

    tick() {
        if (this._isZero) {
            throw new Error("Can't tick any more.");
        }
        
        var newHours = this.hours,
            newMinutes = this.minutes,
            newSeconds = this.seconds;

        if (this.seconds != 0) {
            newSeconds--;
        } else if (this.minutes != 0) {
            newSeconds = 59;
            newMinutes--;
        } else {
            newSeconds = 59;
            newMinutes = 59;
            newHours--;
        }

        return new Duration(
            newHours,
            newMinutes,
            newSeconds
        );
    }
}

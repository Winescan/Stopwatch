// https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
if (!String.prototype.padStart) {
    String.prototype.padStart = function padStart(targetLength,padString) {
        targetLength = targetLength>>0; //truncate if number or convert non-number to 0;
        padString = String((typeof padString !== 'undefined' ? padString : ' '));
        if (this.length > targetLength) {
            return String(this);
        }
        else {
            targetLength = targetLength-this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
            }
            return padString.slice(0,targetLength) + String(this);
        }
    };
}

export default class Duration {
    constructor(hours = 0, minutes = 0, seconds = 0) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
    
    format() {
        // HH:mm:ss
        return this.hours.toString().padStart(2, '0') + ':' +
               this.minutes.toString().padStart(2, '0') + ':' +
               this.seconds.toString().padStart(2, '0');
    }

    tick() {
        var newHours = this.hours,
            newMinutes = this.minutes,
            newSeconds = this.seconds;

        if (this.seconds != 59) {
            newSeconds++;
        } else if (this.minutes != 59) {
            newSeconds = 0;
            newMinutes++;
        } else {
            newSeconds = 0;
            newMinutes = 0;
            newHours++;
        }

        return new Duration(
            newHours,
            newMinutes,
            newSeconds
        );
    }
}

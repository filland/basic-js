module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const number = Math.pow(2, disksNumber) - 1;
    const turnsSpeedSeconds = turnsSpeed / 3600 ;
    return {
        turns: number,
        seconds: number / turnsSpeedSeconds
    };
}
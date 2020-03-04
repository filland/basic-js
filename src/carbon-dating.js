const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    parseFloat(sampleActivity) <= 0 ||
    parseFloat(sampleActivity) > MODERN_ACTIVITY ||
    typeof sampleActivity !== "string" ||
    sampleActivity === undefined ||
    Number.isNaN(sampleActivity) ||
      isNaN(parseFloat(sampleActivity))) {
    return false;
  }

  let k = 0.693 / HALF_LIFE_PERIOD;

  let value =  parseFloat(sampleActivity);

  return Math.ceil(Math.log((MODERN_ACTIVITY / value)) / k);
};
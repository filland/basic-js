module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let list = [];
    arr.forEach(element => {
      if (Array.isArray(element)) {
        list.push(this.calculateDepth(element));
      }
    });
    let value = list.sort((a, b) => b - a)[0];
    return value ? value + 1 : 1;
  }
};
let list = [];
const chainMaker = {

  getLength() {
    return list.length;
  },
  addLink(value) {
    if(value === undefined) {
      value = '( )';
    }
    if(typeof value === 'function') {
      value = new String(value);
      value = "function"+value.substring(9, value.length);
    }
    list.push(new String(value));
    return this;
  },
  removeLink(position) {
    if(typeof position !== 'number' || position % 1 != 0 || position <= 0 || position > list.length) {
      list = [];
      throw new Error();
    }
    list.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    list.reverse();
    return this;
  },
  finishChain() {
    let result = list.map(item => `( ${item} )~~`).join("");
    result = result.slice(0, result.length - 2);
    list = [];
    return result;
  }
};

module.exports = chainMaker;

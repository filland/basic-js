class VigenereCipheringMachine {
  constructor(notReverse = true) {
    this.notReverse = notReverse;
    this.a = "abcdefghijklmnopqrstuvwxyz".split("");
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error();
    }
    let keyArray = this.prepareKeyArray(message, key);

    let index = -1;
    let encryptedMessage = message
      .toLowerCase()
      .split("")
      .map(letter => {
        if (this.isLetter(letter)) {
          index++;
          return this.encryptLetter(letter, keyArray[index]);
        } else {
          return letter;
        }
      })
      .join("")
      .toUpperCase();

    return this.notReverse
      ? encryptedMessage
      : encryptedMessage
          .split("")
          .reverse()
          .join("");
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error();
    }

    encryptedMessage = encryptedMessage.toLowerCase();
    key = key.toLowerCase();

    let keyArray = this.prepareKeyArray(encryptedMessage, key);

    let index = -1;
    let message = encryptedMessage
      .split("")
      .map(item => {
        if (this.isLetter(item)) {
          index++;
          return this.decryptLetter(item, keyArray[index]);
        } else {
          return item;
        }
      })
      .join("")
      .toUpperCase();

    return this.notReverse
      ? message
      : message
          .split("")
          .reverse()
          .join("");
  }

  encryptLetter(letter, keyLetter) {
    let letterIndex = this.a.indexOf(letter);
    let keyLetterIndex = this.a.indexOf(keyLetter);
    let encryptLetterIndex = (letterIndex + keyLetterIndex) % this.a.length;
    return this.a[encryptLetterIndex];
  }

  decryptLetter(letter, keyLetter) {
    let letterIndex = this.a.indexOf(letter);
    let keyLetterIndex = this.a.indexOf(keyLetter);
    let decryptLetterIndex =
      keyLetterIndex > letterIndex
        ? letterIndex + this.a.length - keyLetterIndex
        : letterIndex - keyLetterIndex;
    return this.a[decryptLetterIndex];
  }

  prepareKeyArray(message, key) {
    let keyLength = key.length;
    let messageLength = message.length;
    return messageLength > keyLength
      ? new Array(Math.ceil(messageLength / keyLength))
          .fill(key.toLowerCase())
          .join("")
          .substring(0, messageLength - 1)
          .split("")
      : key.toLowerCase().split("");
  }

  isLetter(letter) {
    return new RegExp("[a-zA-Z]").test(letter);
  }
}

module.exports = VigenereCipheringMachine;

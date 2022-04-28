const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(check) {
    this.check = check;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  encrypt(word, key) {
    if (arguments.length < 2 || word === undefined || key === undefined)
      throw new Error("Incorrect arguments!");

    word = word.toUpperCase();
    key = key.toUpperCase();
    let res = "";
    let index = 0;
    for (let i = 0; i < word.length; i++) {
      if (word[i].charCodeAt() >= 65 && word[i].charCodeAt() <= 90) {
        const temp =
          (word[i].charCodeAt() + key[index % key.length].charCodeAt()) % 26;
        res += this.alphabet[temp];
        index++;
        continue;
      }
      res += word[i];
    }
    if (String(this.check) === "false") {
      return res.split("").reverse().join("");
    }
    return res;
  }
  decrypt(encryptedword, key) {
    if (encryptedword === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    encryptedword = encryptedword.toUpperCase();
    key = key.toUpperCase();
    let index = 0;
    let res = "";
    for (let i = 0; i < encryptedword.length; i++) {
      if (
        encryptedword[i].charCodeAt() >= 65 &&
        encryptedword[i].charCodeAt() <= 90
      ) {
        let temp =
          (encryptedword[i].charCodeAt() -
            key[index % key.length].charCodeAt() +
            26) %
          26;
        res += this.alphabet[temp];
        index++;
        continue;
      }
      res += encryptedword[i];
    }
    if (String(this.check) === "false") {
      return res.split("").reverse().join("");
    }
    return res;
  }
}

module.exports = {
  VigenereCipheringMachine,
};

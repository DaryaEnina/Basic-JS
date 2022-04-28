const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let option = {
    repeatTimes: options.repeatTimes || 1, // кол-во повторений
    separator: options.separator || "+", // разделитель
    addition: "addition" in options ? options.addition : "", // дополнение
    additionRepeatTimes: options.additionRepeatTimes || 1, // кол-во дополнений
    additionSeparator: options.additionSeparator || "|", // разделитель дополнений
  };

  let result = "";
  for (let i = 0; i < option.repeatTimes; i++) {
    result += str;
    for (let j = 0; j < option.additionRepeatTimes; j++) {
      result += option.addition;
      if (j < option.additionRepeatTimes - 1) {
        result += option.additionSeparator;
      }
    }
    if (i < option.repeatTimes - 1) {
      result += option.separator;
    }
  }
  return result;
}

module.exports = {
  repeater,
};

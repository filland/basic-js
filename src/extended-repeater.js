module.exports = function repeater(str, options) {    
    let separator = options.hasOwnProperty("separator") ? options.separator : '+';
    let additionSeparator = options.hasOwnProperty("additionSeparator") ? options.additionSeparator : '|';
    let addition =
        options.hasOwnProperty("additionRepeatTimes") ? 
            new Array(options.additionRepeatTimes)
                .fill(options.addition === null ? "null" : options.addition).join(additionSeparator) : "";
    return new Array(options.repeatTimes).fill(new String(str)).join(addition+separator)+addition;
};
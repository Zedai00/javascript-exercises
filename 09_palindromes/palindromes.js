const palindromes = function (str) {
  let word = str.toLowerCase()
  word = word.split("").filter((char) => /^[a-zA-Z0-9]+$/.test(char)).join("")
  let revWord = word.split("").reverse().join("")
  if (word === revWord) {
    return true
  } else {
    return false
  }
};

// Do not edit below this line
module.exports = palindromes;

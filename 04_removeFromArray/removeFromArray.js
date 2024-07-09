const removeFromArray = function (arr, ...args) {
  let results = arr.filter((elm) => {
    if (args.includes(elm)) {
      return false
    }
    return true
  })
  return results
};

// Do not edit below this line
module.exports = removeFromArray;

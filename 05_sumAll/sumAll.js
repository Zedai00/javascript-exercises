const sumAll = function (start, end) {
  if (start > end) {
    let temp = end
    end = start
    start = temp
  }
  if (!Number.isInteger(start) || !Number.isInteger(end) || !(start > 0 && end > 0)) {
    return "ERROR"
  }
  return (end / 2) * ((2 * start) + ((end - 1) * 1))
};

// Do not edit below this line
module.exports = sumAll;

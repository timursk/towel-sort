
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == undefined || matrix.length == 0) return [];
  let count = 0;
  let result = [];
  for (let subArr of matrix) {
    count++;
    if (count % 2 == 1) result.push(...subArr);
    if (count % 2 == 0) {
      result.push(...subArr.reverse());
    }
  }
  return result;
}

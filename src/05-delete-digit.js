/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const result = [];
  const num = n.toString();
  for (let i = 0; i < num.length; i++) {
    const arr = num.split('');
    arr.splice(arr.indexOf(num[i]), 1);
    result.push(+arr.join(''));
  }
  return (result.sort((a, b) => b - a)[0]);
}

module.exports = deleteDigit;

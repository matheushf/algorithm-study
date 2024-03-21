/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const countMap = {};
  const maxRepeated = 2;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    countMap[value] = (countMap[value] || 0) + 1;

    if (countMap[value] > maxRepeated) {
      nums[i] = "-";
    } else {
      count++;
    }
  }

  nums.sort((a, b) => (typeof a === "string" ? 1 : -1)).sort((a, b) => a - b);

  return count;
};

const input = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log(removeDuplicates(input));

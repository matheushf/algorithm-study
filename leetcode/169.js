/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const countMap = {};
  let bigger = -Infinity;
  let majorityN = 0;

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    countMap[value] = (countMap[value] || 0) + 1;

    if (countMap[value] / 2 > bigger) {
      majorityN = value;
      bigger = countMap[value] / 2;
    }
  }

  return majorityN;
};

// const nums = [2, 2, 1, 1, 1, 2, 2];
// const nums = [3, 2, 3];
// const nums = [6, 5, 5];
// const nums = [8, 8, 7, 7, 7];
const nums = [3, 3, 4];
console.log(majorityElement(nums));

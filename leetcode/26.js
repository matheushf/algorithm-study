/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0;

  nums.forEach((value, index) => {
    if (value !== nums[i]) nums[++i] = value;
  });

  return ++i;
};

const input = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// const input = [1, 1, 2];
console.log(removeDuplicates(input));

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if (nums.length === 1) return true;

  let canFinish = true;

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    const lastValue = nums[i - 1];
    const lastIndex = nums.length;

    console.log("dentro ", value);

    canFinish = value + 1 >=
  }

  return canFinish;
};

//const input = [2, 3, 1, 1, 4];
//const input = [3, 2, 1, 0, 4];
//const input = [2, 0];
const input = [2, 0, 0];
console.log(canJump(input));

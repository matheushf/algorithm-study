/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const length = nums.length;

  nums.unshift(...nums.splice(length - k));
  return nums;
};

const nums1 = [1, 2, 3, 4, 5, 6, 7];
const k1 = 3;
const nums = [-1, -100, 3, 99];
const k = 2;
console.log(rotate(nums1, k1));

console.log(rotate(nums, k));

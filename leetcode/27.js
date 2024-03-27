/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0;

  nums.forEach((num, index) => {
    if (num === val) nums[index] = "-";
    else i++;
  });

  nums.sort((a, b) => (typeof a === "string" ? 1 : -1));

  console.log(nums);

  return i;
};

console.log(removeElement([3, 2, 2, 3], 3));

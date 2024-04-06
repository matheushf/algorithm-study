function maxSubarraySum(array, nElements) {
  if (array.length < nElements) return null;

  let i = 0;
  let j = 0;
  let count = 0;
  let max = 0;
  let currentSum = 0;

  while (i <= array.length - nElements) {
    console.log("antes", i, j);
    currentSum += array[j];
    j++;
    count++;

    console.log("depois", currentSum, max);

    if (count === nElements) {
      console.log("dentro", i, j);
      max = Math.max(max, currentSum);
      currentSum = 0;
      count = 0;
      i++;
      j = i;
    }
  }

  return max;
}

console.log(maxSubarraySum([1, 2, 3], 3));

// receives an array and an number
// sums the consecutive positions of the array by the amount of the number
// returns the max sum
// ([1, 2, 3], 2) => 5
// ([10, 20, 40], 2) => 60
// returns null if the number is bigger than the array length

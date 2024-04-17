function minSubArrayLen(array, n) {
  let sum = 0;
  let i = 0;
  let j = 0;
  let count = 0;

  while (i < array.length) {
    if (array[i] >= n) return 1;

    sum += array[j];
    i++;
    j++;
    count++;

    if (sum >= n) {
      return count;
    }
  }
}

// in the array, finds the sub array in which the sum is equal or greater than the number provided
// ([2,3,1,2,4,3], 7) => [4, 3] equals 7, so it returns 2
// ([1, 2, 5, 5, 10], 10) => [10] equals 10, so it returns 1
// ([10, 11, 10, 10, 10], 30) => [10, 10, 10] equals 30, so it returns 3
// ([10, 11, 10, 10, 10], 300) => [] nothing equal or greater, so it returns 0

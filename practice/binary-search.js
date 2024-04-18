function binarySearch(array = [], n) {
  let leftRange = 0;
  let rightRange = array.length - 1;

  while (leftRange <= rightRange) {
    let middle = Math.floor((leftRange + rightRange) / 2);
    const currentN = array[middle];

    if (currentN === n) return middle;
    if (currentN < n) leftRange = middle + 1;
    else rightRange = middle - 1;
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 4));

// look in the middle, check if it's to the right or left, split again

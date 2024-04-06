function areThereDuplicates(...args) {
  const array = Array.from(args);
  let i = 0;
  let j = array.length - 1;
  let exists = false;

  while (i <= array.length || exists) {
    if (i === j) return false;

    if (array[i] === array[j]) {
      return true;
    } else {
      j--;
    }

    if (j === 0 || j === i) {
      j = array.length - 1;
      i++;
    }
  }

  return exists;
}

console.log(areThereDuplicates("a", "c", "b", "c"));

// [1, 2, 3] => false
// [1, 2, 2] => true
// ['a', 'a', 'b'] => true
// check for duplicates in the array, it can be number or string
// you should use the multiple pointers strategy

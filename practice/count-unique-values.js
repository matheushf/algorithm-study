function countUniqueValues(array) {
  const count = {};

  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    count[num] = true;
  }

  return Object.keys(count).length;
}

function countUniqueValues2(array) {
  let i = 0;

  for (let j = 0; j < array.length; j++) {
    if (array[i] !== array[j]) i++;
  }

  return i;
}

// counts the uniques
// [1, 2, 2, 4] => 3
// [1, 1, 2, 4, 4, 5, 5] => 4
// returns the amount

const input = [1, 2, 2, 4, 4, 5, 6];
console.log(countUniqueValues2(input));

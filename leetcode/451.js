/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const frequencies = {};

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    frequencies[letter] = (frequencies[letter] || 0) + 1;
  }

  const sortedObj = Object.keys(frequencies).sort(
    (a, b) => frequencies[b] - frequencies[a],
  );

  let str = "";
  sortedObj.forEach((value) => {
    str = `${str}${value.repeat(frequencies[value])}`;
  });

  return str;
};

console.log(frequencySort("tree"));

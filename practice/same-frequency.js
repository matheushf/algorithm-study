function sameFrequency(x, y) {
  const num1 = x.toString();
  const num2 = y.toString();

  if (num1.length !== num2.length) return false;

  const count1 = {};
  const count2 = {};

  for (let i = 0; i < num1.length; i++) {
    count1[num1[i]] = (count1[num1[i]] || 0) + 1;
    count2[num2[i]] = (count2[num2[i]] || 0) + 1;
  }

  for (let i = 0; i < num1.length; i++) {
    if (count1[num1[i]] !== count2[num1[i]]) return false;
  }

  return true;
}

console.log(sameFrequency(18, 28));

// 182,281 -> true
// 18, 77 -> false
// Returns frequencies on two vars
// Loop and count both, then compare

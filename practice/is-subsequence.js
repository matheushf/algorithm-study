function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  const matchs = str1;
  const test = new Set(str1);

  while (i <= str1.length) {
    if (str1[i] === str2[j]) {
      i++;
      j++;
    } else {
      j++;
    }

    console.log(i, j, str1.length);

    if (i >= str1.length) return true;
    if (j > str2.length) return false;
  }

  return false;
}

console.log(isSubsequence("hello", "hellaaswo"));

// ('abc', 'abrac') => true
// ('abc', 'acb') => false
// ('hello', 'hellow world') => true
// - it needs to form a sequence on the other string
// - without changing the order
// - it can repeat the letter
// loop the second string, incrementing i++ if a letter is matched

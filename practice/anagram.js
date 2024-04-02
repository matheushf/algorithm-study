function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const chars1 = {};
  const chars2 = {};

  for (let i = 0; i < str1.length; i++) {
    const char1 = str1[i];
    const char2 = str2[i];

    chars1[char1] = (chars1[char1] || 0) + 1;
    chars2[char2] = (chars2[char2] || 0) + 1;
  }

  for (let i = 0; i < str1.length; i++) {
    if (chars1[str1[i]] !== chars2[str1[i]]) return false;
  }

  return true;
}

console.log(validAnagram("aazz", "zaaz"));

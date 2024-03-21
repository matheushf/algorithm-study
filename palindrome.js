function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;

  return isPalindrome(str.slice(1, str.length - 1));
}

// console.log(isPalindrome("HANNAH"));

console.log("abel" > "abil");
console.log("a" > "b");

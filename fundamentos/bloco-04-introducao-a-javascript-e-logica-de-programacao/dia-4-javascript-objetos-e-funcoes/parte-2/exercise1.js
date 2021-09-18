function isPalindrome(word) {
  let reverse = word.split("").reverse().join("");

  if (word === reverse) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("arara"));
console.log(isPalindrome("desenvolvimento"));

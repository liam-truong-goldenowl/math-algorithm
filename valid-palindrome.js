function isPalindrome(s) {
  const onlyAlphanumericString = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  const reversedString = onlyAlphanumericString.split("").reverse().join("");
  return onlyAlphanumericString === reversedString;
}

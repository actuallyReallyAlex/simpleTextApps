/**
 * checkIfPalindrome
 * @param str {String}
 * Checks if the string entered by the user is a palindrome. That is that it reads the same forwards as backwards like “racecar”.
 */
const checkIfPalindrome = (str: string) =>
  str.toLowerCase() ===
  str
    .toLowerCase()
    .split("")
    .reverse()
    .join("");

export default checkIfPalindrome;

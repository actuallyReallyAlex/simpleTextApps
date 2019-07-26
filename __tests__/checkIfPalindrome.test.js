import { checkIfPalindrome } from "../lib/index";

describe("simpleTextApps.checkIfPalindrome()", () => {
  it("Should return true if input is a palindrome.", () => {
    expect(checkIfPalindrome("racecar")).toBe(true);
  });
  it("Should return false if input is not a palindrome.", () => {
    expect(checkIfPalindrome("alex")).toBe(false);
  });
});

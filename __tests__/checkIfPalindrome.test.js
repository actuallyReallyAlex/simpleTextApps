import simpleTextApps from "../lib/index";

describe("simpleTextApps.checkIfPalindrome()", () => {
  it("Should return true if input is a palindrome.", () => {
    expect(simpleTextApps.prototype.checkIfPalindrome("racecar")).toBe(true);
  });
  it("Should return false if input is not a palindrome.", () => {
    expect(simpleTextApps.prototype.checkIfPalindrome("alex")).toBe(false);
  });
});

import simpleTextApps from "../lib/index";

describe("simpleTextApps.countVowels()", () => {
  it("Should output a counted report of the number of vowels in the input.", () => {
    expect(simpleTextApps.prototype.countVowels("Alex is a good dev.")).toEqual({
      a: 2,
      e: 2,
      i: 1,
      o: 2,
      u: 0,
      y: 0
    });
  });
});

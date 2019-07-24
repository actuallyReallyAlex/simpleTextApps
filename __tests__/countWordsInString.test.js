import simpleTextApps from "../lib/index";

describe("simpleTextApps.countWordsInString()", () => {
  it("Should count the number of words in the input string.", () => {
    expect(simpleTextApps.prototype.countWordsInString("Alex is a good dev.")).toBe(5);
  });
});

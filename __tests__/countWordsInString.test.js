import { countWordsInString } from "../lib/index";

describe("simpleTextApps.countWordsInString()", () => {
  it("Should count the number of words in the input string.", () => {
    expect(countWordsInString("Alex is a good dev.")).toBe(5);
  });
});

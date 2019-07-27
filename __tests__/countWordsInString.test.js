import { countWordsInString } from "../lib/index";

describe("simpleTextApps.countWordsInString()", () => {
  it("Should count the number of words in the input string.", () => {
    expect(countWordsInString("Alex is a good dev. Tom is a bad dev.")).toEqual({
      a: 2,
      Alex: 1,
      bad: 1,
      dev: 2,
      good: 1,
      is: 2,
      Tom: 1
    });
  });
});

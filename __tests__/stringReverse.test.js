import simpleTextApps from "../lib/index";

describe("simpleTextApps.stringReverse()", () => {
  it("Should output the input, only reversed.", () => {
    expect(simpleTextApps.prototype.stringReverse("Alex")).toBe("xelA");
  });
  it("Should be able to handle multiple words in the string.", () => {
    expect(simpleTextApps.prototype.stringReverse("Alex is cool")).toBe("looc si xelA");
  });
});

import simpleTextApps from "../lib/index";

describe("simpleTextApps.pigLatin()", () => {
  it("Should output the input, only translated into Pig Latin.", () => {
    expect(simpleTextApps.prototype.pigLatin("Banana")).toBe("Ananabay");
    expect(simpleTextApps.prototype.pigLatin("Hello")).toBe("Ellohay");
    expect(simpleTextApps.prototype.pigLatin("Please")).toBe("Leasepay");
    expect(simpleTextApps.prototype.pigLatin("What time is it?")).toBe("Hatway imetay ishay ithay?");
    expect(simpleTextApps.prototype.pigLatin("How is the weather?")).toBe("Owhay ishay hetay eatherway?");
    expect(simpleTextApps.prototype.pigLatin("How are you")).toBe("Owhay arehay ouyay?");
    expect(simpleTextApps.prototype.pigLatin("What is your name?")).toBe("Hatway ishay ouryay amenay?");
    expect(simpleTextApps.prototype.pigLatin("Thank you")).toBe("Hanktay ouyay");
    expect(simpleTextApps.prototype.pigLatin("You are welcome")).toBe("Ouyay arehay elcomeway");
    expect(simpleTextApps.prototype.pigLatin("Good night")).toBe("Oodgay ightnay");
    expect(simpleTextApps.prototype.pigLatin("Who is that?")).toBe("Howay ishay hattay?");
    expect(simpleTextApps.prototype.pigLatin("Where are you going?")).toBe("Hereway arehay ouyay oinggay?");
    expect(simpleTextApps.prototype.pigLatin("I don't want to")).toBe("Ihay on'tday antway otay");
    expect(simpleTextApps.prototype.pigLatin("Do you understand?")).toBe("Oday ouyay underway tandsay?");
  });
});

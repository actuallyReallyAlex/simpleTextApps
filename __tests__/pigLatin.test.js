import { pigLatin } from "../lib/index";

describe("simpleTextApps.pigLatin()", () => {
  it("Should output the input, only translated into Pig Latin.", () => {
    expect(pigLatin("Banana")).toBe("Ananabay");
    expect(pigLatin("Hello")).toBe("Ellohay");
    expect(pigLatin("Please")).toBe("Leasepay");
    expect(pigLatin("What time is it?")).toBe("Hatway imetay ishay ithay?");
    expect(pigLatin("How is the weather?")).toBe("Owhay ishay hetay eatherway?");
    expect(pigLatin("How are you?")).toBe("Owhay arehay ouyay?");
    expect(pigLatin("What is your name?")).toBe("Hatway ishay ouryay amenay?");
    expect(pigLatin("Thank you")).toBe("Hanktay ouyay");
    expect(pigLatin("You are welcome")).toBe("Ouyay arehay elcomeway");
    expect(pigLatin("Good night")).toBe("Oodgay ightnay");
    expect(pigLatin("Who is that?")).toBe("Howay ishay hattay?");
    expect(pigLatin("Where are you going?")).toBe("Hereway arehay ouyay oinggay?");
    expect(pigLatin("I don't want to")).toBe("Ihay on'tday antway otay");
    expect(pigLatin("Do you understand?")).toBe("Oday ouyay understandhay?");
  });
});

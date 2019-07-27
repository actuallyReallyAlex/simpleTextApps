/**
 * countVowels
 * @param str {String}
 * Enter a string and the program counts the number of vowels in the text. For added complexity have it report a sum of each vowel found.
 */
const countVowels = (str: string) => {
  const arr: Array<string> = str.split("");
  const counts: { [index: string]: number } = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0
  };

  arr.forEach((letter: string) => {
    const lowercaseLetter: string = letter.toLowerCase();
    if (counts.hasOwnProperty(lowercaseLetter)) {
      counts[lowercaseLetter] = counts[lowercaseLetter] + 1;
    }
  });

  return counts;
};

export default countVowels;

/**
 * stringReverse
 * @param str {String}
 * Enter a string and the program will reverse it and print it out.
 */
const stringReverse = (str: string) => {
  return str
    .split("")
    .reverse()
    .join()
    .replace(/,/g, "");
};

/**
 * Capitalizes the first letter of a word.
 * @param word {String}
 */
const capitalizeWord = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

/**
 * Makes the first letter of a word lowercase.
 * @param word {String}
 */
const unCapitalizeWord = (word: string) => {
  return word.charAt(0).toLowerCase() + word.slice(1);
};

const vowels = ["a", "e", "i", "o", "u"];

/**
 * Gets the section of a word that comes before the first vowel in that word.
 * @param word {String}
 */
const getBeforeFirstVowelOfWord = (word: string) => {
  const firstVowelIndex = word
    .split("")
    .findIndex(letter => vowels.indexOf(letter) > -1);

  return word.slice(
    0,
    firstVowelIndex > 1 ? firstVowelIndex - 1 : firstVowelIndex
  );
};

/**
 * Combines parts of a pig latin string into a final word.
 * @param firstVowelIndex {Number}
 * @param word {String}
 * @param wordContainsPunctuation Array | Null
 */
const combinePigLatinParts = (
  firstVowelIndex: number,
  word: string,
  wordContainsPunctuation: Array<string> | null
) => {
  let prefix;
  let root = unCapitalizeWord(getBeforeFirstVowelOfWord(word));
  let suffix = "ay";
  const punctuationIndex = wordContainsPunctuation
    ? word.indexOf(wordContainsPunctuation[0])
    : 0;
  let fixedIndex = punctuationIndex;

  if (firstVowelIndex > 1) {
    if (wordContainsPunctuation)
      punctuationIndex === word.length - 1
        ? (fixedIndex -= 1)
        : (fixedIndex += 1);
    prefix = capitalizeWord(word.slice(firstVowelIndex - 1, word.length));
  } else if (firstVowelIndex === 0) {
    prefix = capitalizeWord(word.slice(0, word.length));
    root = "";
    suffix = "hay";
  } else {
    if (wordContainsPunctuation)
      punctuationIndex === word.length - 1
        ? (fixedIndex -= 1)
        : (fixedIndex += 1);
    prefix = capitalizeWord(word.slice(firstVowelIndex, word.length));
  }

  if (wordContainsPunctuation) {
    return (
      prefix.slice(0, fixedIndex) +
      root +
      suffix +
      (punctuationIndex === word.length - 1 ? word[punctuationIndex] : "")
    );
  } else {
    return prefix + root + suffix;
  }
};

/**
 * Translates a single word from English to Pig Latin.
 * @param str {String}
 */
const pigLatinSingleWord = (str: string) => {
  const firstVowelIndex = str
    .split("")
    .findIndex(letter => vowels.indexOf(letter.toLowerCase()) > -1);
  const wordContainsPunctuation = str.match(/['.!?\\-]/g);
  const translated = combinePigLatinParts(
    firstVowelIndex,
    str,
    wordContainsPunctuation
  );

  return translated;
};

/**
 * pigLatin
 * @param str {String}
 * Pig Latin is a game of alterations played on the English language game. To create the Pig Latin form of an English word the initial consonant sound is transposed to the end of the word and an ay is affixed (Ex.: "banana" would yield anana-bay). Read Wikipedia for more information on rules.
 */
const pigLatin = (str: string) => {
  const splitIntoWords = str.split(" ");
  const pigLatinitized = splitIntoWords.map((word, index) => {
    return index > 0
      ? unCapitalizeWord(pigLatinSingleWord(word))
      : pigLatinSingleWord(word);
  });

  return pigLatinitized.join(" ");
};

/**
 * countVowels
 * @param str {String}
 * Enter a string and the program counts the number of vowels in the text. For added complexity have it report a sum of each vowel found.
 */
const countVowels = (str: string) => {
  // TODO: This is a good spot to use Array.reduce I think...

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

module.exports = {
  countVowels,
  pigLatin,
  stringReverse
};

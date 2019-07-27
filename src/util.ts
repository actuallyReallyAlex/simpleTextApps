/**
 * Capitalizes the first letter of a word.
 * @param word {String}
 */
export const capitalizeWord = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

/**
 * Makes the first letter of a word lowercase.
 * @param word {String}
 */
export const unCapitalizeWord = (word: string) => {
  return word.charAt(0).toLowerCase() + word.slice(1);
};

export const vowels = ["a", "e", "i", "o", "u"];

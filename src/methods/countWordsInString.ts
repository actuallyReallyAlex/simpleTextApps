const countWordsInString = (str: string) => {
  const splitUp: Array<string> = str.replace(/\./g, "").split(" ");
  const counts: { [index: string]: number } = {};

  splitUp.forEach((word: string) => {
    if (counts.hasOwnProperty(word)) {
      counts[word]++;
    } else {
      counts[word] = 1;
    }
  });

  return counts;
};

export default countWordsInString;

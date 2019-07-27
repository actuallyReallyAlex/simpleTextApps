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

export default stringReverse;

/**
 * Converts English words in a string into i18n-style abbreviations.
 *
 * For example:
 * - "developer" → "d7r"
 * - "internationalization" → "i18n"
 * - "Hello world!" → "H3o w3d!"
 *
 * This function automatically detects English words using `/[A-Za-z]+/g`,
 * abbreviates each word individually, and preserves all punctuation and
 * non-English characters.
 *
 * Rules:
 * - Words with length <= 2 are returned unchanged.
 * - Abbreviation format: firstLetter + (wordLength - 2) + lastLetter
 *
 * @param input - A word or a full sentence to abbreviate.
 * @returns The abbreviated string.
 *
 * @example
 * i18n("developer");
 * // "d7r"
 *
 * @example
 * i18n("Hello world!");
 * // "H3o w3d!"
 */
export default function i18n(input: string): string {
  return input.replace(/[A-Za-z]+/g, (word) => {
    if (word.length <= 2) return word;

    const begin = word[0];
    const end = word[word.length - 1];
    const middle = word.length - 2;

    return `${begin}${middle}${end}`;
  });
}

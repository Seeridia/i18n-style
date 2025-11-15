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
export interface I18nOptions {
  /** Minimum length that triggers abbreviation. Defaults to 3. */
  minWordLength?: number;
  /** Explicit words or patterns to leave untouched. */
  skipWords?: Array<string | RegExp>;
  /** Custom check to decide whether a word should be skipped. */
  shouldSkip?: (word: string) => boolean;
}

function shouldSkipWord(word: string, options?: I18nOptions): boolean {
  if (!options) return false;

  if (options.skipWords) {
    for (const matcher of options.skipWords) {
      if (typeof matcher === "string" && matcher === word) return true;
      if (matcher instanceof RegExp && matcher.test(word)) return true;
    }
  }

  if (options.shouldSkip && options.shouldSkip(word)) {
    return true;
  }

  return false;
}

export default function i18n(input: string, options?: I18nOptions): string {
  const minWordLength = options?.minWordLength ?? 3;

  return input.replace(/[A-Za-z]+/g, (word) => {
    if (word.length < minWordLength) return word;
    if (shouldSkipWord(word, options)) return word;

    const begin = word[0];
    const end = word[word.length - 1];
    const middle = word.length - 2;

    return `${begin}${middle}${end}`;
  });
}

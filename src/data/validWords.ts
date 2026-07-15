import words from "an-array-of-english-words";

export const VALID_WORD_SET = new Set(
  words
    .filter((w) => w.length === 5)
    .map((w) => w.toLowerCase())
);
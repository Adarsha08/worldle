import words from "an-array-of-english-words";



export const VALID_WORD_SET = new Set(
  words
    .filter((w) => w.length === 5)
    .map((w) => w.toLowerCase())
);
// export const VALID_WORDS: readonly string[] = [
//   "about",
//   "other",
//   "which",
//   "their",
//   "would",
//   "there",
//   "could",
//   "first",
//   "after",
//   "these",
//   "react",
//   "state",
//   "props",
//   "hooks",
//   "event",
//   "style",
//   "class",
//   "mount",
//   "render",
//   "scope",
//   // Add more 5-letter words...
// ] as const;
 
export const TARGET_WORDS: readonly string[] = [
  "react",
  "state",
  "props",
  "hooks",
  "event",
  "style",
  "class",
  "mount",
  "scope",
  "array",
  "async",
  "await",
  "break",
  "catch",
  "const",
  "debug",
  "error",
  "false",
  "fetch",
  // Add more target words...
] as const;
 

export type TargetWord = (typeof TARGET_WORDS)[number];
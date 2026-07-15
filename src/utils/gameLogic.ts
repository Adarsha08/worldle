import { VALID_WORD_SET } from "../data/validWords";
import {
  type ValidWord,
  TARGET_WORDS,
  type TargetWord,
} from "../data/wordlist";
import { TileState, type GameGuess } from "../types/game";

export const randomWord = () => {
  const randomIndex = Math.floor(Math.random() * TARGET_WORDS.length);
  return TARGET_WORDS[randomIndex].toLowerCase();
};

//this is for checking the valid word or not
export const isValidWord = (word: string): boolean => {
  return VALID_WORD_SET.has(word.toLowerCase());
};

export const checkGuess = (guess: string, targetWord: string): TileState[] => {
  const result: TileState[] = []; //fro the result storing
  const guessArray = guess.toLowerCase().split(""); //the user guess word
  const targetArray = targetWord.toLowerCase().split(""); //the random word created
  const targetLetterCount: Record<string, number> = {};

  //so here if the letter is not inside the {} then the value will be undefined and add 1 so if the value is inside then the value will be +1
  targetArray.forEach((letter) => {
    targetLetterCount[letter] = (targetLetterCount[letter] || 0) + 1;
  });

  guessArray.forEach((letter, index) => {
      if(!targetLetterCount[letter])  {
      result[index] = TileState.ABSENT;
      return
    }
    if (letter === targetArray[index]) {
      result[index] = TileState.CORRECT;
      return;
    } 
     if (targetLetterCount[letter] > 0) {
      result[index] = TileState.PRESENT;
      return;
    } 
  });

  return result;
};

export const createGameGuess = (
  word: string,
  states: TileState[],
): GameGuess => {
  return { word, states };
};

export const isGameWon = (guess: string, targetWord: string): boolean => {
  return guess.toLowerCase() === targetWord.toLowerCase();
};

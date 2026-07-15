import { useCallback, useEffect, useState } from "react";
import { GameState, type GameConfig, type GameGuess } from "../types/game";
import {
  checkGuess,
  createGameGuess,
  isGameWon,
  isValidWord,
  randomWord,
} from "../utils/gameLogic";
import { GAME_CONFIG } from "../utils/constant";
import { TARGET_WORDS } from "../data/wordlist";
import { ToastContainer, toast } from 'react-toastify';

interface UseWordleReturn {
  targetWord: string;
  newGame: () => void;
  removeLetter: () => void;
  addLetter: (letter: string) => void;
  submitGuess: () => void;
  getModalMessage: () => string;
  guesses: GameGuess[];
  currentGuess: string;
  gameState: GameState;
  error: string;
  isRevealing: boolean;
}

export const useWordle = (): UseWordleReturn => {
  const [targetWord, setTargetWord] = useState<string>("");
  const [guesses, setGuesses] = useState<GameGuess[]>([]);
  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [gameState, setGameState] = useState<GameState>(GameState.PLAYING);
  const [error, setError] = useState<string>("");
  const [isRevealing, setIsRevealing] = useState<boolean>(false);

  //when the webiste mount
  useEffect(() => {
    newGame();
  }, []);

  const newGame = useCallback(() => {

     const word = randomWord();

  console.log("Target Word:", word);
  setTargetWord(word);
    setGuesses([]);
    setCurrentGuess("");
    setGameState(GameState.PLAYING);
    setError("");
    setIsRevealing(false);
  }, []);

  //here we will take the leeter one by one upto the max length and put it in the setcurrentGuess
  const addLetter = useCallback(
    (letter: string) => {
      if (
        currentGuess.length < GAME_CONFIG.WORD_LENGTH &&
        gameState === GameState.PLAYING
      ) {
        setCurrentGuess((prev) => prev + letter.toLowerCase());
      }
    },
    [currentGuess.length, gameState],
  );

  //function for removing the letter
  const removeLetter = useCallback(() => {
    setCurrentGuess((prev) => prev.slice(0, -1));
  }, []);

  //for submitting the guess meaning when the user clicks the enter it validate check update  check win or lose or reset the game
  const submitGuess = useCallback(() => {
  if (isRevealing) return;

  // Check word length
  if (currentGuess.length !== GAME_CONFIG.WORD_LENGTH) {
    toast("Word must be 5 letters long");
    return;
  }

  // Check valid word
  if (!isValidWord(currentGuess)) {
    toast("Not a valid word");
    return;
  }

  setIsRevealing(true);
  setError("");

  setTimeout(() => {
    const guessStates = checkGuess(currentGuess, targetWord);
    const newGuess = createGameGuess(currentGuess, guessStates);

    console.log("Current Guess:", currentGuess);
    console.log(
      "Is Won:",
      isGameWon(currentGuess, targetWord)
    );

    // Add guess
    setGuesses((prev) => [...prev, newGuess]);

    // Check game result
    if (isGameWon(currentGuess, targetWord)) {
      setGameState(GameState.WON);
    } 
    else if (guesses.length + 1 >= GAME_CONFIG.MAX_ATTEMPTS) {
      setGameState(GameState.LOST);
    }

    setCurrentGuess("");
    setIsRevealing(false);

  }, 1000);

}, [
  currentGuess,
  targetWord,
  isRevealing,
  guesses.length
]);

 const getModalMessage = (): string => {
  if (gameState === GameState.WON) {
    return "Congratulations!";
  }

  if (gameState === GameState.LOST) {
    return `The correct word was ${targetWord}`;
  }

  return "";
};

  return {
    targetWord,
    addLetter,
    newGame,
    removeLetter,
    getModalMessage,
    currentGuess,
    error,
    gameState,
    guesses,
    isRevealing,
    submitGuess,
  };
};

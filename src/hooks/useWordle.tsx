import { useCallback, useState } from "react";
import { GameState, type GameConfig, type GameGuess } from "../types/game";
import {randomWord} from '../utils/gameLogic'

interface UseWordleReturn {
  targetWord: string;
  newGame: () => void;
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

  const newGame = () => {
    setTargetWord(randomWord());
    setGuesses([])
    setCurrentGuess("")
    setGameState(GameState.PLAYING)
    setError("")
    setIsRevealing(false)
  };
  

  return {
    targetWord,
    newGame,
    currentGuess,
    error,
    gameState,
    guesses,
    isRevealing,
  };
};

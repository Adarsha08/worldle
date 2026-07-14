import { useState } from "react";
import type { GameConfig } from "../types/game";

interface UseWordleReturn {
  targetWord: string;
  newGame: () => void;
}

export const useWordle = (): UseWordleReturn => {
  const [targetWord, setTargetWord] = useState<string>("");

  const newGame = () => {
    setTargetWord("");

  };

  return {
    targetWord,
    newGame,

  };
};
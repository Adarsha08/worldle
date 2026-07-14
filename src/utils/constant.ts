import  type { GameConfig } from "../types/game";
 
export const GAME_CONFIG: GameConfig = {
  WORD_LENGTH: 5,
  MAX_ATTEMPTS: 6,
  KEYBOARD_ROWS: [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACKSPACE"],
  ],
};
 
export const ANIMATION_DURATION = 300;
export const FLIP_ANIMATION_DELAY = 100;
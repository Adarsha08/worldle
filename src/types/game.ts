export enum TileState{
    EMPTY="empty",
    FILLED="filled",
    CORRECT="correct",
    PRESENT="present",
    ABSENT='absent'
}
export enum KeyState{
    UNUSED="unused",
    PRESENT="present",
    CORRECT="correct",
    ABSENT="absent"
}
export enum GameState {
  PLAYING = "playing",
  WON = "won",
  LOST = "lost",
}

export interface GameGuess {
  word: string;
  states: TileState[];
}
 
export interface KeyboardKey {
  key: string;
  state: KeyState;
}

export interface GameConfig {
  WORD_LENGTH: number;
  MAX_ATTEMPTS: number;
  KEYBOARD_ROWS: string[][];
}

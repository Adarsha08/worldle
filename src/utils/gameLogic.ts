import {  type ValidWord,TARGET_WORDS , type TargetWord, type VALID_WORDS} from "../data/wordlist";
import type { TileState,GameGuess } from "../types/game";

export const randomWord=()=>{
    const randomIndex = Math.floor(Math.random() * TARGET_WORDS.length);
    return TARGET_WORDS[randomIndex].toLowerCase
}

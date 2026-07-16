import React, { type JSX } from 'react';
import Tile from '../Tile/Tile';
import styles from './Board.module.css';

import { TileState, type GameGuess } from '../../types/game';
import { FLIP_ANIMATION_DELAY, GAME_CONFIG } from '../../utils/constant';
 
interface BoardProps {
  guesses: GameGuess[];
  currentGuess: string;
  currentAttempt: number;
  isRevealing: boolean;
}
 
const Board: React.FC<BoardProps> = ({
  guesses,
  currentGuess,
  currentAttempt,
  isRevealing
}) => {
  const createRow = (guess: GameGuess | string, rowIndex: number) => {
   
    const tiles: JSX.Element[] = [];
    const maxLength = GAME_CONFIG.WORD_LENGTH;
 
    for (let i = 0; i < maxLength; i++) {
      let letter = '';
      let state = TileState.EMPTY;
 
      if (typeof guess === 'string') {
        // Current guess row
        letter = guess[i] || '';
        state = letter ? TileState.FILLED : TileState.EMPTY;
      } else {
        
        letter = guess.word[i] || '';
        state = guess.states[i] || TileState.EMPTY;
      }
 
      tiles.push(
        <Tile
          key={`${rowIndex}-${i}`}
          letter={letter}
          state={state}
          delay={isRevealing ? i * FLIP_ANIMATION_DELAY : 0}
          isRevealing={isRevealing && rowIndex === currentAttempt}
        />
      );
    }
 
    return (
      <div key={rowIndex} className={styles.row}>
        {tiles}
      </div>
    );
  };
 
  const renderBoard = (): JSX.Element[] => {
    const rows: JSX.Element[] = [];
 
    //once it runs for the guess word 
    guesses.forEach((guess, index) => {
      rows.push(createRow(guess, index));
    });
 
    //run the words again until the row is maxed 
    if (guesses.length < GAME_CONFIG.MAX_ATTEMPTS) {
      rows.push(createRow(currentGuess, guesses.length));
    }
 
    //it is like a skelton design for showing the empty rows 
    for (let i = guesses.length + 1; i < GAME_CONFIG.MAX_ATTEMPTS; i++) {
      rows.push(createRow('', i));
    }
 
    return rows;
  };
 
  return (
  <div >
    {renderBoard()}
  </div>
  );
};
 
export default Board;
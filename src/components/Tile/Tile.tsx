import React from 'react';
import classNames from 'classnames';
import styles from './Tile.module.css';
import { TileState } from '../../types/game';
 
interface TileProps {
  letter: string;
  state: TileState;
  delay?: number;
  isRevealing?: boolean;
}
 
const Tile: React.FC<TileProps> = ({
  letter,
  state,
  delay = 0,
  isRevealing = false
}) => {
  const tileClasses = classNames(styles.tile, styles[state], {
    [styles.revealing]: isRevealing,
  });
 
  return (
    <div
      className={tileClasses}
      style={{
        animationDelay: `${delay}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {letter.toUpperCase()}
    </div>
  );
};
 
export default Tile;
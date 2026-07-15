import React, { useEffect } from "react";
import { GAME_CONFIG } from "../../utils/constant";
import styles from "./Keyboard.module.css";
interface KeyboardProps {
  onKeyPress: (key: string) => void;
}

const Keyboard: React.FC<KeyboardProps> = ({ onKeyPress }) => {


  
useEffect(() => {
  const handlePhysicalKeyPress = (event: KeyboardEvent) => {

    const key = event.key.toLowerCase();

    if (key === "enter") {
      event.preventDefault();
      onKeyPress("ENTER");
    } else if (key === "backspace") {
      event.preventDefault();
      onKeyPress("BACKSPACE");
    } else if (key.match(/^[a-z]$/)) {
      onKeyPress(key.toUpperCase());
    }
  };

  window.addEventListener("keydown", handlePhysicalKeyPress);

  return () => {
    window.removeEventListener("keydown", handlePhysicalKeyPress);
  };
}, [onKeyPress]);

  return (
  <div className={styles.keyboard}>
  {GAME_CONFIG.KEYBOARD_ROWS.map((row, rowIndex) => (
    <div key={rowIndex} className={styles.row}>
      {row.map((key) => (
        <button
          key={key}
          className={`${styles.key} ${
            key === "ENTER" || key === "BACKSPACE" ? styles.large : ""
          }`}
          onClick={() => onKeyPress(key)}
        >
          {key === "BACKSPACE" ? "⌫" : key}
        </button>
      ))}
    </div>
  ))}
</div>
  );
};

export default Keyboard;
import "../../App.css";
import Board from "../Board/Board";
import Keyboard from "../Keyboard/Keyboard";
import Modal from "../Modal/Modal";
import { useWordle } from "../../hooks/useWordle";
import { GameState } from "../../types/game";
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const {
    newGame,
    currentGuess,
    guesses,
    isRevealing,
    addLetter,
    error,
    gameState,
    removeLetter,
    submitGuess,
    targetWord,
    getModalMessage
  } = useWordle();
  return (
    <>
      <div>
        <ToastContainer/>
        <header>
          <h1 className="text-2xl flex m-5 font-bold justify-center">Wordle Game </h1>
        </header>
        <Board
          guesses={guesses}
          currentGuess={currentGuess}
          currentAttempt={guesses.length}
          isRevealing={isRevealing}
        />
        {error&&<p>{error}</p>}
        <Keyboard
          onKeyPress={(key: string) => {
            if (key === "ENTER") {
              submitGuess();
            } else if (key === "BACKSPACE") {
              removeLetter();
            } else {
              addLetter(key);
            }
          }}
        />
        {gameState !== GameState.PLAYING && (
          <Modal message={getModalMessage()} onClose={newGame} />
        )}
      </div>
    </>
  );
}

export default App;

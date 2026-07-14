import './App.css'
import Board from './components/Board/Board'
import { useWordle } from './hooks/useWordle'

function App() {
  const{newGame,currentGuess,guesses,isRevealing }=useWordle();
  return (
    <>
      <div>
        <header>
          <h1>Worlde Game </h1>
          <button onClick={newGame} >New Game </button>
        </header>
        <Board
          guesses={guesses}
          currentGuess={currentGuess}
          currentAttempt={guesses.length}
          isRevealing={false}
        />
        
      </div>
    </>
  )
}

export default App

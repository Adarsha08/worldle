import './App.css'
import Board from './components/Board/Board'

function App() {
  const newgame=()=>
  {
    alert("hello")
  }
  return (
    <>
      <div>
        <header>
          <h1>Worlde Game </h1>
          <button onClick={newgame} >New Game </button>
        </header>
        <Board />
      </div>
    </>
  )
}

export default App

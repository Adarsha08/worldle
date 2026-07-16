import { useState } from "react";
import "./index.css";  // or whatever your global CSS file is called
import Home from "./components/Home/Home";
import GameScreen from "./components/Game/Game";   // your renamed file

function App() {
  const [hasStarted, setHasStarted] = useState(false);

  if (!hasStarted) {
    return <Home onPlay={() => setHasStarted(true)} />;
  }

  return <GameScreen />;
}

export default App;
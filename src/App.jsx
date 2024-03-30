import React, { useState } from 'react';
import StartGame from "./components/StartGame";
import GamePlay from './components/GamePlay';
import Audio from './components/Audio';
export default function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  }

  return (
    <div>
      <Audio/>
      {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}
    </div>
  );
}

import React, { useState } from 'react';
export default function Audio() {
  const [audioIsPlaying, setAudioIsPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState(null);

  const playAudio = () => {
    setAudioIsPlaying(true);
    audioElement.play();
  };

  const pauseAudio = () => {
    setAudioIsPlaying(false);
    audioElement.pause();
  };

  const handleAudioRef = (audio) => {
    if (audio) {
      setAudioElement(audio);
    }
  };

  return (
    <div>
      {!audioIsPlaying && (
        <button onClick={playAudio}>Play Audio</button>
      )}
      {audioIsPlaying && (
        <button onClick={pauseAudio}>Pause Audio</button>
      )}
      <audio ref={handleAudioRef} autoPlay loop>
        <source src="song/play.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}

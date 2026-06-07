import { useState, useRef } from 'react'

import './App.css'
import CommunityBoard from './components/CommunityBoard.jsx'

const App = () => {

  const audioRef = useRef(null) // will connect to the <audio> element
  const [isPlaying, setIsPlaying] = useState(false)

  // custom audio toggle function to get background music playing
  const toggleAudio = () => {
    if(isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="app">
      <h1 className="app-title"> Konohagakure's Epic Shinobi </h1>
      <h2> Get to learn more about your favorite shinobi that help maintain peace in the ninja world. </h2>
      <CommunityBoard />

      <audio ref={audioRef} loop>
        <source src="/silhouette.mp3" type="audio/mpeg" />
      </audio>

      <button onClick = {toggleAudio} className="bgm-button">
        {isPlaying ? "Pause BGM 🔇" : "Play BGM 🔊"}
      </button>
    </div>
  )
}

export default App

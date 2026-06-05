// import { useState } from 'react'
// gonna comment useState knowing we don't have to use this for now but significant in future React concepts

import './App.css'
import CommunityBoard from './components/CommunityBoard.jsx'

const App = () => {

  return (
    <div className="app">
      <h1 className="app-title"> Konohagakure's Legendary Shinobi </h1>
      <h3> Get to learn more about your favorite shinobi when the ninja world isn't in danger. </h3>
      <CommunityBoard />
    </div>
  )
}

export default App

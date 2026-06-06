// import { useState } from 'react'
// gonna comment useState knowing we don't have to use this for now but significant in future React concepts

import './App.css'
import CommunityBoard from './components/CommunityBoard.jsx'

const App = () => {

  return (
    <div className="app">
      <h1 className="app-title"> Konohagakure's Epic Shinobi </h1>
      <h2> Get to learn more about your favorite shinobi that help maintain peace in the ninja world. </h2>
      <CommunityBoard />
    </div>
  )
}

export default App

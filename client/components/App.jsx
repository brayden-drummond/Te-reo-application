import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import Quiz from './Quiz'
import Results from './Results'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </div>
  )
}

export default App

import React from 'react'
import Home from './Home'
import Form from './Form'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div id="app">
      <nav>
        {/* NavLinks here */}
      </nav>
      {/* Route and Routes here */}
      <Home />
      <Form />
    </div>
  )
}

export default App

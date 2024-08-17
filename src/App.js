import './App.css';
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TicTacToe from './pages/TicTacToe.js'
import Home from './pages/Home.js'
import RPS from './pages/RPS.js'

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/tictactoe' element={<TicTacToe />} />
      <Route path='/rps' element={<RPS />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;

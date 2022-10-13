import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ButtonPage from './pages/ButtonPage'
import Homepage from './pages/Homepage'
import InputPage from './pages/InputPage'
import ParaPage from './pages/ParaPage'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/button' element={<ButtonPage />} />
        <Route path='/para' element={<ParaPage />} />
        <Route path='/input' element={<InputPage />} />
      </Routes>
    </>
  )
}

export default App
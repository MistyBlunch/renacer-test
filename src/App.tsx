import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Form } from './components/Form'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/prueba" element={<Form />} />
      </Routes>
    </div>
  )
}

export default App

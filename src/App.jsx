import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'
import Start from './Components/Start/Start.jsx'
import Signup from './Components/Signup/Signup.jsx'
import Login from './Components/Login/Login.jsx'
import Webpage from './Components/Webpage/Webpage.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path ="Signup" element={<Signup />} />
        <Route path ="Login" element={<Login />} />
        <Route path='Webpage' element={
          <ProtectedRoute>
          <Webpage />
          </ProtectedRoute>} />
      </Routes>
  )
}

export default App

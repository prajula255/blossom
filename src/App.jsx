import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import RegisterPage from './pages/registeration/registerPage'
import LoginPage from './pages/login/loginPage'
import HomePage from './pages/home/homePage'
import ContactPage from './pages/contactPage'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App

import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import RegisterPage from './pages/registeration/registerPage'
import LoginPage from './pages/login/loginPage'
import HomePage from './pages/home/homePage'
import FlowersList from './pages/product/flowerList'
import AboutPage from './pages/about/aboutPage'
import CartPage from './pages/cart/cart'
import CheckoutPage from './pages/cart/checkOut'
import NavEg from './components/navbar'
import ContactPage from './pages/contact/contactPage'
import OrderPage from './pages/cart/orderPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavEg />
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/shop' element={<FlowersList />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/checkOut' element={<CheckoutPage />} />
          <Route path='/order' element={<OrderPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

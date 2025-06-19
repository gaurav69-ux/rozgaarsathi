import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import  Login  from './pages/Login'
import Homepage from './pages/Homepage'

const App = () => {
  return (
    <>
    <Header />

     <Login/>

      <Homepage />

    <Footer />

    </>
  )
}

export default App
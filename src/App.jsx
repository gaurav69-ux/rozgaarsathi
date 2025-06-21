import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import  Login  from './pages/Login'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Registration from './pages/Registration'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'


// Create a router for the application

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Homepage />
          <Footer />
          
        </>
      )},

    {
      path: "/Login",
      element: (
        <>
          <Navbar />
          <Login />
          <Footer />
        </>
      )},

       {
      path: "/About",
      element: (
        <>
          <Navbar />
          <About />
          <Footer />
        </>
      )},

         {
      path: "/Registration",
      element: (
        <>
          <Navbar />
          <Registration />
          <Footer />
        </>
      )},
  ]);

  return (
    <>
    {/* <Navbar /> */}

     {/* <Login/> */}

      {/* <Homepage /> */}

    {/* <Footer /> */}

    {/* <Registration/> */}

      <RouterProvider router={router} />

    </>
  )
}

export default App
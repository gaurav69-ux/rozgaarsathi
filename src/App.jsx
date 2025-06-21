import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import  Login  from './pages/Login'
import Homepage from './pages/Homepage'
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
        </>
      )},

    {
      path: "/Login",
      element: (
        <>
          <Navbar />
          <Login />
        </>
      )
    },
  ]);

  return (
    <>
    {/* <Navbar /> */}

     {/* <Login/> */}

      {/* <Homepage /> */}

    {/* <Footer /> */}

      <RouterProvider router={router} />

    </>
  )
}

export default App
import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import  Login  from './pages/Login'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Signup from './pages/Signup'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Jobsekeer from './pages/Jobsekeer'
import Employer from './pages/Employer'


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
      path: "/Signup",
      element: (
        <>
          <Navbar />
          <Signup />
          <Footer />
        </>
      )},

       {
      path: "/Jobsekeer",
      element: (
        <>
          <Navbar />
          <Jobsekeer />
          <Footer />
        </>
      )},

       {
      path: "/Employer",
      element: (
        <>
          <Navbar />
          <Employer />
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
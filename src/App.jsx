import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import  Login  from './pages/Login'
import Navbar2 from './components/Navbar2'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Signup from './pages/Signup'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Jobsekeer from './pages/Jobsekeer'
import Employer from './pages/Employer'
import Dashboard from './pages/Dashboard'
import Joblisting from './pages/Joblisting'
import Employerdash from './pages/Employerdash'
import Jobposting from './pages/Jobposting'
import Editprofile from './pages/Editprofile'



// Create a router for the application

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/Homepage",
      element: (
        <>
          <Navbar />
          <Homepage />
          <Footer />
        </>
      )},

    {
      path: "/",
      element: (
        <>
          <Navbar2 />
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
          {/* <Navbar2 /> */}
          <Jobsekeer />
          <Footer />
        </>
      )},

       {
      path: "/Employer",
      element: (
        <>
          {/* <Navbar2 /> */}
          <Employer />
          <Footer />
        </>
      )},

        {
      path: "/Dashboard",
      element: (
        <>
          <Navbar />
          <Dashboard />
          <Footer />
        </>
      )},

       {
      path: "/Joblisting",
      element: (
        <>
          <Navbar />
          <Joblisting />
          <Footer />
        </>
      )},

       {
      path: "/Employerdash",
      element: (
        <>
          <Navbar />
          <Employerdash />
          <Footer />
        </>
      )},

       {
      path: "/Jobposting",
      element: (
        <>
          <Navbar />
          <Jobposting />
          <Footer />
        </>
      )},

        {
      path: "/Editprofile",
      element: (
        <>
          <Navbar />
          <Editprofile />
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
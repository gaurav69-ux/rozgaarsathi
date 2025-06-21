import React from 'react'
import { Link } from 'react-router-dom'

function Registration() {
  return (
    <>
    

  {/* <!-- Registration Form --> */}
  <section class="container mx-auto px-4 py-12">

    <div class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">

      <h2 class="text-2xl font-semibold text-gray-800 mb-6 text-center">Create Your Account</h2>

      <form id="registrationForm" onsubmit="handleSubmit(event)">
       
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-medium mb-2">Full Name</label>
          <input type="text" id="name" name="name" class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required />
        </div>

        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-medium mb-2">Email Address</label>
          <input type="email" id="email" name="email" class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required />
        </div>

        <div class="mb-4">
          <label for="password" class="block text-gray-700 font-medium mb-2">Password</label>
          <input type="password" id="password" name="password" class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required minlength="6" />
        </div>

        <div class="mb-6">
          <label for="userType" class="block text-gray-700 font-medium mb-2">I am a</label>
          <select id="userType" name="userType" class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required>
            <option value="" disabled selected>Select an option</option>
            <option value="jobSeeker">Job Seeker</option>
            <option value="employer">Employer</option>
          </select>
        </div>

        <button type="submit" class="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300">Register</button>
      
      </form>

      <p class="mt-4 text-center text-gray-600">
        Already have an account? <Link to="/Login" class="text-blue-600 hover:underline">Log in</Link>
      </p>
      <p class="mt-2 text-center text-gray-600">
        Learn more about us on our <Link to="/About" class="text-blue-600 hover:underline">About page</Link>
      </p>
    </div>
  </section>

 
  
    </>
  )
}

export default Registration
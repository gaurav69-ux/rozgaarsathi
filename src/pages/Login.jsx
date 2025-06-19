import React, { useState } from 'react'

const Login = () => {

  //  const [first, setfirst] = useState()

  return (

   
    <>
    
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
  <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
    <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
    <form>
      {/* <!-- Email Input --> */}
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      {/* <!-- Password Input --> */}
      <div class="mb-6">
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      {/* <!-- Submit Button --> */}
      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Login
      </button>

      {/* <!-- Forgot Password Link -->
      <div class="mt-4 text-center">
        <a href="#" class="text-sm text-blue-600 hover:underline">Forgot password?</a>
      </div> */}

      {/* <!-- Sign Up Link --> */}
      <div class="mt-6 text-center">
        <p class="text-sm text-gray-600">Don't have an account? <a href="#" class="text-blue-600 hover:underline">Register</a></p>
      </div>
    </form>
  </div>
</main>
    
    </>
  )
}

export default Login
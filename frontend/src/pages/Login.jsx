// import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  //  const [first, setfirst] = useState()

  return (
    <>
      <main className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Login
          </h2>

          <form>
            {/* <!-- Email Input --> */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* <!-- Password Input --> */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* <!-- Submit Button --> */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Login
            </button>

            {/* <!-- Forgot Password Link -->
      <div class="mt-4 text-center">
        <a href="#" class="text-sm text-blue-600 hover:underline">Forgot password?</a>
      </div> */}

            {/* <!-- Sign Up Link --> */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don&apost have an account?
                <Link to="/signup" class="text-blue-600 hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;

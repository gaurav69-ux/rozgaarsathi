import React from 'react'
import { Link } from 'react-router-dom'

function Employerdash() {
  return (
    <>
         <div class="container mx-auto p-6 h-screen">
        <h1 class="text-3xl font-bold text-gray-800 mb-6">Welcome, Employer!</h1>
        <p class="text-gray-600 mb-4">Registered on: June 24, 2025, 07:34 PM IST</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-cyan-500 p-4 rounded-lg shadow-md">
             
                <h2 class="text-xl font-semibold text-gray-700 mb-2">Job Postings</h2>
              
                <p class="text-gray-600">You have not posted any jobs yet.</p>

                <Link to="/Jobposting">
                <button class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Post a Job</button>
                </Link>
            </div>
            <div class="bg-cyan-500 p-4 rounded-lg shadow-md">
                <h2 class="text-xl font-semibold text-gray-700 mb-2">Applications</h2>
                <p class="text-gray-600">No applications received yet.</p>
                <button class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">View Applications</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Employerdash
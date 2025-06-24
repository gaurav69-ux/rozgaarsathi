import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <>
     <div class="container mx-auto p-6 my-25">
        <h1 class="text-3xl font-bold text-gray-800 mb-6">Welcome, Job Seeker!</h1>
        <p class="text-gray-600 mb-4">Registered on: June 24, 2025, 06:59 PM IST</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-cyan-500 p-4 rounded-lg shadow-md">
                <h2 class="text-xl font-semibold text-gray-700 mb-2">Job Applications</h2>
                <p class="text-gray-600">You have not applied to any jobs yet.</p>
                <button class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    <Link to="/Joblisting">Browse Jobs</Link>
                </button>
            </div>
            <div class="bg-cyan-500 p-4 rounded-lg shadow-md">
                <h2 class="text-xl font-semibold text-gray-700 mb-2">Profile Status</h2>
                <p class="text-gray-600">Complete your profile to get started.</p>
                <Link to="/Editprofile">
                <button class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Edit Profile</button>
                </Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard
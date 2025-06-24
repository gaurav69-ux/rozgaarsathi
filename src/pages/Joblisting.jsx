import React from 'react'
import { Link } from 'react-router-dom'

function Joblisting() {
  return (
    <>
        <div class="container mx-auto p-6 h-screen">
        <h1 class="text-3xl font-bold text-gray-800 mb-6">Job Listings</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-white p-4 rounded-lg shadow-md">
                <h2 class="text-xl font-semibold text-gray-700">Software Engineer</h2>
                <p class="text-gray-600">Company: TechCorp</p>
                <p class="text-gray-600">Location: Remote</p>
                <p class="text-gray-600">Salary: $80,000 - $100,000</p>
                <button class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Apply Now</button>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-md">
                <h2 class="text-xl font-semibold text-gray-700">Data Analyst</h2>
                <p class="text-gray-600">Company: DataSolutions</p>
                <p class="text-gray-600">Location: New York</p>
                <p class="text-gray-600">Salary: $70,000 - $90,000</p>
                <button class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Apply Now</button>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-md">
                <h2 class="text-xl font-semibold text-gray-700">Marketing Manager</h2>
                <p class="text-gray-600">Company: AdAgency</p>
                <p class="text-gray-600">Location: Los Angeles</p>
                <p class="text-gray-600">Salary: $90,000 - $110,000</p>
                <button class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Apply Now</button>
            </div>

             <div class="bg-white p-4 rounded-lg shadow-md">
                <h2 class="text-xl font-semibold text-gray-700">Marketing Manager</h2>
                <p class="text-gray-600">Company: AdAgency</p>
                <p class="text-gray-600">Location: Los Angeles</p>
                <p class="text-gray-600">Salary: $90,000 - $110,000</p>
                <button class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Apply Now</button>
            </div>

             <div class="bg-white p-4 rounded-lg shadow-md">
                <h2 class="text-xl font-semibold text-gray-700">Marketing Manager</h2>
                <p class="text-gray-600">Company: AdAgency</p>
                <p class="text-gray-600">Location: Los Angeles</p>
                <p class="text-gray-600">Salary: $90,000 - $110,000</p>
                <button class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Apply Now</button>
            </div>

             

             
        </div>
    </div>

    </>
  )
}

export default Joblisting
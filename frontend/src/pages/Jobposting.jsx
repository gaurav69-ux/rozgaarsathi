import React from 'react'
import { Link } from 'react-router-dom'

function Jobposting() {
  return (
    <>
         <div class="container mx-auto p-6">
        <h1 class="text-3xl font-bold text-gray-800 mb-6">Post a New Job</h1>
        <form id="jobPostingForm" class="bg-white p-6 rounded-lg shadow-md space-y-4">
            <div>
                <label class="block text-gray-700">Job Title</label>
                <input type="text" required class="w-full p-2 border border-gray-300 rounded" placeholder="e.g., Software Engineer" />
            </div>
            <div>
                <label class="block text-gray-700">Company</label>
                <input type="text" required class="w-full p-2 border border-gray-300 rounded" placeholder="e.g., TechCorp /" />
            </div>
            <div>
                <label class="block text-gray-700">Location</label>
                <input type="text" required class="w-full p-2 border border-gray-300 rounded" placeholder="e.g., Remote /" />
            </div>
            <div>
                <label class="block text-gray-700">Salary Range</label>
                <input type="text" required class="w-full p-2 border border-gray-300 rounded" placeholder="e.g., $80,000 - $100,000 /" />
            </div>
            <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Submit Job Posting</button>
        </form>
    </div>
    </>
  )
}

export default Jobposting
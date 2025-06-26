import React from 'react'
import { Link } from 'react-router-dom'

function Editprofile() {
  return (
    <>
            <div class="container mx-auto p-6">
        <h1 class="text-3xl font-bold text-gray-800 mb-6">Edit Your Profile</h1>
        <p class="text-gray-600 mb-4">Registered on: June 24, 2025, 08:11 PM IST</p>
        <form id="editProfileForm" class="bg-white p-6 rounded-lg shadow-md space-y-4">
            <div>
                <label class="block text-gray-700">Full Name</label>
                <input type="text" required class="w-full p-2 border border-gray-300 rounded" placeholder="e.g., John Doe" />
            </div>
            <div>
                <label class="block text-gray-700">Email</label>
                <input type="email" required class="w-full p-2 border border-gray-300 rounded" placeholder="e.g., john.doe@example.com" />
            </div>
            <div>
                <label class="block text-gray-700">Phone Number</label>
                <input type="tel" required class="w-full p-2 border border-gray-300 rounded" placeholder="e.g., +1-123-456-7890" />
            </div>
            <div>
                <label class="block text-gray-700">Skills</label>
                <input type="text" required class="w-full p-2 border border-gray-300 rounded" placeholder="e.g., Python, Java, SQL" />
            </div>
            <div>
                <label class="block text-gray-700">Experience (Years)</label>
                <input type="number" required class="w-full p-2 border border-gray-300 rounded" placeholder="e.g., 5" />
            </div>
            <button type="submit" class="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">Save Changes</button>
        </form>
    </div>
    </>
  )
}

export default Editprofile
import React from 'react'
import { Link } from 'react-router-dom'

function Jobsekeer() {
  return (
    <>
    
                {/* <!-- Registration Form Section --> */}



  <section class="py-12 bg-white">
    <div class="container mx-auto px-4 max-w-lg">
      <h2 class="text-3xl font-bold text-center mb-6">Register as Job Seeker</h2>
      <p class="text-center mb-8">Fill in your details to find local job opportunities.</p>
      <div id="registration-form" class="space-y-4">
                    {/* <form action=""> */}
        <div>
          <label for="full-name" class="block text-sm font-medium text-gray-700">Full Name</label>
          <input type="text" id="full-name" class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" required />
        </div>
        <div>
          <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
          <input type="tel" id="phone" class="mt-1 block w-full p-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" required />
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
          <input type="email" id="email" class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" required />
        </div>
        <div>
          <label for="village" class="block text-sm font-medium text-gray-700">Village/Town</label>
          <input type="text" id="village" value="hidden" />
        </div>
        <div>
          <label for="job-type" class="block text-sm font-medium text-gray-700">Job Type</label>
          <select id="job-type" class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" required>
            <option value="">Select a job type</option>
            <option value="agriculture">Agriculture</option>
            <option value="retail">Retail</option>
            <option value="construction">Construction</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label for="experience" class="block text-sm font-medium text-gray-700">Work Experience (Optional)</label>
          <textarea id="experience" rows="4" class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
        </div>
        <Link to="/Dashboard">
        <button type='submit' id="submit-btn" class="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Submit</button>
        </Link>
        <p id="form-message" class="text-center text-sm text-red-600 hidden">Please fill all required fields.</p>
        {/* </form> */}
      </div>

     

    </div>
  </section>
 


    </>
  )
}

export default Jobsekeer
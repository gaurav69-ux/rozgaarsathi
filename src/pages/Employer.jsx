import React from 'react'

function Employer() {
  return (
    
   <>
   
               {/* <!-- Registration Form Section --> */}
  <section class="py-12 bg-white">
    <div class="container mx-auto px-4 max-w-lg">
      <h2 class="text-3xl font-bold text-center mb-6">Register as Employer</h2>
      <p class="text-center mb-8">Fill in your details to post local job opportunities.</p>
      <div id="registration-form" class="space-y-4">
        <form  >
        <div>
          <label for="company-name" class="block text-sm font-medium text-gray-700">Company/Business Name</label>
          <input type="text" id="company-name" class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" required /> 
        </div>
        <div>
          <label for="contact-person" class="block text-sm font-medium text-gray-700">Contact Person Name</label>
          <input type="text" id="contact-person" class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" required />
        </div>
        <div>
          <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
          <input type="tel" id="phone" class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" required />
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
          <input type="email" id="email" class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" required />
        </div>
        <div>
          <label for="location" class="block text-sm font-medium text-gray-700">Business Location (Village/Town)</label>
          <input type="text" id="location" class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" required />
        </div>
        <div>
          <label for="job-category" class="block text-sm font-medium text-gray-700">Job Category</label>
          <select id="job-category" class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" required>
            <option value="">Select a job category</option>
            <option value="agriculture">Agriculture</option>
            <option value="retail">Retail</option>
            <option value="construction">Construction</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label for="description" class="block text-sm font-medium text-gray-700">Business Description (Optional)</label>
          <textarea id="description" rows="4" class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
        </div>
        <button id="submit-btn" class="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Submit</button>
        <p id="form-message" class="text-center text-sm text-red-600 hidden">Please fill all required fields.</p>
        </form>
      </div>
    </div>
  </section>

   
   </>

  )
}

export default Employer
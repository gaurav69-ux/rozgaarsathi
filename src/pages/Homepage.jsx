import React from 'react'
import { Link } from 'react-router-dom'


export const Homepage = () => {
  return (

    <>

  
  <section class="bg-blue-100 py-12 text-center">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold mb-4">Find Your Dream Job Locally</h2>
      <p class="text-lg mb-6">RozgaarSathi connects job seekers in rural areas with employers in agriculture, retail, construction, and more.</p>
      <div class="space-x-4">

        <Link to="/Jobsekeer" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Register as Job Seeker</Link>
        <Link to="/Employer" class="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">Register as Employer</Link>

      </div>
    </div>
  </section>

  
  <section class="py-12 bg-white">
    <div class="container mx-auto px-4">
      <h3 class="text-3xl font-bold text-center mb-8">Why Choose RozgaarSathi?</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center">
          <h4 class="text-xl font-semibold mb-2">Local Opportunities</h4>
          <p>Find jobs in your village or nearby areas in agriculture, retail, and construction.</p>
        </div>
        <div class="text-center">
          <h4 class="text-xl font-semibold mb-2">Simple & Accessible</h4>
          <p>Easy-to-use platform designed for users with basic internet access.</p>
        </div>
        <div class="text-center">
          <h4 class="text-xl font-semibold mb-2">Free to Use</h4>
          <p>Connect with employers or job seekers at no cost.</p>
        </div>
      </div>
    </div>
  </section>


  <section class="bg-blue-600 text-white py-12 text-center">
    <div class="container mx-auto px-4">
      <h3 class="text-2xl font-bold mb-4">Ready to Get Started?</h3>
      <p class="mb-6">Join RozgaarSathi today and take the first step toward your next opportunity.</p>
      {/* <a href="register.html" class="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-200">Join Now</a> */}
    </div>
  </section>


    </>


  )}
export default Homepage
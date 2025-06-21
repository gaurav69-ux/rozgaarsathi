import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      

  {/* <!-- About Section --> */}
  <section class="container mx-auto px-4 py-12">
    <h2 class="text-2xl font-semibold text-gray-800 mb-6">About Rozgaargadi</h2>
    <p class="text-gray-600 mb-4">
      Rozgaargadi is a platform built to empower local communities by connecting job seekers with employment opportunities right in their neighborhoods. Whether you're looking for work in agriculture, retail, construction, or other local trades, Rozgaargadi makes it easy to find jobs that match your skills and location.
    </p>
    <p class="text-gray-600 mb-4">
      Our mission is to bridge the gap between employers and workers in rural and small-town areas, ensuring everyone has access to meaningful work. We believe in keeping things simple, so our platform is designed to be easy to use, even with basic internet access.
    </p>

    {/* <!-- Mission and Vision --> */}
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold text-blue-600 mb-2">Our Mission</h3>
        <p class="text-gray-600">
          To create a reliable and accessible platform that helps local people find jobs and supports employers in hiring skilled workers from their own communities.
        </p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold text-blue-600 mb-2">Our Vision</h3>
        <p class="text-gray-600">
          To transform local economies by making job opportunities available to everyone, fostering growth and prosperity in every village and small town.
        </p>
      </div>
    </div>

    {/* <!-- Key Features --> */}
    <h3 class="text-xl font-semibold text-gray-800 mt-12 mb-6">What We Offer</h3>
    <ul class="list-disc list-inside text-gray-600 space-y-2">
      <li>Job listings tailored to local areas, including villages and small towns.</li>
      <li>Easy search filters to find jobs by type, location, or skill level.</li>
      <li>A user-friendly platform that works on mobile phones and basic internet.</li>
      <li>Support for employers to post jobs and connect with local talent.</li>
    </ul>
  </section>
 


    </>
  )
}

export default About
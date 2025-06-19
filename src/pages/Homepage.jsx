import React from 'react'

const Homepage = () => {
  return (
    <>
    
    

    
    
    <main class="max-w-4xl mx-auto p-4">
         
        <section class="mb-6">
            <div class="flex flex-col md:flex-row gap-4">
                {/* <input id="searchInput" type="text" placeholder="Search jobs..." class="p-2 border rounded-md flex-1"> */}
                <select id="villageFilter" class="p-2 border rounded-md">
                    <option value="">All Villages</option>
                    <option value="Village A">Village A</option>
                    <option value="Village B">Village B</option>
                    <option value="Village C">Village C</option>
                </select>
                <select id="jobTypeFilter" class="p-2 border rounded-md">
                    <option value="">All Job Types</option>
                    <option value="Agriculture">Agriculture</option>
                    <option value="Retail">Retail</option>
                    <option value="Construction">Construction</option>
                </select>
            </div>
        </section>

        {/* <!-- Job Listings --> */}
        <section id="jobListings" class="grid gap-4">
            {/* <!-- Sample Job Card (will be populated by JS) --> */}
            <div class="job-card bg-white">
                <h2 class="text-xl font-semibold">Farm Worker</h2>
                <p><strong>Village:</strong> Village A</p>
                <p><strong>Type:</strong> Agriculture</p>
                <p><strong>Description:</strong> Help with planting and harvesting crops.</p>
                <p><strong>Contact:</strong> farmer@example.com</p>
            </div>
        </section>

        {/* <!-- Post a Job Form --> */}
        <section class="mt-8 bg-white p-6 rounded-md shadow-md">
            <h2 class="text-xl font-semibold mb-4">Post a New Job</h2>
            <form id="jobForm" class="flex flex-col gap-4">
                <input type="text" id="jobTitle" placeholder="Job Title" class="p-2 border rounded-md" required />
                <select id="jobVillage" class="p-2 border rounded-md" required>
                    <option value="">Select Village</option>
                    <option value="Village A">Village A</option>
                    <option value="Village B">Village B</option>
                    <option value="Village C">Village C</option>
                </select>
                <select id="jobType" class="p-2 border rounded-md" required>
                    <option value="">Select Job Type</option>
                    <option value="Agriculture">Agriculture</option>
                    <option value="Retail">Retail</option>
                    <option value="Construction">Construction</option>
                </select>
                <textarea id="jobDescription" placeholder="Job Description" class="p-2 border rounded-md" required></textarea>
                <input type="email" id="jobContact" placeholder="Contact Email" class="p-2 border rounded-md" required />
                <button type="submit" class="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">Post Job</button>
            </form>


        </section>

    
    </main>

    {/* <!-- Footer --> */}
    <footer class="bg-gray-800 text-white text-center p-4 mt-8">
    </footer>

   

    





    
    

    
    </>
  )
}

export default Homepage
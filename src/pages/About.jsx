import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      {/* About Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-blue-700 mb-6 text-center">
          About <span className="text-yellow-400">RozgaarSathi</span>
        </h2>
        <div className="max-w-2xl mx-auto mb-8">
          <p className="text-gray-700 text-center text-lg mb-4">
            RozgaarSathi empowers local communities by connecting job seekers
            with employment opportunities in their neighborhoods. Whether you’re
            looking for work in agriculture, retail, construction, or other
            local trades, RozgaarSathi makes it easy to find jobs that match
            your skills and location.
          </p>
          <p className="text-gray-700 text-center text-lg">
            Our mission is to bridge the gap between employers and workers in
            rural and small-town areas, ensuring everyone has access to
            meaningful work. We believe in keeping things simple, so our
            platform is designed to be easy to use, even with basic internet
            access.
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-gradient-to-br from-blue-100 via-white to-yellow-50 p-8 rounded-xl shadow-md flex flex-col items-center">
            <div className="mb-3">
              {/* Mission Icon */}
              <svg
                className="h-10 w-10 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m4 0h-1V7h-1m-4 0h1v4h1m-4 0h1v4h1"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-700 text-center">
              To create a reliable and accessible platform that helps local
              people find jobs and supports employers in hiring skilled workers
              from their own communities.
            </p>
          </div>
          <div className="bg-gradient-to-br from-yellow-50 via-white to-blue-100 p-8 rounded-xl shadow-md flex flex-col items-center">
            <div className="mb-3">
              {/* Vision Icon */}
              <svg
                className="h-10 w-10 text-yellow-400"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-yellow-500 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-700 text-center">
              To transform local economies by making job opportunities available
              to everyone, fostering growth and prosperity in every village and
              small town.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <h3 className="text-2xl font-bold text-blue-700 mt-12 mb-6 text-center">
          What We Offer
        </h3>
        <ul className="max-w-2xl mx-auto grid gap-4 md:grid-cols-2 list-none">
          <li className="flex items-start space-x-3 bg-white rounded-lg shadow p-4">
            <span>
              <svg
                className="h-6 w-6 text-green-500 mt-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            <span>
              Job listings tailored to local areas, including villages and small
              towns.
            </span>
          </li>
          <li className="flex items-start space-x-3 bg-white rounded-lg shadow p-4">
            <span>
              <svg
                className="h-6 w-6 text-green-500 mt-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            <span>
              Easy search filters to find jobs by type, location, or skill
              level.
            </span>
          </li>
          <li className="flex items-start space-x-3 bg-white rounded-lg shadow p-4">
            <span>
              <svg
                className="h-6 w-6 text-green-500 mt-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            <span>
              A user-friendly platform that works on mobile phones and basic
              internet.
            </span>
          </li>
          <li className="flex items-start space-x-3 bg-white rounded-lg shadow p-4">
            <span>
              <svg
                className="h-6 w-6 text-green-500 mt-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            <span>
              Support for employers to post jobs and connect with local talent.
            </span>
          </li>
        </ul>
      </section>
    </>
  );
};

export default About;

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const Homepage = () => {
  return (
    <>
      <Navbar />
      <section className="bg-blue-100 py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">
            Find Your Dream Job Locally
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            RozgaarSathi connects job seekers in rural areas with employers in
            agriculture, retail, construction, and more.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/Jobsekeer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold shadow"
            >
              Register as Job Seeker
            </Link>
            <Link
              to="/Employer"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-semibold shadow"
            >
              Register as Employer
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8">
            Why Choose RozgaarSathi?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="flex justify-center mb-2">
                {/* Example icon (Heroicons location-marker) */}
                <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4.5 8-10A8 8 0 1 0 4 12c0 5.5 8 10 8 10z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">
                Local Opportunities
              </h4>
              <p>
                Find jobs in your village or nearby areas in agriculture,
                retail, and construction.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="flex justify-center mb-2">
                {/* Example icon (Heroicons device-mobile) */}
                <svg className="h-8 w-8 text-indigo-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect width="12" height="20" x="6" y="2" rx="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">
                Simple & Accessible
              </h4>
              <p>
                Easy-to-use platform designed for users with basic internet
                access.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="flex justify-center mb-2">
                {/* Example icon (Heroicons currency-rupee) */}
                <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 5H9.5a3.5 3.5 0 0 0 0 7H17M9.5 12H17M6 19h11" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Free to Use</h4>
              <p>Connect with employers or job seekers at no cost.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-12 text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="mb-6 max-w-xl mx-auto">
            Join RozgaarSathi today and take the first step toward your next
            opportunity.
          </p>
          <Link
            to="/signup"
            className="inline-block bg-yellow-300 text-blue-900 px-8 py-3 rounded-lg font-bold shadow hover:bg-yellow-400 transition"
          >
            Join Now
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Homepage;
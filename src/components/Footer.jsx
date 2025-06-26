import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-700 via-indigo-800 to-purple-800 text-white py-8 px-4 border-t border-indigo-900">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-6">
        <div className="flex flex-col text-center md:text-left w-full">
          <div className="text-lg font-semibold text-center ">
            Thank you for visiting our website{" "}
            <span className="text-yellow-300">😊</span>
          </div>
          <div className="text-center text-sm my-2 mb-7">
            <span>
              Contact us:{" "}
              <Link
                to="mailto:gauravdurge35@gmail.com"
                className="text-yellow-300 hover:underline"
              >
                gauravdurge35@gmail.com
              </Link>
            </span>
          </div>
          <hr className="my-4 border-indigo-300 opacity-40" />
        </div>

        <div className="text-sm text-gray-200 text-center">
          &copy; 2025{" "}
          <span className="font-bold text-yellow-300">RozgaarSathi</span>. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
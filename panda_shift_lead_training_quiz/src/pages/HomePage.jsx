import React from "react";
import { Link } from "react-router-dom";
import DockNavigation from "../components/DockNavigation";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center bg-[#f4491e] min-h-screen text-white">
      {/* Welcome Section */}
      <h1 className="text-4xl font-bold mt-8 text-center">
        Welcome to Panda Quiz App!
      </h1>
      <p className="text-lg mt-4 text-center max-w-md">
        Test your knowledge and learn more about our company culture, recipes,
        and operations. Choose a quiz or explore detailed information to get
        started!
      </p>

      {/* Navigation Cards */}
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        <Link
          to="/quizzes"
          className="bg-white text-[#f4491e] rounded-lg shadow-lg p-6 w-64 text-center font-bold hover:bg-gray-200"
        >
          Take a Quiz
        </Link>
        <Link
          to="/information"
          className="bg-white text-[#f4491e] rounded-lg shadow-lg p-6 w-64 text-center font-bold hover:bg-gray-200"
        >
          Learn More
        </Link>
      </div>

      {/* Featured Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Featured Quizzes</h2>
        <ul className="list-disc list-inside">
          <li>
            <Link to="/quizzes/chow-mein" className="underline">
              Chow Mein Quiz
            </Link>
          </li>
          <li>
            <Link to="/quizzes/company-culture" className="underline">
              Company Culture Quiz
            </Link>
          </li>
          <li>
            <Link to="/quizzes/fried-rice" className="underline">
              Fried Rice Quiz
            </Link>
          </li>
        </ul>
      </div>

      {/* Dock Navigation */}
      <DockNavigation />
    </div>
  );
};

export default HomePage;

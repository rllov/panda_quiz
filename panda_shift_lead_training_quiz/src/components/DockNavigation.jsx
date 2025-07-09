import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { PiExam } from "react-icons/pi";
const DockNavigation = () => {
  const location = useLocation();

  return (
    <div class="dock">
      <button
        className={`${location.pathname === "/home" ? "dock-active" : ""}`}
      >
        <Link to="/home" className="flex flex-col items-center">
          <FaHome size={"1.2em"} />
          <span class="dock-label">Home</span>
        </Link>
      </button>

      <button
        className={`${
          location.pathname === "/information" ? "dock-active" : ""
        }`}
      >
        <Link to="/information" className="flex flex-col items-center">
          <FaInfoCircle size={"1.2em"} />
          <span class="dock-label">Information</span>
        </Link>
      </button>

      <button
        className={`${location.pathname === "/quizzes" ? "dock-active" : ""}`}
      >
        <Link to="/quizzes" className="flex flex-col items-center">
          <PiExam size={"1.2em"} />
          <span class="dock-label">Quizzes</span>
        </Link>
      </button>
    </div>
  );
};

export default DockNavigation;

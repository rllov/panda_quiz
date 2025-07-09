import React from "react";
import { useNavigate } from "react-router-dom";

const InformationCard = ({ title, description, navigateTo }) => {
  const navigate = useNavigate();

  return (
    <div className="card card-border bg-base-100 w-96 shadow-xl m-4 text-base-content">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div class="card-actions justify-end">
          <button
            class="btn btn-primary"
            onClick={() => navigate(`${navigateTo}`)}
          >
            Start Learning
          </button>
        </div>
      </div>
    </div>
  );
};

export default InformationCard;

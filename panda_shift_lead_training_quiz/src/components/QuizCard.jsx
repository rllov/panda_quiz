import React from "react";
import { useNavigate } from "react-router-dom";
const QuizCard = ({ title, description, navigateTo }) => {
  const navigate = useNavigate();
  return (
    <div class="card card-border bg-base-100 w-96 shadow-xl m-4 text-base-content">
      <div class="card-body">
        <h2 class="card-title">{title}</h2>
        <p>{description}</p>
        <div class="card-actions justify-end">
          <button
            class="btn btn-primary"
            onClick={() => navigate(`${navigateTo}`)}
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;

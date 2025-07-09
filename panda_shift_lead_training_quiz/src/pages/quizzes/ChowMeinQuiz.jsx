import React, { useState, useEffect } from "react";

const ChowMeinQuiz = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [answerFeedback, setAnswerFeedback] = useState({});

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
  //fetch quiz questions from the backend
  useEffect(() => {
    const fetchQuizQuestions = async () => {
      try {
        const response = await fetch(`${API_URL}/api/chow-mein-quiz`);
        const data = await response.json();
        const shuffled = [...data].sort(() => Math.random() - 0.5);
        setShuffledQuestions(shuffled);
      } catch (error) {
        console.error("Error fetching quiz questions:", error);
      }
    };

    fetchQuizQuestions();
  }, []);

  const handleAnswerSelect = (selectedOption) => {
    setUserAnswers({ ...userAnswers, [currentIndex]: selectedOption });
  };

  const handleNextQuestion = () => {
    if (currentIndex < shuffledQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      calculatedScore();
    }
  };

  const handlePreviousQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleCheckAnswers = () => {
    const currentQuestion = shuffledQuestions[currentIndex];
    const isCorrect = userAnswers[currentIndex] === currentQuestion.answer;
    setAnswerFeedback({
      ...answerFeedback,
      [currentIndex]: isCorrect ? "correct" : "incorrect",
    });

    setTimeout(() => {
      setAnswerFeedback((prevFeedback) => {
        const updatedFeedback = { ...prevFeedback };
        delete updatedFeedback[currentIndex];
        return updatedFeedback;
      });
    }, 1500);
  };

  const calculatedScore = () => {
    let score = 0;
    shuffledQuestions.forEach((question, index) => {
      if (userAnswers[index] === question.answer) {
        score++;
      }
    });
    setScore(score);
  };

  if (score !== null) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold">Quiz Completed!</h1>
        <p className="text-xl">
          Your Score: {score} / {shuffledQuestions.length}
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 bg-[#f4491e] min-h-screen min-w-screen">
      <h1 className="text-2xl font-bold mb-4 text-white">Chow Mein Quiz</h1>

      {shuffledQuestions.length > 0 && (
        <div className="card bg-base-300 shadow-lg p-6 rounded-lg max-w-md mx-auto">
          <h2 className="text-xl font-bold mb-4">
            {shuffledQuestions[currentIndex].question}
          </h2>
          <div className="flex flex-col gap-4">
            {shuffledQuestions[currentIndex].options.map((option, index) => (
              <button
                key={index}
                className={`btn ${
                  userAnswers[currentIndex] === option
                    ? "btn-primary"
                    : "btn-outline"
                }`}
                onClick={() => handleAnswerSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
          {/* Navigation and Feedback Section */}
          <div className="flex flex-col justify-between mt-6 ">
            <div className="flex flex-row justify-between">
              <button
                className="btn btn-secondary mb-2"
                onClick={handlePreviousQuestion}
                disabled={currentIndex === 0}
              >
                Back
              </button>
              <button
                className="btn btn-info mb-2"
                onClick={handleCheckAnswers}
                disabled={!userAnswers[currentIndex]}
              >
                Check Answer
              </button>
              <button
                className="btn btn-primary mb-2"
                onClick={() => handleNextQuestion()}
              >
                {currentIndex < shuffledQuestions.length - 1
                  ? "Next"
                  : "Submit"}
              </button>
            </div>
            {/* Feedback Section */}
            <div className="toast toast-top toast-center">
              {answerFeedback[currentIndex] && (
                <div
                  className={`alert ${
                    answerFeedback[currentIndex] === "correct"
                      ? "alert-success"
                      : "alert-error"
                  }`}
                >
                  <span className="font-bold">
                    {answerFeedback[currentIndex] === "correct"
                      ? "Correct! Great job!"
                      : "Incorrect. Try again!"}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChowMeinQuiz;

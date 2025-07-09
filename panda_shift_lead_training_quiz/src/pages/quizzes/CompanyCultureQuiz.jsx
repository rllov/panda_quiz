import React, { useEffect, useState } from "react";

const CompanyCultureQuiz = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = React.useState(null);
  const [answerFeedback, setAnswerFeedback] = React.useState({});
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

  useEffect(() => {
    const fetchQuizQuestions = async () => {
      try {
        const response = await fetch(`${API_URL}/api/company-culture-quiz`);
        const data = await response.json();
        setShuffledQuestions(data.sort(() => Math.random() - 0.5));
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
      calculateScore();
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

  const calculateScore = () => {
    let correctAnswers = 0;
    shuffledQuestions.forEach((question, index) => {
      if (userAnswers[index] === question.answer) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
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

  if (shuffledQuestions.length === 0) {
    return <p>Loading questions...</p>;
  }

  const currentQuestion = shuffledQuestions[currentIndex];

  return (
    <div className="container mx-auto p-4 bg-[#f4491e] min-h-screen min-w-screen">
      <h1 className="text-2xl font-bold mb-4 text-white">
        Company Culture Quiz
      </h1>
      <div className="card bg-base-300 shadow-lg p-6 rounded-lg max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4">{currentQuestion.question}</h2>
        <div className="flex flex-col gap-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`btn ${
                userAnswers[currentIndex] === option
                  ? "btn-primary"
                  : "btn-outline "
              } h-full w-full break-words p-4`}
              onClick={() => handleAnswerSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="flex justify-between mt-6">
          <button
            className="btn btn-secondary"
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
          <button className="btn btn-primary" onClick={handleNextQuestion}>
            {currentIndex < shuffledQuestions.length - 1 ? "Next" : "Submit"}
          </button>
          {answerFeedback[currentIndex] && (
            <div className={`toast toast-top toast-center`}>
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyCultureQuiz;

import React from "react";
import QuizCard from "../../components/QuizCard";

const AllQuizzesPage = () => {
  return (
    <div className="container min-h-screen mx-auto p-4 flex flex-col items-center bg-[#f4491e] min-w-full">
      <h1 className="text-white">All Quizzes</h1>
      <div className="flex flex-wrap justify-center mt-4">
        <QuizCard
          title="Chow Mein Quiz"
          description="Test your knowledge on Chow Mein ingredients and cooking methods."
          navigateTo="/quizzes/chow-mein"
        />
        <QuizCard
          title="Fried Rice Quiz"
          description="Discover the secrets of our Fried Rice recipe."
          navigateTo="/quizzes/fried-rice"
        />
        <QuizCard
          title="Company Culture Quiz"
          description="Learn about Panda Express's company culture and values."
          navigateTo="/quizzes/company-culture"
        />
      </div>
    </div>
  );
};

export default AllQuizzesPage;

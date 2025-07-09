import React from "react";
import InformationCard from "../../components/InformationCard";

const AllInformationPage = () => {
  return (
    <div className="container min-h-screen mx-auto p-4 flex flex-col items-center bg-[#f4491e] min-w-full">
      <h1 className="text-white">All Information</h1>
      <div className="flex flex-wrap justify-center mt-4">
        <InformationCard
          title="Chow Mein Information"
          description="Learn about Chow Mein ingredients and cooking methods."
          navigateTo="/information/chow-mein"
        />
        <InformationCard
          title="Fried Rice Information"
          description="Discover the secrets of our Fried Rice recipe."
          navigateTo="/information/fried-rice"
        />
        <InformationCard
          title="Company Culture Information"
          description="Learn about Panda Express's company culture and values."
          navigateTo="/information/company-culture"
        />
      </div>
    </div>
  );
};

export default AllInformationPage;

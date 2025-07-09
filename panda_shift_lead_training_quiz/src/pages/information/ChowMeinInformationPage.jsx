import React, { useState, useEffect } from "react";

const ChowMeinInformationPage = () => {
  const [instructions, setInstructions] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

  useEffect(() => {
    const fetchInstructions = async () => {
      try {
        const response = await fetch(`${API_URL}/api/chow-mein-info`);
        const data = await response.json();
        setInstructions(data);
      } catch (error) {
        console.error("Error fetching instructions:", error);
      }
    };

    fetchInstructions();
  }, []);

  return (
    <div className="bg-[#f4491e] p-6 w-full max-w-2xl flex flex-col items-center text-2xl min-w-screen min-h-screen ">
      <h1 className="text-2xl font-bold text-center mt-4 text-white">
        Chow Mein Instructions
      </h1>
      {/* Render Instructions Dynamically */}
      {instructions ? (
        Object.keys(instructions).map((batch) => (
          <div
            key={batch}
            className="collapse bg-base-100 border-base-300 border mb-2 text-base-content"
          >
            <input type="checkbox" />
            <div className="collapse-title font-semibold">
              <h3>{batch}</h3>
            </div>
            <div className="collapse-content text-base">
              <ul>
                {instructions[batch].map((item, index) => (
                  <li key={index}>
                    <b>{item.Ingredient}:</b> {item.Amount}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))
      ) : (
        <p>Loading instructions...</p>
      )}
    </div>
  );
};

export default ChowMeinInformationPage;

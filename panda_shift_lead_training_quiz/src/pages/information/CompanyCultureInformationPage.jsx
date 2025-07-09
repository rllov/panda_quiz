import React, { useState, useEffect } from "react";

const CompanyCultureInformationPage = () => {
  const [information, setInformation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

  useEffect(() => {
    const fetchInformation = async () => {
      try {
        const response = await fetch(`${API_URL}/api/company-culture-info`);
        if (!response.ok) {
          throw new Error("Failed to fetch information");
        }
        const data = await response.json();
        setInformation(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInformation();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto p-4 pb-28 bg-[#f4491e] min-w-screen min-h-screen ">
      <header className="text-center mb-8 text-lg">
        <h1 className="text-white text-2xl">THE PANDA WAY</h1>
        <p className="text-white">Our Culture, Values, and Vision</p>
      </header>

      {information && (
        <>
          {/* Roles and Responsibilities */}
          <section className="bg-base-100 p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-lg font-bold">
              {information.rolesAndResponsibilities.title}
            </h2>
            {information.rolesAndResponsibilities.subsections.map(
              (subsection, index) => (
                <div key={index} className="subsection">
                  <h3 className="text-md font-semibold">{subsection.title}</h3>
                  <ul>
                    {subsection.content.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </section>

          {/* Operating Culture */}
          <section className="bg-base-100 p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-lg font-bold">
              {information.operatingCulture.title}
            </h2>
            <ul>
              {information.operatingCulture.content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Environment */}
          <section className="bg-base-100 p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-lg font-bold">
              {information.environment.title}
            </h2>
            <p>{information.environment.content}</p>
          </section>

          {/* Vision */}
          <section className="bg-base-100 p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-lg font-bold">{information.vision.title}</h2>
            <p>{information.vision.content}</p>
          </section>

          {/* Mission */}
          <section className="bg-base-100 p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-lg font-bold">{information.mission.title}</h2>
            <p>{information.mission.content}</p>
          </section>

          {/* Values */}
          <section className="bg-base-100 p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-lg font-bold">{information.values.title}</h2>
            <ul>
              {information.values.content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* The Panda Way */}
          <section className="bg-base-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold">{information.pandaWay.title}</h2>
            <ul>
              {information.pandaWay.content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        </>
      )}
    </div>
  );
};

export default CompanyCultureInformationPage;

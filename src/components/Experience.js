import React from "react";
import Skills from "./Skills";

const Experience = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 md:p-0">
        {/* Left Side Box - Experience */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold mb-4">Experience</h2>

          {/* Job 1 */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Junior Backend Developer</h3>
            <p className="italic">(Ubitech Solutions Pvt. Ltd.)</p>
            <p className="text-sm text-gray-600 mb-2">
              📅 09/2023 - Present | 📍 Gwalior
            </p>
            <h3 className="text-xl my-6 underline font-semibold">
              Responsibities
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Developed and optimized RESTful APIs to enhance application
                functionality and ensure seamless frontend-backend
                communication.
              </li>
              <li>
                Wrote clean, efficient, and error-free code, improving system
                performance and maintainability.
              </li>
              <li>
                Performed API testing using Postman and automated scripts,
                ensuring software reliability and smooth integration.
              </li>
              <li>
                Implemented scalable backend solutions, minimizing performance
                bottlenecks and ensuring high availability.
              </li>
              <li>
                Implemented RESTful APIs to facilitate seamless communication
                between frontend and backend components, boosting application
                functionality.
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side Box - Intern Experience */}
        <div className="bg-white p-6 my-9 rounded-xl shadow-md">
          <div>
            <h3 className="text-xl font-semibold">Software Developer Intern</h3>
            <p className="italic">(Ubitech Solutions Pvt. Ltd.)</p>
            <p className="text-sm text-gray-600 mb-2">
              📅 02/2023 - 09/2023 | 📍 Gwalior
            </p>
            <h3 className="text-xl my-6 underline font-semibold">
              Responsibities
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Developed Login and Logout web pages using HTML, CSS, and
                JavaScript, improving user experience and functionality.
              </li>
              <li>
                Worked on backend development using PHP and database management
                with MySQL.
              </li>
              <li>
                Gained hands-on experience in API development, enabling smooth
                communication between frontend and backend systems.
              </li>
              <li>
                Developed mini projects, including a To-Do List application, and
                contributed to web panel and dashboard functionalities.
              </li>
              <li>
                Managed databases using Node.js and SQL, ensuring efficient data
                handling and storage solutions.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <Skills />
      </div>
    </>
  );
};

export default Experience;

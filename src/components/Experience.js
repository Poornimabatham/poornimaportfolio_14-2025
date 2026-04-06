import React from "react";

const Experience = () => {
  return (
    <>
      <div id="experience" className="p-6 max-w-6xl mx-auto">
        <h1 className="flex items-center justify-center bg-gray-100 p-3 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 mb-8">
          Experience
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Side Box - Experience */}

          <div className="bg-green-100 text-black p-6 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300">
            {/* Job 1 */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Software Developer</h3>
              <p className="italic">( Solution Analyst Pvt. Ltd.)</p>
              <p className="text-sm mb-2">
                📅 08/2025 - Present | 📍 Ahmedabad
              </p>
              <h3 className="text-xl my-6 underline font-semibold">
                Responsibilities
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Collaborated on a car-based microservices platform, scaling
                  architecture across 6+ panels (Admin, Dealer, Sub-dealer,
                  Mobile)
                </li>

                <li>
                  Engineered Angular & Node.js applications, reducing response
                  time and improving system performance
                </li>
                <li>
                  Optimized MySQL/PostgreSQL queries, improving data retrieval
                  efficiency by ~25%
                </li>
                <li>
                  Delivered multi-brand solutions (Hyundai, Ford), supporting
                  multi-tenant showroom operations
                </li>
                <li>
                  Built backend systems for an Asia banking platform, enabling
                  secure multi-country transactions
                </li>
                <li>
                  Integrated multiple payment gateways, ensuring seamless and
                  reliable cross-border payments Developed Admin & Merchant
                  modules for transaction processing, monitoring, and reporting
                  Boosted payment success rates by refining backend workflows
                  and improving system reliability
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-green-100 text-black p-6 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300">
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Software Developer</h3>
              <p className="italic">(Ubitech Solutions Pvt. Ltd.)</p>
              <p className="text-sm mb-2">📅 06/2023 - 7/2025 | 📍 Gwalior</p>
              <h3 className="text-xl my-6 underline font-semibold">
                Responsibilities
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Built Angular & Node.js applications, reducing API response
                  time by ~30% for 10K+ users
                </li>
                <li>
                  Introduced face recognition & geofencing, improving
                  attendance accuracy significantly .
                </li>
                <li>
                  Architected secure backend systems with Redis authentication,
                  rate limiting, and webhook integrations
                </li>
                <li>
                  Accelerated database performance by 20%+ through indexing and
                  query tuning
                </li>
                <li>
                  Integrated REST & SOAP APIs for third-party services and
                  payment systems
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side Box - Intern Experience */}
          <div className="bg-green-100 text-black p-6 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300">
            <div>
              <h3 className="text-xl font-semibold">
                Software Developer Intern
              </h3>
              <p className="italic">(Ubitech Solutions Pvt. Ltd.)</p>
              <p className="text-sm mb-2">📅 02/2023 - 05/2023 | 📍 Gwalior</p>
              <h3 className="text-xl my-6 underline font-semibold">
                Responsibilities
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Completed a 4-month Web Development training program, building
                  responsive interfaces with HTML, CSS, and JavaScript, and
                  developing backend features using PHP and MySQL
                </li>
                <li>
                  {" "}
                  Delivered mini-projects by implementing AJAX-based dynamic
                  functionality, focusing on performance optimization, clean
                  code practices, and real-world problem-solving
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;

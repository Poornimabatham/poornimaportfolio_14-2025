import React, { useState } from "react";

const experiences = [
  {
    title: "Software Developer",
    company: "Solution Analyst Pvt. Ltd.",
    duration: "📅 08/2025 - Present | 📍 Ahmedabad",
    points: [
      "Collaborated on a car-based microservices platform, scaling architecture across 6+ panels (Admin, Dealer, Sub-dealer, Mobile)",
      "Engineered Angular & Node.js applications, reducing response time and improving system performance",
      "Optimized MySQL/PostgreSQL queries, improving data retrieval efficiency by ~25%",
      "Delivered multi-brand solutions (Hyundai, Ford), supporting multi-tenant showroom operations",
      "Built backend systems for an Asia banking platform, enabling secure multi-country transactions",
      "Integrated multiple payment gateways, ensuring seamless and reliable cross-border payments",
    ],
  },
  {
    title: "Software Developer",
    company: "Ubitech Solutions Pvt. Ltd.",
    duration: "📅 06/2023 - 7/2025 | 📍 Gwalior",
    points: [
      "Built Angular & Node.js applications, reducing API response time by ~30% for 10K+ users",
      "Introduced face recognition & geofencing, improving attendance accuracy significantly",
      "Architected secure backend systems with Redis authentication, rate limiting, and webhook integrations",
      "Accelerated database performance by 20%+ through indexing and query tuning",
      "Integrated REST & SOAP APIs for third-party services and payment systems",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "Ubitech Solutions Pvt. Ltd.",
    duration: "📅 02/2023 - 05/2023 | 📍 Gwalior",
    points: [
      "Completed a 4-month Web Development training program, building responsive interfaces with HTML, CSS, and JavaScript, and developing backend features using PHP and MySQL",
      "Delivered mini-projects by implementing AJAX-based dynamic functionality, focusing on performance optimization, clean code practices, and real-world problem-solving",
    ],
  },
];

const Experience = () => {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? experiences.length - 1 : prev - 1));
  const next = () =>
    setCurrent((prev) => (prev === experiences.length - 1 ? 0 : prev + 1));

  const exp = experiences[current];

  return (
    <div id="experience" className="p-6 max-w-3xl mx-auto">
      <h1 className="flex items-center justify-center bg-gray-100 p-3 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 mb-8 text-2xl">
        Experience
      </h1>

      <div className="relative">
        {/* Card */}
        <div className="bg-green-100 text-black p-6 rounded-xl shadow-md min-h-64">
          <h3 className="text-xl font-semibold">{exp.title}</h3>
          <p className="italic">({exp.company})</p>
          <p className="text-sm mb-2">{exp.duration}</p>
          <h3 className="text-xl my-4 underline font-semibold">
            Responsibilities
          </h3>
          <ul className="list-disc list-inside space-y-1">
            {exp.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={prev}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            ← Prev
          </button>
          <span className="text-sm text-gray-500">
            {current + 1} / {experiences.length}
          </span>
          <button
            onClick={next}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;

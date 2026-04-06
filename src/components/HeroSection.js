import React from "react";

const HeroSection = () => {
  return (
    <div id="about" className="p-9 max-w-4xl mx-auto">
      <div className="flip-card">
        <div className="flip-card-inner">
          {/* Front */}
          <div className="flip-card-front bg-grey-300 text-black p-6 rounded-xl shadow-md">
            <h1 className="text-2xl font-medium">I'm Poornima Batham</h1>
            <p className="mt-2 text-sm">Software Developer</p>
            <p className="mt-2 text-sm">Address: Gwalior, Madhya Pradesh</p>
            <p className="mt-4 mb-9 text-medium leading-relaxed">
              Full Stack Developer with 3+ years of experience building scalable
              web applications using modern frontend and backend technologies.
              Expertise in Node.js, React, Angular, and microservices
              architecture, with a strong focus on performance optimization,
              secure APIs, and seamless thirdparty integrations. Proven ability
              to deliver high-quality solutions in agile environments.
            </p>
          </div>

          {/* Back */}
          <a
            href="https://www.linkedin.com/in/poornima-batham-997860184/"
            target="_blank"
            rel="noopener noreferrer"
            className="flip-card-back bg-blue-500 text-white p-6 rounded-xl shadow-md cursor-pointer"
          >
            <h2 className="text-2xl font-bold mt-6">Let's Connect!</h2>
            <p className="mt-4 text-sm">📧 pbatham21@gmail.com</p>
            <p className="mt-2 text-sm">
              💼 https://www.linkedin.com/in/poornima-batham-997860184/
            </p>
            <p className="mt-2 text-sm">🐙 https://github.com/Poornimabatham</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

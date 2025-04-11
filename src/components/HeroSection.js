import React from "react";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {/* Left Box */}
      <div className="bg-black p-6 mx-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-2">Hello!</h2>
        <h1 className="text-3xl font-bold text-white">I'm Poornima Batham</h1>
        <p className="mt-2 text-gray-600">
          <span>Junior Backend Developer</span>
        </p>
        <p className="mt-2 text-gray-600">
          <span>Address:-Gwalior ,Madhya Pradesh</span>
        </p>
        <p className="mt-2 text-gray-600">
          With over 2 years of experience in the field of development,
          accompanied by a bachelor's degree in engineering. Proficient in
          backend development, API testing, frontend technologies, and adaptable
          to learning new skills. Demonstrated success in leading impactful
          projects.
        </p>
      </div>

      {/* Right Box */}
      <div className="bg-green-100 p-6 mx-36 rounded-xl shadow-md flex items-center justify-center">
        <p className="text-xl font-semibold">Right Box Content</p>
      </div>
    </div>
  );
};

export default HeroSection;

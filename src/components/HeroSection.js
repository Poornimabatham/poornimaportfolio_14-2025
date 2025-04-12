import React from "react";

const HeroSection = () => {
  const handleMouseEnter = (event) => {
    const card = event.currentTarget;
    console.log(event.currentTarget, card.classList);
    card.classList.add("bg-white", "text-black");
    card.classList.remove("bg-purple", "text-black"); // Assuming you might have intended text-black
  };

  const handleMouseLeave = (event) => {
    const card = event.currentTarget;
    console.log(card, "handleMouseLeave");
    card.classList.add("bg-purple", "text-black"); // Revert to original colors (assuming text-black)
    card.classList.remove("bg-red", "text-white");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {/* Left Box */}
      <div
        className="bg-purple p-6 mx-8 rounded-xl shadow-md text-black" // Added initial text color
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h1 className="text-2xl font-bold mb-3">Hello!</h1>
        <h1 className="text-1xl font-medium ">I'm Poornima Batham</h1>
        <p className="mt-2">
          <span className=" text-sm  ">Junior Backend Developer</span>
        </p>
        <p className="mt-2">
          <span className="text-sm ">Address:-Gwalior ,Madhya Pradesh</span>
        </p>
        <p className=" mt-2 text-sm">
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
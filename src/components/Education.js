import React from "react";

const Education = () => {
  return (
    <div>
      {/* Title Section */}
      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="flex items-center justify-center bg-gray-100 p-3 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 text-2xl mb-8">
          Education
        </h1>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Education Block 1 */}
          <div className="bg-green-100 text-black p-4 py-9 rounded-md shadow-md hover:shadow-2xl transition-shadow duration-300">
            <h1 className="text-base py-2">2016-2020</h1>
            <h1 className="text-base py-2">
              Bachelor of Engineering in Electrical
            </h1>
            <p className="text-base">
              Vikrant Institute of Technology and Management
            </p>
            <p className="text-base">Gwalior (M.P), India</p>
          </div>

          {/* Education Block 2 */}
          <div className="bg-green-100 p-4 py-9 rounded-md shadow-md text-black hover:shadow-2xl transition-shadow duration-300">
            <h1 className="text-base py-2">2015-2016</h1>
            <h1 className="text-base py-2">Higher Secondary School</h1>
            <p className="text-base">
              New Adarsh Convent Higher Secondary School
            </p>
            <p className="text-base">Gwalior (M.P), India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

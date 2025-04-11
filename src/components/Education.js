import React from "react";

const Education = () => {
  return (
    <div>
      {/* Title Section */}
      <div className="flex items-center justify-center bg-gray-100 p-6 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold">Education</h1>
      </div>

      {/* Education Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 px-9">
        {/* Education Block 1 */}
        <div className="bg-white p-4 py-9 rounded-md shadow">
          <h1 className="text-2xl font-semibold py-2">2016-2020</h1>
          <h1 className="text-lg font-medium py-2">
            Bachelor of Engineering in Electrical
          </h1>
          <p>Vikrant Institute of Technology and Management</p>
          <p>Gwalior (M.P), India</p>
        </div>

        {/* Education Block 2 */}
        <div className="bg-white p-4 py-9 rounded-md shadow">
          <h1 className="text-2xl font-semibold py-2">2019-2020</h1>
          <h1 className="text-lg font-medium py-2">Higher Secondary School</h1>
          <p>New Adarsh Convent higher secondary school</p>
          <p>Gwalior (M.P), India</p>
        </div>
      </div>
    </div>
  );
};

export default Education;

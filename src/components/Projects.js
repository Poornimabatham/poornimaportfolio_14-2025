import React from "react";

const Projects = () => {
  return (
    <>
      {" "}
      <div className="flex items-center justify-center bg-gray-100 p-6 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold">Projects</h1>
      </div>
      <div className=" grid grid-cols-3">
        <div>
          <img src="https://play-lh.googleusercontent.com/WL6vNynsvN36rHOfTX2kmov_sDoDXVIrRrDEPSfgOqtPebbbKkyH-PcWoKXXwO4v1BY=s96-rw"></img>
          <p>Attendance App</p>
        </div>
        <div>
          <img src="C:\Users\pbath\Pictures\Screenshots\Screenshot 2025-04-10 220603.png"></img>
          <p>Human Resource Management Website</p>
        </div>
      </div>
    </>
  );
};

export default Projects;

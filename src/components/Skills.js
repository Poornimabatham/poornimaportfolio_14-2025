import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

const SkillsSection = ({ title, skills }) => (
  <div className="mb-8">
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center gap-2 p-4 bg-gray-100 rounded-xl shadow hover:shadow-md transition duration-300 ease-in-out"
        >
          <div className="text-4xl">{skill.icon}</div>
          <div className="text-md font-medium text-center">{skill.name}</div>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const frontendSkills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "React JS", icon: <FaReact className="text-cyan-400" /> },
  ];

  const backendSkills = [
    { name: "Node JS", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express", icon: <SiExpress className="text-gray-800" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "SQL", icon: <SiMysql className="text-blue-700" /> },
  ];

  const toolSkills = [
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  ];

  return (
    <div className="p-6">
      <h1 className=" flex items-center justify-center bg-gray-100 p-6 rounded-xl shadow-mdtext-3xl font-bold">
        Skills
      </h1>

      <SkillsSection title="Frontend" skills={frontendSkills} />
      <SkillsSection title="Backend" skills={backendSkills} />
      <SkillsSection title="Tools" skills={toolSkills} />
    </div>
  );
};

export default Skills;

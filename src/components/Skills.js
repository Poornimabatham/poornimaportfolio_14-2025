import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiBitbucket,
  SiKubernetes,
} from "react-icons/si";

import { SiPostman } from "react-icons/si";

// Reusable SkillsSection component
const SkillsSection = ({ title, skills }) => (
  <div  id="skills" className="bg-gray-50 p-4 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300">
    <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>
    <div className="grid grid-cols-3 gap-4">
      {skills.map((skill, index) => (
       <div key={index} className="flip-card h-24">
  <div className="flip-card-inner h-full">

    {/* Front */}
    <div className="flip-card-front flex flex-col items-center justify-center gap-2 p-3 bg-white rounded-lg shadow-sm">
      <div className="text-2xl">{skill.icon}</div>
      <div className="text-sm font-medium text-center">{skill.name}</div>
    </div>

    {/* Back */}
    <div className="flip-card-back flex items-center justify-center p-3 bg-blue-500 text-white rounded-lg shadow-sm">
      <div className="text-sm font-medium text-center  whitespace-nowrap">{skill.name}</div>
    </div>

  </div>
</div>

      ))}
    </div>
  </div>
);

// Main Skills component
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
    {
      name: "Node JS",
      icon: (
        <FaNodeJs className="text-green-600 shadow-md hover:shadow-2xl transition-shadow duration-300" />
      ),
    },
    {
      name: "Express",
      icon: (
        <SiExpress className="text-gray-800 shadow-md hover:shadow-2xl transition-shadow duration-300" />
      ),
    },
    {
      name: "MongoDB",
      icon: (
        <SiMongodb className="text-green-500 shadow-md hover:shadow-2xl transition-shadow duration-300" />
      ),
    },
    { name: "SQL", icon: <SiMysql className="text-blue-700" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
  ];

 const toolSkills = [
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-900" /> },
  { name: "Bitbucket", icon: <SiBitbucket className="text-blue-600" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500" /> },
  { name: "Thunder Client", icon: <span className="text-purple-500 font-bold text-xs">TC</span> },
];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="flex items-center justify-center bg-gray-100 p-3 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 text-2xl  mb-8">
        Skills
      </h1>

      {/* Responsive Grid for Sections */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 ">
        <SkillsSection title="Frontend" skills={frontendSkills} />
        <SkillsSection title="Backend" skills={backendSkills} />
        <SkillsSection title="Tools" skills={toolSkills} />
      </div>
    </div>
  );
};

export default Skills;

import React from "react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
const JobCard = ({
  title,
  location,
  education,
  experience,
  responsibilities,
  requirements,
  email,
}) => {
  return (
    <div className="border rounded-lg p-6 w-full shadow-lg bg-white max-w-md transition-transform duration-300 hover:scale-105">
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      <p className="text-gray-600">{location}</p>

      <div className="mt-2">
        <p className="flex items-center text-gray-700">
          🎓 <span className="ml-2">{education}</span>
        </p>
        <p className="flex items-center text-gray-700">
          ⏳ <span className="ml-2">Experience: {experience}</span>
        </p>
      </div>

      <h3 className="mt-4 font-semibold text-gray-800">Key Responsibilities</h3>
      <div className="flex flex-col text-gray-700">
        {responsibilities.map((item, index) => (
          <div className="flex items-center gap-1">
            <IoCheckmarkCircleSharp color="red" />
            <span key={index}>{item}</span>
          </div>
        ))}
      </div>

      <h3 className="mt-4 font-semibold text-gray-800">You should have</h3>
      <div className="flex flex-col text-gray-700">
        {requirements.map((item, index) => (
          <div className="flex items-center gap-1">
            <IoCheckmarkCircleSharp color="green" />
            <span key={index}>{item}</span>
          </div>
        ))}
      </div>

      <p className="mt-4 font-semibold text-green-700">
        📩 Mail your resume to{" "}
        <a href={`mailto:${email}`} className="underline">
          {email}
        </a>
      </p>
    </div>
  );
};

export default JobCard;

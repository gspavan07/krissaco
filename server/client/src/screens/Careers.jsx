import React from "react";
import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";
import { FaBriefcase } from "react-icons/fa";
import Footer from "../components/Footer";
const Careers = () => {
  const jobs = [
    {
      title: "Sales & Marketing Executive ",
      location: "Bengaluru",
      education: "B.Sc in Agriculture/Horticulture or B.Tech in Agri Engg",
      experience: "0-2 years",
      responsibilities: [
        "Achieve sales targets and grow business",
        "Promote and sell tech-driven services to Agri sector",
        "Develop and maintain relationships with customers",
        "Conduct market research",
        "Connect with trade fairs and institutional players",
        "Assist in product demonstrations and customer support",
        "Assist in executing marketing campaigns",
        "Assist in sales strategies",
      ],
      requirements: [
        "Proficiency in English communication",
        "Proficiency in speaking in Kannada",
        "Proficiency in Excel (intermediate)",
        "Exposure to designing skills (Figma/Canva) (desired)",
        "Exposure to digital marketing concepts (desired)",
        "Willingness to travel and meet clients onsite",
        "Attention to details and results",
        "Ability to work independently",
      ],
      email: "positions@koyya.in",
    },
    {
      title: "IoT Interns Online",
      location: "Online",
      education: "B.Tech in ECE/IT/CSE",
      experience: "Undergraduates",
      responsibilities: [
        "Conducting technical research",
        "Participating in PoC initiatives",
        "Supporting in component procurement",
        "Supporting in assembly",
        "Supporting in software development",
        "Supporting in verification",
        "Developing documentation",
      ],
      requirements: [
        "Proficiency in English communication",
        "Attention to details and results",
        "Ability to work independently",
        "Exposure to IoT technology",
        "Prior experience in build IoT solutions is desired",
      ],
      email: "positions@koyya.in",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="my-10">
        <div className=" flex flex-col text-4xl font-bold justify-center  items-center">
          <FaBriefcase /> Career Opportunities
        </div>
        <div className="p-6 flex flex-wrap gap-4 justify-center">
          {jobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;

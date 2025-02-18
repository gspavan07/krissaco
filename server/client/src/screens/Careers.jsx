import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";
import { FaBriefcase } from "react-icons/fa";
import Footer from "../components/Footer";
const Careers = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/api/jobs", {
          method: "POST", // Use GET if you are retrieving data
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const result = await res.json();
        setJobs(result.jobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="my-10">
        <div className=" flex flex-col text-4xl font-bold justify-center  items-center">
          <FaBriefcase /> Career Opportunities
        </div>
        <div className="p-6 flex flex-wrap gap-4 justify-center">
          {jobs.map((job, index) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;

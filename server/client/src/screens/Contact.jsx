import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
const Contact = () => {
  const [button,setButton] = useState(true)
  const [Submited,setSubmited] = useState(false)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButton(false)
    try {
      const response = await fetch("/api/contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ firstName: "", lastName: "", email: "", message: "" }); // Clear the form
        setButton(true)
        setSubmited(true)
        setInterval(() => {
          setSubmited(false)
        }, 2000);
      } else {
        setButton(true)
        console.log("There was an error sending your message.");
      }
    } catch (error) {
      setButton(true)
      console.error("Error:", error);
    }
  };
  return (
    <div className="flex flex-col min-h-screen bg-green-50 text-black">
      <Navbar />
      <div className="relative w-full h-[90vh] flex justify-center items-center">
        {Submited&&<div className="absolute shadow-xl flex flex-col justify-center items-center gap-2 rounded-2xl z-10 px-10 py-5 bg-white">
        <IoCheckmarkCircleOutline color="green" size={100}/>
        Submited
        </div>}
        {/* Outer container for the form */}
        <div className="w-full max-w-2xl bg-white p-8 rounded shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-700">
            Get in Touch
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* First Name & Last Name */}
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="w-full mb-4 md:mb-0">
                <label
                  className="block mb-1 font-semibold text-gray-600"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  type="text"
                  required
                  placeholder="Please enter first name"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  onChange={handleChange}
                />
              </div>

              <div className="w-full">
                <label
                  className="block mb-1 font-semibold text-gray-600"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  type="text"
                  required
                  placeholder="Please enter last name"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Email & Phone Number */}
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="w-full mb-4 md:mb-0">
                <label
                  className="block mb-1 font-semibold text-gray-600"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  value={formData.email}
                  type="email"
                  required
                  placeholder="Please enter email"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Message/Query */}
            <div>
              <label
                className="block mb-1 font-semibold text-gray-600"
                htmlFor="message"
              >
                What do you have in mind
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                rows="4"
                required
                placeholder="Please enter your query..."
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                onChange={handleChange}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!button}
              className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
          
          {button ? "Submit" : "Submitting..."} {/* Change text when submitting */}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

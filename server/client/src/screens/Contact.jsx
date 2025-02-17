import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Contact = () => {
  return (
    <div>
        <Navbar/>
    <div className="h-screen overflow-hidden bg-neutral-100 flex items-center justify-center  text-black p-6">
    <section className="p-20 bg-slate-600 text-white flex flex-col md:flex-row gap-8 rounded-2xl">
      <article className="md:w-1/2">
        <h2 className="text-3xl font-bold text-green-600">Contact Us</h2>
        <p className="mt-2 text-gray-300">
          Feel free to get in touch. Always open to discussing new projects.
        </p>
        <p className="mt-4 flex items-center gap-2">
          ✉️ <span>@mail.com</span>
        </p>
        <p className="flex items-center gap-2">
          📞 <span>+91 </span>
        </p>
      </article>

      <form className="md:w-1/2 flex flex-col gap-4">
        <input type="text" placeholder="Enter your Name" className="p-2 bg-slate-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-green-600" />
        <input type="email" placeholder="Enter a valid email address" className="p-2 bg-slate-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-green-600" />
        <textarea placeholder="Enter your message" className="p-2 bg-slate-700 border border-slate-600 rounded h-24 focus:outline-none focus:ring-2 focus:ring-green-600" />
        <button className="p-2 bg-green-600 text-gray-900 font-semibold rounded hover:bg-green-700">SUBMIT</button>
      </form>
    </section>
    </div>
    <Footer/>
    </div>
  );
};

export default Contact;

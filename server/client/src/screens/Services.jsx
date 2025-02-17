import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MdOutlineFlight } from "react-icons/md";
const Services = () => {
  return (
    <div>
      <Navbar />

      <img
        src="img/slide1.png"
        alt=""
        className="flex w-full max-h-[75vh] object-cover"
      />

      <div className="md:p-20 p-5 text-justify">
        <p className="text-lg text-gray-700 pb-5">
          Krissaco Sleek is a subscription-based SaaS ERP application
          specifically designed for the food processing industry. Tailored to
          meet small and medium food processing units’ unique needs, Sleek
          offers a comprehensive range of features to automate and streamline
          operations over time.
        </p>
        <p className="text-lg text-gray-700 pb-5">
          Sleek is more than just software—it’s your digital processing
          notebook, calculator, analyzer, and report maker all in one. How does
          Sleek achieve this? By recording your inputs and processing them to
          deliver valuable insights, Sleek helps you identify areas for
          improvement, optimizing your processing flow. With just a simple
          click, you can access insights, inputs, and projections, presented
          through intuitive graphs, tables, and numerical data for easy
          understanding.
        </p>
        <h1 className="text-2xl font-bold mb-4 ">
          Key Features of Krissaco Sleek
        </h1>
        <h1 className="text-xl text-gray-600 font-bold mb-4 ">Data Entry</h1>
        <p className="text-lg text-gray-700 pb-5">
          Record and manage all relevant data related to your food processing
          operations.
        </p>
        <h1 className="text-xl text-gray-600  font-bold mb-4 ">Dashboard</h1>
        <p className="text-lg text-gray-700 pb-5">
          Visualize your data through graphs and numerical displays, enabling
          detailed analysis of each stage’s performance throughout the day.
          Sleek also allows for easy editing of entries if temporary data is
          entered and provides notifications for any changes made.
        </p>
        <h1 className="text-xl text-gray-600 font-bold mb-4 ">Insights</h1>
        <p className="text-lg text-gray-700 pb-5">
          Krissaco Sleek provides in-depth insights into your food processing
          operations. By analyzing your input data, Sleek highlights areas where
          efficiencies can be improved and potential bottlenecks can be
          eliminated. Track performance metrics for different stages of your
          processing workflow, identify trends and make data-driven decisions to
          enhance productivity. Insights are presented in easy-to-understand
          graphs and numerical data for quick interpretation and action. This
          feature allows you to analyze data holding months together long.
        </p>
        <h1 className="text-xl text-gray-600 font-bold mb-4 ">Reports</h1>
        <p className="text-lg text-gray-700 pb-5">
          Generate detailed, printable reports tailored to your specific needs.
          Whether you need reports for all stages or just particular ones, Sleek
          offers flexibility in report generation. These reports help you track
          operational performance, compare different stages, and evaluate the
          effectiveness of your processes. The comprehensive reports provide a
          complete overview of your food processing operations, making it easy
          to access and share, ensuring transparency and facilitating better
          communication within your team.
        </p>
        <div className="text-4xl flex items-center te font-bold ">
          <MdOutlineFlight size={40} color="green" className="rotate-90" />
          <span>Sleek Beta, soon!</span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;

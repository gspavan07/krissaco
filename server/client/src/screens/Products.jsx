import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaBullhorn } from "react-icons/fa";
const Products = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full items-center justify-start flex flex-col p-6 md:p-14">
        <img src="logo192.png" alt="" className="w-44 h-20 object-cover" />

        <h1 className="text-2xl font-bold text-left w-full my-4">
          Urban Brews
        </h1>

        <p className="text-gray-700 text-justify text-lg mb-6">
          Ever tasted something like filter coffee but far better? Try
          <strong> "Urban Brews"</strong>, the first taste of Krissaco Coffee.
          Sourced from the scenic Western Ghats in Chikkamagaluru, Urban Brews
          encapsulates the rich aromas of western India. With a blend that’s not
          too heavy on chicory and not far removed from the everyday coffee that
          both modern and traditional coffee lovers enjoy, this brew is crafted
          to offer a balanced and delightful experience.Urban Brews brings you a
          unique blend of 80:20, striking the ideal balance between coffee and
          chicory. It delivers the authentic filter coffee taste many love but
          with an elevated experience that stands out. Each sip carries a depth
          of flavor, whether you’re starting your day or seeking a moment of
          relaxation. Urban Brews brings you a unique blend of 80:20, striking
          the ideal balance between coffee and chicory. It delivers the
          authentic filter coffee taste many love but with an elevated
          experience that stands out. Each sip carries a depth of flavor,
          whether you’re starting your day or seeking a moment of relaxation.
          Designed for coffee enthusiasts, Urban Brews is the perfect brew for
          those who crave a rich and aromatic coffee experience. Whether you’re
          a traditionalist who enjoys the classic filter coffee or a modern
          coffee lover exploring new flavors, Urban Brews satisfies every
          palate.At Krissaco, we understand the importance of well-being. That’s
          why Urban Brews is crafted with your health in mind. The balanced
          blend ensures you enjoy the perfect cup without compromising on health
          benefits, making it a brew you can enjoy guilt-free every day.
        </p>

        <div>
          <div className="md:w-1/1 flex flex-wrap md:flex-nowrap gap-10">
            <div className="md:w-1/3 flex justify-center">
              <div className="text-center">
                <img
                  src="img/slide3.png"
                  alt="Urban Brews Coffee"
                  className="w-full max-w-xl rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                />
                <p className="mt-1 text-xl font-semibold">
                  Perfect Blend of Tradition and Innovation
                </p>
              </div>
            </div>
            <div className="md:w-1/3 flex  justify-center">
              <div className="text-center">
                <img
                  src="img/slide4.png"
                  alt="Urban Brews Coffee"
                  className="w-full max-w-xl rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                />
                <p className="mt-1 text-xl font-semibold">
                  Crafted for Coffee Lovers
                </p>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="text-center">
                <img
                  src="img/slide2.png"
                  alt="Urban Brews Coffee"
                  className="w-full max-w-5xl rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                />
                <p className="mt-1 text-xl font-semibold">
                  Health and Well-being in Every Sip
                </p>
              </div>
            </div>
          </div>
        </div>
      <div className="text-4xl flex mt-8 font-bold ">
        <FaBullhorn size={40} color="green" />
        <span className="ml-3">Will be in the market, soon!</span>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;

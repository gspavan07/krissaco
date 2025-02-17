import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { FaBox } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoCloud } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [MenuToggle, setMenuToggle] = useState(false);
  return (
    <nav className=" bg-white border-b border-gray-200 shadow-sm">
      <div className="px-4 md:mx-8 lg:mx-14 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center">
            <img src={logo} alt="CoachOn Logo" className="md:h-10 h-8" />
          </div>
        </Link>
        {/*Small Screen Navbar Items */}
        <div className="lg:hidden block">
          {MenuToggle ? (
            <div className="scale-up-hor-right z-20 fixed top-0 right-0 h-fit bg-white shadow-lg">
              <div className="flex items-center justify-between px-4 md:py-5 py-4 border-b">
                <span className="text-lg font-bold">Menu</span>
                <IoMdClose
                  className="size-[1.5rem]"
                  onClick={() => setMenuToggle(false)}
                />
              </div>
              {/* Navbar Items */}
              <ul className="p-10 space-y-8">
                {/* Product */}
                <div>
                  <Link
                    to="/products"
                    className="text-gray-600 hover:text-black text-base flex items-center"
                  >
                    <FaBox color="green" />
                    <span className="font-medium ml-2">Product</span>
                  </Link>
                </div>
                {/* Services */}
                <div>
                  <Link
                    to="/Services"
                    className="text-gray-600 hover:text-black text-base flex items-center"
                  >
                    <IoCloud color="green" size={20} />
                    <span className="font-medium ml-2">Services</span>
                  </Link>
                </div>
                {/* Careers */}
                <div>
                  <Link
                    to="/careers"
                    className="text-gray-600 hover:text-black text-base flex items-center"
                  >
                    <FaPeopleGroup color="green" size={22} />
                    <span className="font-medium ml-2">Careers</span>
                  </Link>
                </div>
              </ul>
            </div>
          ) : (
            <CiMenuBurger
              className="size-[1.35rem]"
              onClick={() => setMenuToggle(true)}
            />
          )}
        </div>
        {/* Navbar Items */}
        <div className="space-x-8 lg:flex hidden items-center">
          {/* Products */}
          <div>
            <Link
              to="/products"
              className="text-gray-600 hover:text-black text-base flex items-center"
            >
              <FaBox color="green" />
              <span className="font-medium ml-2">Products</span>
            </Link>
          </div>
          {/* Services */}
          <div>
            <Link
              to="/services"
              className="text-gray-600 hover:text-black text-base flex items-center"
            >
              <IoCloud color="green" size={20} />
              <span className="font-medium ml-2">Services</span>
            </Link>
          </div>
          {/* Careers */}
          <div>
            <Link
              to="/careers"
              className="text-gray-600 hover:text-black text-base flex items-center"
            >
              <FaPeopleGroup color="green" size={22} />
              <span className="font-medium ml-2">Careers</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

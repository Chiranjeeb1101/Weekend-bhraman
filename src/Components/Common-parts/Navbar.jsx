import React from "react";
import Logo from "../../assets/wb.svg";

const Navbar = () => {
  return (
    <header className="w-full shadow relative">
      <div className="bg-gradient-to-r from-[#063A64] to-[#1b7ccb] text-white px-8 py-2 flex justify-end items-center text-sm">
        <div className="flex items-center gap-2">
          <span className="italic text-green-300">Call Us on →</span>
          <span className="font-semibold">
            +91 8178958591, +91 9310366002
          </span>
        </div>
        <div className="flex items-center gap-3 ml-6">
          <span className="bg-purple-500 p-1 rounded text-white text-xs">💬</span>
          <span className="bg-green-500 p-1 rounded text-white text-xs">🟢</span>
          <span className="text-yellow-300 font-bold">V.2.0.0</span>
        </div>
      </div>

      <div className="bg-white  flex items-center justify-between relative px-8 py-4 shadow-lg">
        <div className="absolute ">
          <img src={Logo} alt="Logo" className="h-21 w-auto -translate-x-20 -translate-y-4" />
        </div>

        <div className="w-64"></div>

        <nav className="hidden md:flex items-center gap-8 text">
          <a href="#" className="text-orange-500 font-semibold border-b-2 border-orange-500">Home</a>
          <a href="#" className="hover:text-orange-500 font-medium hover:border-b-2 border-orange-500">Destinations</a>
          <a href="#" className="hover:text-orange-500 font-medium hover:border-b-2 border-orange-500">About</a>
          <a href="#" className="hover:text-orange-500 font-medium hover:border-b-2 border-orange-500">Gallery</a>
          <a href="#" className="hover:text-orange-500 font-medium hover:border-b-2 border-orange-500">Contact</a>
          <a href="#" className="hover:text-orange-500 font-medium hover:border-b-2 border-orange-500">Feedback</a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex gap-3">
            <button className="flex flex-col items-center text-sm font-semibold">
              <div className="bg-yellow-200 p-2 rounded-full shadow">🏨</div>
              Hotel Booking
            </button>
            <button className="flex flex-col items-center text-sm font-semibold">
              <div className="bg-blue-200 p-2 rounded-full shadow">🚕</div>
              Cab Booking
            </button>
          </div>

          <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold px-5 py-2 rounded-md flex items-center gap-2 shadow hover:from-orange-500 hover:to-yellow-400">
            Login <span>➡️</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

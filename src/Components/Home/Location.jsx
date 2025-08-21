import React from "react";
import Nepal from "../../assets/Nepal.jpg";
import Bhutan from "../../assets/Bhutan.avif";
import Delhi from "../../assets/Delhi.jpg";
import Kashmir from "../../assets/Kashmir.jpeg";
import Rajasthan from "../../assets/Rajasthan.jpg";
import Goa from "../../assets/Goa.webp";
import Ujjain from "../../assets/Ujjain.jpg";
import Uttarakhand from "../../assets/Uttarakhand.jpg";
import Manali from "../../assets/Manali.jpg";
import Himachal from "../../assets/Himachal.jpg";
import Langkawi from "../../assets/LangKawi.jpg";
const hotspots = [
  { name: "Nepal", image: Nepal },
  { name: "Bhutan", image: Bhutan },
  { name: "Delhi", image: Delhi },
  { name: "Kashmir", image: Kashmir },
  { name: "Rajasthan", image: Rajasthan },
  { name: "Goa", image: Goa },
  { name: "Ujjain", image: Ujjain },
  { name: "Uttarakhand", image: Uttarakhand },
  { name: "Manali", image: Manali },
  { name: "Himachal", image: Himachal },
  { name: "Langkawi", image: Langkawi },
];

const Location = () => {
  return (
    <section className="max-w-7xxl md:mx-16 py-3 px-6">
      <p className="text-center text-orange-600 font-medium">Tours By Location</p>
      <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 mb-10">
        Travel Hotspots
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {hotspots.map((spot, index) => (
          <button
            key={index}
            className="flex items-center gap-4 bg-white shadow-md rounded-lg p-4 transition hover:scale-105 hover:shadow-xl focus:ring-2 focus:ring-orange-500"
          >
            <img
              src={spot.image}
              alt={spot.name}
              className="w-24 h-24 object-cover rounded-full"
            />
            <div className="text-left">
              <h3 className="text-lg font-bold text-gray-900">{spot.name}</h3>
              <p className="text-sm text-gray-600">Tour</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Location;

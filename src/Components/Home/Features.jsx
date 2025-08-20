import React from "react";
import Features1 from "../../assets/Features1.svg";
import Features2 from "../../assets/Features2.svg";
import Features3 from "../../assets/Features3.svg";
import Features4 from "../../assets/Features4.svg";

const Data = [
  {
    id: 1,
    img: Features1,
    iconColor: "text-orange-500",
    title: "500+ Our Statewide Guides",
    icon: "👥",
  },
  {
    id: 2,
    img: Features2,
    iconColor: "text-blue-500",
    title: "12+ Years of Travel Experience",
    icon: "🌍",
  },
  {
    id: 3,
    img: Features3,
    iconColor: "text-orange-500",
    title: "Hygienic Vehicle & Professional Drivers",
    icon: "🚐",
  },
  {
    id: 4,
    img: Features4,
    iconColor: "text-blue-500",
    title: "100% Customer Satisfaction",
    icon: "⭐",
  },
];

const Features = () => {
  return (
    <section className=" bg-white md:mx-16 mb-6">
      <div className="text-center mb-10">
        <p className="text-orange-500 font-medium">Why Choose Us!</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          <span>Why Travel with Weekend Bhraman?</span>
        </h2>
      </div>
      <div className="max-w-7xxl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 ">
        {Data.map((Data) => (
          <div
            key={Data.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <div className="h-48 w-full overflow-hidden">
              <img
                src={Data.img}
                alt={Data.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 text-center relative">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md text-2xl ${Data.iconColor}`}
                >
                  {Data.icon}
                </div>
              </div>

              <h3 className="mt-5 font-semibold text-lg text-gray-800">
                {Data.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

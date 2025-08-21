import React from "react";
import Remember1 from "../../assets/Remember-Location.png";
import Remember2 from "../../assets/Tour-Guides.png";
import Remember3 from "../../assets/Vehicles.png";
import Remember4 from "../../assets/Happy-Clients.png";
import GoTravel from "../../assets/Remember.png";

const stats = [
  {
    id: 1,
    img: Remember1,
    number: "100+",
    label: "Stunning Places",
  },
  {
    id: 2,
    img: Remember2,
    number: "50+",
    label: "Tour Guides",
  },
  {
    id: 3,
    img: Remember3,
    number: "50+",
    label: "Vehicles",
  },
  {
    id: 4,
    img: Remember4,
    number: "500+",
    label: "Happy Clients",
  },
];

const Remember = () => {
  return (
    <section className="mx-4 sm:mx-6 md:mx-12 lg:mx-16 my-6 md:my-12 lg:my-16 relative">
      <img
        src={GoTravel}
        alt="Go Travel"
        className="absolute top-4 left-2 md:top-12 md:left-6 lg:top-16 lg:-left-2 xl:top-7 xl:left-4 hidden lg:block rounded-lg shadow-xl lg:h-[70%] xl:h-[85%]"
      />

      <div className="bg-[#0791BE] text-white p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center lg:ml-32 xl:ml-48 rounded-lg">
        <div className="lg:ml-72 xl:ml-56">
          <p className="capitalize font-serif text-base md:text-lg mb-2">
            Call back for more
          </p>
          <h1 className="text-xl sm:text-2xl md:text-4xl xl:text-5xl font-bold mb-4 leading-snug">
            Go Travel. Discover. Remember Us !!!
          </h1>
          <p className="opacity-70 w-full lg:w-[80%] xl:w-[60%] mb-6 sm:mb-8 tracking-wide text-sm sm:text-base">
            We would love to help you realize your travel dreams. Take the first
            steps towards making your dream a reality.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {stats.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row gap-2 md:gap-4 items-center"
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
                />
                <div className="flex flex-col items-center md:items-start">
                  <h2 className="text-xl md:text-2xl font-bold">
                    {item.number}
                  </h2>
                  <p className="text-sm md:text-base text-center md:text-start">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Remember;

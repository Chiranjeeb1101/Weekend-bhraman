import React from "react";
import Categories1 from "../../assets/Categories1.jpg";
import Categories2 from "../../assets/Categories1.jpg";
import Categories3 from "../../assets/Categories1.jpg";
import Categories4 from "../../assets/Categories1.jpg";
import Categories5 from "../../assets/Categories1.jpg";
import Categories6 from "../../assets/Categories1.jpg";
import Categories7 from "../../assets/Categories1.jpg";
import Categories8 from "../../assets/Categories1.jpg";
import Categories9 from "../../assets/Categories1.jpg";
import Categories10 from "../../assets/Categories1.jpg";

const tours = [
  { title: "Spiritual Tours", image: Categories1 },
    { title: "Honeymoon Tours", image: Categories2 },
    { title: "Hills Tours", image: Categories3 },
    { title: "Family Tours", image: Categories4 },
    { title: "Corporate Tours", image: Categories5 },
    { title: "Adventure Tours", image: Categories6 },
    { title: "Trekking Tours", image: Categories7 },
    { title: "Winter Tours", image: Categories8 },
    { title: "Goldentriangle Tours", image: Categories9 },
    { title: "International Tours", image: Categories10 }
];

const Categories = () => {
  return (
    <section className="py-12 px-6 md:px-16">
      <p className="text-center text-orange-500 font-medium">Tour Categories</p>
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-10">
        Holiday Destinations
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {tours.map((tour, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden group cursor-pointer shadow-md"
          >
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-48 object-cover transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300"></div>

            <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold z-10">
              {tour.title}
            </h3>


            <span className="absolute top-3 right-3 text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              ↗️
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;

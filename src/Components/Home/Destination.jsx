import React from "react";
import Destination1 from "../../assets/Destination1.png";
import Destination2 from "../../assets/Destination2.png";
import Destination3 from "../../assets/Destination3.png";
import Destination4 from "../../assets/Destination4.png";
import Destination5 from "../../assets/Destination5.png";
import Destination6 from "../../assets/Destination6.png";
import Destination7 from "../../assets/Destination7.png";
import Destination8 from "../../assets/Destination8.png";

const tours = [
  {
    id: 1,
    images: [
      Destination1
    ],
    title: "CHARDHAM YATRA FROM DELHI 11N | 12D Starting",
    price: "Starting From 18,900/PP",
    location: "Delhi",
    days: "12 Days",
    ratings: 5,
    date: "24/04/2025",
  },
  {
    id: 2,
    images: [
      Destination2
    ],
    title: "CHARDHAM YATRA FROM HARIDWAR 9N | 10D",
    price: "Starting From 15,900/PP",
    location: "Delhi",
    days: "10 Days",
    ratings: 5,
    date: "24/04/2025",
  },
  {
    id: 3,
    images: [
      Destination3
    ],
    title: "KEDARNATH - BADRINATH FROM DELHI 7N | 8D",
    price: "Starting From 12,900/PP",
    location: "Delhi",
    days: "8 Days",
    ratings: 5,
    date: "24/04/2025",
  },
    {
    id: 4,
    images: [
      Destination4
    ],
    title: "KEDARNATH - BADRINATH FROM HARIDWAR 5N | 6D",
    price: "Starting From 12,900/PP",
    location: "Delhi",
    days: "8 Days",
    ratings: 5,
    date: "24/04/2025",
  },
    {
    id: 5,
    images: [
      Destination5
    ],
    title: "KEDARNATH - BADRINATH FROM DELHI 7N | 8D",
    price: "Starting From 12,900/PP",
    location: "Delhi",
    days: "8 Days",
    ratings: 5,
    date: "24/04/2025",
  },
    {
    id: 6,
    images: [
      Destination6
    ],
    title: "KEDARNATH - BADRINATH FROM DELHI 7N | 8D",
    price: "Starting From 12,900/PP",
    location: "Delhi",
    days: "8 Days",
    ratings: 5,
    date: "24/04/2025",
  },
    {
    id: 7,
    images: [
      Destination7
    ],
    title: "AULI - JOSHIMATH FROM HARIDWAR-DELHI 2N | 3D",
    price: "Starting From 12,900/PP",
    location: "Delhi",
    days: "8 Days",
    ratings: 5,
    date: "24/04/2025",
  },
    {
    id: 8,
    images: [
      Destination8
    ],
    title: "Amazing Himalayan Tour Adventure - Lets Make Some Memories",
    price: "Starting From 12,900/PP",
    location: "Delhi",
    days: "8 Days",
    ratings: 5,
    date: "24/04/2025",
  },
];

const Destination = () => {
  return (
    <section className="max-w-7xxl md:mx-16 py-12 px-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-orange-600 font-medium">Our Destinations</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Most Trending Tours!
          </h2>
        </div>
        <button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-medium px-5 py-2 rounded-full shadow hover:opacity-90 transition">
          View All Tours
        </button>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden border"
          >
            <div>
              {tour.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="tour"
                  className="w-full h-64 object-cover"
                />
              ))}
            </div>

            <div className="p-4">
              <h3 className="font-bold text-lg text-gray-900 leading-snug border-b border-gray-300">
                {tour.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">{tour.price}</p>

              <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm mb-3 border-b border-gray-300">
                {tour.location && (
                  <span className="flex items-center gap-1">
                    🧭 {tour.location}
                  </span>
                )}
                {tour.date && (
                  <span className="flex items-center gap-1">📅 {tour.date}</span>
                )}
                <span className="flex items-center gap-1">🕒 {tour.days}</span>
                <span className="flex items-center gap-1 ">
                  ⭐ {tour.ratings} Ratings
                </span>
              </div >


              <button className=" w-full flex justify-center items-center gap-2 text-Black font-medium py-2 pb-0 ">
                Explore Now →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destination;

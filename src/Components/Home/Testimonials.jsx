import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Preeti Thakur",
    // image: Client1,
    text: "Best braham ever had ..go for it guys ... cheapest trip ever had ...best one",
  },
  {
    id: 2,
    name: "Bipin bisht",
    // image: Client2,
    text: "The best trip planner you can get. They have in and out knowledge. They will make your trip smooth and without any worry. Provided us with best hotel with quality food, and 24/7 assistance. Diwakar and team are best.",
  },
  {
    id: 3,
    name: "Deeefreak",
    // image: Client3,
    text: "Visit many places with the help of this planner. They are providing the best guide with the best facilities for our tours.",
  },
  {
    id: 4,
    name: "Ranjeet Kumar",
    // image: Client4,
    text: "Booked Manali package from Weekend Bhraman. Such great services. I recommended for future trips. Thank you.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-3 px-6 md:mx-16">
      <div className="text-Left mb-6 flex-justify-between">
        <div>
        <p className="text-orange-500 font-semibold">Our Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What Our Clients Says
        </h2>
        </div>
      <div className=" flex-justify-between space-x-4">
      </div>
      </div>
      <div className="max-w-7xxl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-xl p-4 flex flex-col justify-between transition-transform hover:scale-105"
          >
            <div>
              <span className="text-3xl font-bold text-blue-900 float-right">
                ”
              </span>
              <div className="flex text-yellow-400 text-lg mb-3">
                ★★★★☆
              </div>
              <p className="text-gray-700 mb-6">{item.text}</p>
            </div>

            <div className="mt-6 flex items-center gap-3 bg-yellow-50 p-3 rounded-xl">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full border-2 border-yellow-300 object-cover"
              />
              <p className="font-semibold text-orange-500">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

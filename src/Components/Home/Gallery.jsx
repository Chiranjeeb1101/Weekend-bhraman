import React from "react";
import Gallery1 from "../../assets/Gallery1.png";
import Gallery2 from "../../assets/Gallery2.png";
import Gallery3 from "../../assets/Gallery3.png";
import Gallery4 from "../../assets/Gallery4.png";

function Gallery() {
  return (
    <section className="max-w-7xxl py-3 px-6 md:mx-16 ">
      <div className="grid md:grid-cols-2 gap-8 items-start mb-6">
        <div>
          <p className="text-orange-600 font-medium mb-2">Our Tour Gallery</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-4">
            Traveler's <br /> Shared Photo
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Here we are showing top traveler's shared photos & videos. All tour photos are available on the gallery page. You can check there for more.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src={Gallery1}
              alt="Mountains and Vehicles"
              className="w-full h-58 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img
              src={Gallery2}
              alt="Group at Temple"
              className="w-full h-58 object-cover"
            />
          </div>
        </div>
      </div>

      <div className="md:grid grid-cols-5 gap-4 ">
        <div className="md:col-span-2 col-span-3  rounded-lg overflow-hidden shadow-md">
          <img
            src={Gallery3}
            alt="Atal Tunnel Rohtang"
            className="w-full aspect-square md:h-96 object-cover"
          />
        </div>
        <div className="col-span-3 rounded-lg overflow-hidden shadow-md">
          <img
            src={Gallery4}
            alt="Kedarnath Temple"
            className="w-full aspect-square md:h-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Gallery;
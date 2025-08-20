import React, { useState, useEffect } from "react";
import Hero1 from "../../assets/Hero1.webp";
import Hero2 from "../../assets/Hero2.webp";
import Hero3 from "../../assets/Hero3.webp";
import Hero4 from "../../assets/Hero4.webp";

const slides = [
  {
    id: 1,
    image: Hero1,
    title: "Nepal",
    subtitle: "Travelling Around India",
  },
  {
    id: 2,
    image: Hero2,
    title: "Bhutan",
    subtitle: "Travelling Around India",
  },
  {
    id: 3,
    image: Hero3,
    title: "Sikkim",
    subtitle: "Explore India Hasslefree",
  },
  {
    id: 4,
    image: Hero4,
    title: "Darjeeling",
    subtitle: "Explore India Hasslefree",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[75vh] md:h-[75vh] max-h-screen overflow-hidden ">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-blue-500 scale-110" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      <button
        onClick={() =>
          setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/40 hover:bg-white/70 p-2 rounded-full text-lg"
      >
        ◀
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/40 hover:bg-white/70 p-2 rounded-full text-lg"
      >
        ▶
      </button>
    </div>
  );
};

export default Hero;

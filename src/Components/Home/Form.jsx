import React, { useState } from "react";
import FormLogo from "../../assets/FormLogo.svg";
const Form = () => {
  const [filters, setFilters] = useState({
    price: "",
    package: "",
    location: "",
    category: "",
    search: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching with filters:", filters);
  };

  const handleReset = () => {
    setFilters({
      price: "",
      package: "",
      location: "",
      category: "",
      search: "",
    });
  };

  return (
    <div className="bg-white shadow-lg max-w-7xxl  md:mx-16 pt-8">
      <div className="bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-xl p-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-yellow-400">
            Book Your Perfect Tour
          </h2>
          <p className="text-sm text-white/90">
            Select your preferences and explore top tour options.
          </p>
        </div>
        <div className="  rounded-lg shadow">
          <img src={FormLogo} alt="Form Logo" className="h-12" />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Price</label>
          <select
            name="price"
            value={filters.price}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="">Select Price</option>
            <option value="low">₹5,000 - ₹10,000</option>
            <option value="mid">₹10,000 - ₹20,000</option>
            <option value="high">₹20,000+</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Package Type</label>
          <select
            name="package"
            value={filters.package}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="">Select Package</option>
            <option value="family">Family</option>
            <option value="honeymoon">Honeymoon</option>
            <option value="adventure">Adventure</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Location Category</label>
          <select
            name="locationCategory"
            value={filters.location}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="">Select Location</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
            <option value="bangalore">Bangalore</option>
          </select>
        </div>

        
        <div className="flex flex-col  md:col-span-1 lg:col-span-1">
            <label className="block text-gray-700 font-medium mb-2">Want to go for your ideal tour?</label>
          <button
            type="submit"
            className="bg-gradient-to-r from-orange-400 to-yellow-500 text-white font-medium px-4 py-2 rounded-lg shadow hover:opacity-90"
          >
            🔍 Please, Search the Tour
          </button>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Departure City</label>
          <select
            name="location"
            value={filters.location}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="">Select Location</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
            <option value="bangalore">Bangalore</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Tour Category</label>
          <select
            name="category"
            value={filters.category}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="">Select Category</option>
            <option value="beach">Beach</option>
            <option value="mountain">Mountain</option>
            <option value="city">City</option>
          </select>
        </div>

        <div className="md:col-span-1 lg:col-span-1">
          <label className="block text-gray-700 font-medium mb-2">Search</label>
          <input
            type="text"
            name="search"
            value={filters.search}
            onChange={handleChange}
            placeholder="Search tours..."
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div className="flex flex-col md:col-span-1 lg:col-span-1">
            <label className="block text-gray-700 font-medium mb-2">Do you want reset selected filters?</label>
          <button
            type="button"
            onClick={handleReset}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium px-4 py-2 rounded-lg shadow hover:opacity-90"
          >
            🔄 Yes, Reset the Filters
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

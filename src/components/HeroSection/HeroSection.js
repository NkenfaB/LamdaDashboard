import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-gray-800 text-white py-20 px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Welcome to Virtual Events Platform
      </h1>
      <p className="text-xl md:text-2xl mb-8">
        Host and manage your events seamlessly
      </p>
      <Link
        to="/signup"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Get Started
      </Link>
    </div>
  );
};

export default HeroSection;

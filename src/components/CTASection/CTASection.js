import React from "react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <div className="bg-[#001F3F] text-white py-20 px-4 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        Ready to Get Started?
      </h2>
      <p className="text-xl md:text-2xl mb-8">
        Join us and make your next event unforgettable.
      </p>
      <Link
        to="/signup"
        className="bg-white text-blue-500 hover:bg-gray-200 font-bold py-2 px-4 rounded"
      >
        Sign Up Now
      </Link>
    </div>
  );
};

export default CTASection;

import React from "react";

const features = [
  {
    title: "Easy Setup",
    description: "Get your event up and running in no time.",
  },
  {
    title: "Customizable",
    description: "Tailor your events to your specific needs.",
  },
  {
    title: "24/7 Support",
    description: "We're here to help whenever you need it.",
  },
];

const FeaturesSection = () => {
  return (
    <div className="py-20 px-4 bg-white text-gray-800 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-12">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;

import React from "react";

const steps = [
  { title: "Sign Up", description: "Create your account in just a few steps." },
  {
    title: "Create Event",
    description: "Set up your event with our easy-to-use tools.",
  },
  {
    title: "Invite Guests",
    description: "Send invitations and manage RSVPs effortlessly.",
  },
  {
    title: "Go Live",
    description: "Host your event and interact with your audience.",
  },
];

const HowItWorksSection = () => {
  return (
    <div className="py-20 px-4 bg-white text-gray-800 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-12">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorksSection;

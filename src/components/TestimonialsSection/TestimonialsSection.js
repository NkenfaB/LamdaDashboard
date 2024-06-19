import React from "react";

const testimonials = [
  {
    name: "John Doe",
    feedback: "This platform made our event a huge success!",
  },
  {
    name: "Jane Smith",
    feedback: "I love the customization options available.",
  },
  { name: "Mike Johnson", feedback: "Great support and easy to use." },
];

const TestimonialsSection = () => {
  return (
    <div className="py-20 px-4 bg-gray-100 text-gray-800 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-12">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-lg">
            <p className="italic mb-4">"{testimonial.feedback}"</p>
            <p className="font-bold">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;

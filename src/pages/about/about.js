// import React from "react";
// import NavBar from "../../components/NavBar/NavBar";

// const About = () => {
//   return (
//     <div>
//       <NavBar />
//       about
//     </div>
//   );
// };

// export default About;
import React from "react";
import NavBar from "../../components/NavBar/NavBar";

const About = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          {/* About Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
            <p className="text-gray-600">
              Learn more about our mission, vision, and the team behind our
              virtual events management platform.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-white p-8 shadow-lg rounded-lg mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-700">
              Our mission is to provide a seamless and engaging virtual event
              experience for organizers and attendees. We aim to bridge the gap
              between in-person and virtual events by leveraging cutting-edge
              technology.
            </p>
          </div>

          {/* Core Values Section */}
          <div className="bg-white p-8 shadow-lg rounded-lg mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="text-blue-500 text-6xl mb-4">🌟</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Innovation
                </h3>
                <p className="text-gray-700 text-center">
                  We continuously seek out new technologies and methods to
                  improve our platform and deliver the best virtual event
                  experiences.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-blue-500 text-6xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Collaboration
                </h3>
                <p className="text-gray-700 text-center">
                  We believe in the power of teamwork and actively collaborate
                  with our users to meet their unique event needs.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-blue-500 text-6xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Excellence
                </h3>
                <p className="text-gray-700 text-center">
                  We strive for excellence in everything we do, from product
                  development to customer support.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              <div className="flex flex-col items-center">
                <img
                  className="w-32 h-32 rounded-full mb-4"
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Nkenfa Brandon
                </h3>
                <p className="text-gray-700 text-center">CTO & Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

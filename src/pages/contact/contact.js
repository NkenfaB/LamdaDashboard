// import React from "react";
// import NavBar from "../../components/NavBar/NavBar";

// const Contact = () => {
//   return (
//     <div>
//       <NavBar />
//       contact
//     </div>
//   );
// };

// export default Contact;
import React from "react";
import NavBar from "../../components/NavBar/NavBar";

const Contact = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          {/* Contact Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Contact Us
            </h1>
            <p className="text-gray-600">
              We'd love to hear from you! Please fill out the form below or use
              one of the methods to get in touch.
            </p>
          </div>

          {/* Contact Form & Information */}
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            {/* Contact Form */}
            <div className="w-full lg:w-2/3 bg-white p-8 shadow-lg rounded-lg mb-8 lg:mb-0">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    type="text"
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    type="email"
                    id="email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    id="message"
                    rows="6"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
                  Send Message
                </button>
              </form>
            </div>

            {/* Company Information */}
            <div className="w-full lg:w-1/3 bg-white p-8 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">xylo@gmail.com</p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600">+237 681392139 / 698760850</p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                <p className="text-gray-600">Molyko, Buea,</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Our Location
            </h2>
            <div className="w-full h-64 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508474!2d144.95373531531676!3d-37.81627927975144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d2b2d4c8d84!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1600671625915!5m2!1sen!2sau"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// import React from "react";
// import NavBar from "../../components/NavBar/NavBar";

// const Profile = () => {
//   return (
//     <div>
//       <NavBar />
//       <div className="bg-gray-100 py-12">
//         <div className="container mx-auto px-4">
//           {/* Profile Header */}
//           <div className="text-center mb-12">
//             <h1 className="text-4xl font-bold text-gray-800 mb-4">Profile</h1>
//             <p className="text-gray-600">Manage your profile information</p>
//           </div>

//           {/* Profile Information */}
//           <div className="flex flex-col lg:flex-row lg:space-x-8">
//             {/* User Information */}
//             <div className="w-full lg:w-1/2 bg-white p-8 shadow-lg rounded-lg mb-8 lg:mb-0">
//               <h2 className="text-2xl font-bold mb-6">User Information</h2>
//               <form>
//                 <div className="mb-4">
//                   <label
//                     className="block text-gray-700 mb-2"
//                     htmlFor="username"
//                   >
//                     Username
//                   </label>
//                   <input
//                     className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
//                     type="text"
//                     id="username"
//                     placeholder="Username"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-gray-700 mb-2" htmlFor="email">
//                     Email
//                   </label>
//                   <input
//                     className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
//                     type="email"
//                     id="email"
//                     placeholder="Email"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label
//                     className="block text-gray-700 mb-2"
//                     htmlFor="password"
//                   >
//                     Password
//                   </label>
//                   <input
//                     className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
//                     type="password"
//                     id="password"
//                     placeholder="••••••••"
//                   />
//                 </div>
//                 <button className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
//                   Update Profile
//                 </button>
//               </form>
//             </div>

//             {/* Delete Account */}
//             <div className="w-full lg:w-1/2 bg-white p-8 shadow-lg rounded-lg">
//               <h2 className="text-2xl font-bold mb-6">Delete Account</h2>
//               <p className="text-gray-600 mb-4">
//                 Once you delete your account, there is no going back. Please be
//                 certain.
//               </p>
//               <button className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition duration-200">
//                 Delete Account
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("updateInformation");

  return (
    <div>
      <NavBar />
      <div className="flex min-h-screen">
        <div className="border-4 border-r-[#001F3F] text-[#001F3F] w-1/4 p-4">
          {/* <h2 className="text-xl font-bold mb-4">Dashboard</h2> */}
          <ul>
            {/* <li
              className={`mb-6 p-2 border-4 border-b-[#001F3F]  ${
                activeTab === "viewInformation" && "font-bold hover:text-white"
              }`}
            >
              <button
                onClick={() => setActiveTab("viewInformation")}
                className="w-full text-left"
              >
                View Information
              </button>
            </li> */}
            <li
              className={`mb-6 p-2 border-4 border-b-[#001F3F] ${
                activeTab === "updateInformation" &&
                "font-bold hover:text-white"
              }`}
            >
              <button
                onClick={() => setActiveTab("updateInformation")}
                className="w-full text-left"
              >
                Update Information
              </button>
            </li>
            <li
              className={`mb-6 p-2 border-4 border-b-[#001F3F] ${
                activeTab === "deleteInformation" &&
                "font-bold hover:text-white"
              }`}
            >
              <button
                onClick={() => setActiveTab("deleteInformation")}
                className="w-full text-left"
              >
                Delete Account
              </button>
            </li>
          </ul>
        </div>

        <div className="flex-1 p-4">
          {activeTab === "viewInformation" && (
            <div>
              <h1 className="text-2xl font-bold">View Your Information</h1>
              {/* Content for Registered Events */}
            </div>
          )}
          {activeTab === "updateInformation" && (
            <div>
              <h1 className="text-2xl font-bold">Update Your Informations</h1>
              <div className="w-full lg:w-1/2 bg-white p-8 shadow-lg rounded-lg mb-8 lg:mb-0">
                <h2 className="text-2xl font-bold mb-6">User Information</h2>
                <form>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 mb-2"
                      htmlFor="username"
                    >
                      Username
                    </label>
                    <input
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                      type="text"
                      id="username"
                      placeholder="Username"
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
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 mb-2"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                      type="password"
                      id="password"
                      placeholder="••••••••"
                    />
                  </div>
                  <button className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
                    Update Profile
                  </button>
                </form>
              </div>
            </div>
          )}
          {activeTab === "deleteInformation" && (
            <div>
              <h1 className="text-2xl font-bold">Delete Your Account</h1>
              <div className="w-full lg:w-1/2 bg-white p-8 shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Delete Account</h2>
                <p className="text-gray-600 mb-4">
                  Once you delete your account, there is no going back. Please
                  be certain.
                </p>
                <button className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition duration-200">
                  Delete Account
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Profile;

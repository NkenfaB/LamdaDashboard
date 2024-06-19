import React from "react";

import { useDispatch } from "react-redux";
import { deleteEvent } from "../../actions/eventActions";

const EventTable = ({ onUpdateClick, events = [] }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      dispatch(deleteEvent(id));
    }
  };

  return (
    <div className="bg-[#ECF0F1]  rounded p-16 border b-[#ccc] mb-10  border-4 border-[#001F3F]-500/75">
      <h2 className="text-xl font-bold mb-4">Events</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Speaker</th>
            <th className="py-2 px-4 border-b">Category</th>
            <th className="py-2 px-4 border-b">Audience</th>
            <th className="py-2 px-4 border-b">Image</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event._id}>
              <td className="py-2 px-4 border-b">{event.title}</td>
              <td className="py-2 px-4 border-b">{event.description}</td>
              <td className="py-2 px-4 border-b">
                {new Date(event.date).toLocaleString()}
              </td>
              <td className="py-2 px-4 border-b">{event.speaker}</td>
              <td className="py-2 px-4 border-b">{event.category}</td>
              <td className="py-2 px-4 border-b">{event.audience}</td>
              <td className="py-2 px-4 border-b">
                <img
                  src={
                    event.image
                      ? `http://localhost:5000${event.image}`
                      : "https://www.bing.com/th?id=OIP.cjI6TRCMfyRiefRsTOnCkwHaE8&w=176&h=185&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                  }
                  alt={event.title}
                  className="h-12 w-16 object-cover rounded-lg"
                />
              </td>
              <td className="py-4 px-4 border-b text-center">
                <button
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-small py-1 px-2 rounded mb-1"
                  onClick={() => onUpdateClick(event)}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-small py-1 px-2 rounded"
                  onClick={() => handleDeleteClick(event._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventTable;

// import React from "react";

// const EventTable = ({ events }) => {
//   return (
//     <div>
//       <h2 className="text-xl font-bold mb-4">Events</h2>
//       <table className="min-w-full bg-white">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 border-b">Title</th>
//             <th className="py-2 px-4 border-b">Description</th>
//             <th className="py-2 px-4 border-b">Date</th>
//             <th className="py-2 px-4 border-b">Speaker</th>
//             <th className="py-2 px-4 border-b">Image</th>
//             <th className="py-2 px-4 border-b">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {events.map((event) => (
//             <tr key={event._id}>
//               <td className="py-2 px-4 border-b">{event.title}</td>
//               <td className="py-2 px-4 border-b">{event.description}</td>
//               <td className="py-2 px-4 border-b">
//                 {new Date(event.date).toLocaleString()}
//               </td>
//               <td className="py-2 px-4 border-b">{event.speaker}</td>
//               <td className="py-2 px-4 border-b">
//                 <img
//                   src={event.image}
//                   alt={event.title}
//                   className="h-16 w-16 object-cover"
//                 />
//               </td>
//               <td className="py-2 px-4 border-b">
//                 <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2">
//                   Update
//                 </button>
//                 <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default EventTable;

// import React from "react";

// const EventTable = ({ events }) => {
//   return (
//     <div>
//       <h2>Event Table</h2>
//       {events && events.length > 0 ? (
//         <table>
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>Description</th>
//               <th>Date</th>
//               <th>Speaker</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {events.map((event) => (
//               <tr key={event._id}>
//                 <td>{event.title}</td>
//                 <td>{event.description}</td>
//                 <td>{new Date(event.date).toLocaleString()}</td>
//                 <td>{event.speaker}</td>
//                 <td>
//                   <button>Update</button>
//                   <button>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No events found.</p>
//       )}
//     </div>
//   );
// };

// export default EventTable;

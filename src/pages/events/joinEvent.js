// import React from "react";
// import NavBar from "../../components/NavBar/NavBar";
// import Footer2 from "../../components/Footer/Footer2";

// import style from "./myEvent.module.css";

// const JoinEvent = ({ events }) => {
//   return (
//     <div>
//       <div className="flex flex-col h-screen">
//         {/* Header */}
//         <header className="flex items-center justify-between p-4 bg-blue-900 text-white">
//           <div className="flex items-center space-x-4">
//             <h1 className="text-xl font-bold">Video Chat</h1>
//           </div>
//           <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
//             End Call
//           </button>
//         </header>

//         {/* Main Content */}
//         <div className="flex flex-grow overflow-hidden">
//           {/* Main Video Area */}
//           <div className="flex-grow bg-black flex items-center justify-center">
//             {/* Active Speaker or Screen Share */}
//             <div className="w-3/4 h-3/4 bg-gray-800 flex items-center justify-center">
//               <span className="text-white">Main Video Area</span>
//             </div>
//           </div>

//           {/* Participants Sidebar */}
//           <aside className="w-1/4 bg-gray-100 overflow-y-auto p-2">
//             <h2 className="text-center font-bold">Participants</h2>
//             {/* Example Participant Video Thumbnails */}
//             <div className="flex flex-col space-y-2 mt-2">
//               <div className="w-full h-24 bg-gray-300 flex items-center justify-center">
//                 <span className="text-black">Participant 1</span>
//               </div>
//               <div className="w-full h-24 bg-gray-300 flex items-center justify-center">
//                 <span className="text-black">Participant 2</span>
//               </div>
//             </div>
//           </aside>
//         </div>

//         {/* Controls */}
//         <footer className="bg-gray-800 text-white p-4 flex justify-around">
//           <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             Mute/Unmute
//           </button>
//           <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             Start/Stop Video
//           </button>
//           <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             Share Screen
//           </button>
//           <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             Chat
//           </button>
//         </footer>
//       </div>
//       <Footer2 />
//     </div>
//   );
// };

// export default JoinEvent;

import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import DailyIframe from "@daily-co/daily-js";
import NavBar from "../../components/NavBar/NavBar";
import Footer2 from "../../components/Footer/Footer2";
import style from "./myEvent.module.css";

const JoinEvent = () => {
  const { roomId } = useParams();
  const [event, setEvent] = useState(null);
  const [participants, setParticipants] = useState([]);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const callFrame = useRef(null);

  useEffect(() => {
    // Fetch event details from the backend using roomId
    const fetchEvent = async () => {
      try {
        const response = await fetch(`/api/events/${roomId}`);
        const data = await response.json();
        setEvent(data);
      } catch (error) {
        console.error("Error fetching event details:", error);
      }
    };

    fetchEvent();

    // Initialize Daily.co call frame with your specific room link
    callFrame.current = DailyIframe.createFrame({
      iframeStyle: {
        position: "absolute",
        width: "100%",
        height: "100%",
        border: "0",
      },
    });

    callFrame.current.join({ url: `https://xylo.daily.co/Conference` });

    // Event listener for participants
    callFrame.current.on("participant-joined", (event) => {
      setParticipants((prevParticipants) => [
        ...prevParticipants,
        event.participant,
      ]);
    });

    callFrame.current.on("participant-left", (event) => {
      setParticipants((prevParticipants) =>
        prevParticipants.filter(
          (p) => p.session_id !== event.participant.session_id
        )
      );
    });

    // Cleanup on component unmount
    return () => {
      callFrame.current.leave();
    };
  }, [roomId]);

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
    callFrame.current.setLocalAudio(!isMuted);
  };

  const handleVideoToggle = () => {
    setIsVideoOff(!isVideoOff);
    callFrame.current.setLocalVideo(!isVideoOff);
  };

  const handleShareScreen = () => {
    callFrame.current.startScreenShare();
  };

  const handleChat = () => {
    callFrame.current.openChat();
  };

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavBar />
      <div className="flex flex-col h-screen">
        <header className="flex items-center justify-between p-4 bg-blue-900 text-white">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold">{event.title}</h1>
          </div>
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => callFrame.current.leave()}
          >
            End Call
          </button>
        </header>

        <div className="flex flex-grow overflow-hidden">
          {/* Main Video Area */}
          <div className="flex-grow bg-black flex items-center justify-center relative">
            <div
              ref={(el) =>
                el && callFrame.current && callFrame.current.attach(el)
              }
            />
          </div>

          {/* Participants List */}
          <aside className="w-1/4 bg-gray-100 overflow-y-auto p-2">
            <h2 className="text-center font-bold">Participants</h2>
            <div className="flex flex-col space-y-2 mt-2">
              {participants.map((participant, index) => (
                <div
                  key={index}
                  className="w-full h-24 bg-gray-300 flex items-center justify-center"
                >
                  <span className="text-black">{participant.user_name}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>

        {/* Control Buttons */}
        <footer className="bg-gray-800 text-white p-4 flex justify-around">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleMuteToggle}
          >
            {isMuted ? "Unmute" : "Mute"}
          </button>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleVideoToggle}
          >
            {isVideoOff ? "Start Video" : "Stop Video"}
          </button>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleShareScreen}
          >
            Share Screen
          </button>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleChat}
          >
            Chat
          </button>
        </footer>
      </div>
      <Footer2 />
    </div>
  );
};

export default JoinEvent;

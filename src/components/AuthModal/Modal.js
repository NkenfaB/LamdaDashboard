import React from "react";

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-gray-900 bg-opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white p-6 rounded shadow-lg z-10 w-full max-w-md mx-auto">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;

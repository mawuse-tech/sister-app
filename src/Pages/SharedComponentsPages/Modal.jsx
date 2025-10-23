// src/components/Modal.jsx
import React from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null; // Hide when modal is not opened not open

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="bg-[#730888] rounded-lg w-[35rem] md:w-[28rem] lg:h-[] p-6 shadow-lg relative">
        <h2 className="text-lg font-semibold mb-4 text-white">{title}</h2>
        <div>{children}</div>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-red-500 hover:text-red-700"
        >
          ✖
        </button>
      </div>
    </div>
  );
};

export default Modal;

import React from "react";
import MyForm from "../Form/UserForm";
import CustomerForm from "../Form/CustomerForm";

const CustomerModal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-700 opacity-75"></div>
      <div className="relative z-10 bg-white p-4 max-w-md rounded-lg">
        <div className="flex justify-end">
          <button
            onClick={closeModal}
            className="text-red-600 hover:text-red-800"
          >
            Close
          </button>
        </div>
        <CustomerForm />
      </div>
    </div>
  );
};

export default CustomerModal;

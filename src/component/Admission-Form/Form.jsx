import { useState } from "react";
export default function Form({ onClose, onSubmit }) {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="fixed w-[90%] inset-0 flex justify-center items-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50 z-10"
        onClick={onClose}
      ></div>

      {/* The form */}
      <form
        onSubmit={handleFormSubmit}
        className="bg-white p-4 sm:p-6 md:p-8 rounded shadow-lg w-full sm:w-3/4 md:w-1/2 lg:w-96 z-20 relative" // "relative" class remains on the form
      >
        <div className="flex">
          <h2 className=" mb-4 uppercase text-primary-maroon-1 text-heading-5">
            ENQUIRY FORM
          </h2>

          <button
            onClick={onClose}
            className="absolute top-2 right-2 bg-primary-maroon text-white w-6 h-6 rounded-full flex items-center justify-center"
          >
            &times;
          </button>
        </div>

        <div className="mb-4">
          <h3 className="mb-2 uppercase text-primary-maroon-1 text-subheading">
            Student Details
          </h3>
          <input
            type="text"
            className="w-full p-2 border border-gray-600 rounded mb-2 placeholder-gray-500"
            placeholder="Enter Student Name"
            required
          />
          <input
            type="number"
            className="w-full p-2 border border-gray-600 rounded mb-2 placeholder-gray-500"
            placeholder="Enter Age"
            required
          />
          <input
            type="text"
            className="w-full p-2 border border-gray-600 rounded mb-2 placeholder-gray-500"
            placeholder="Select Programme"
            required
          />
        </div>

        <div className="mb-4">
          <h3 className=" mb-2 uppercase text-primary-maroon-1 text-subheading">
            Parent Details
          </h3>
          <input
            type="text"
            className="w-full p-2 border border-gray-600 rounded mb-2 placeholder-gray-500"
            placeholder="Parent Name"
            required
          />
          <input
            type="text"
            className="w-full p-2 border border-gray-600 rounded mb-2 placeholder-gray-500"
            placeholder="Phone No"
            required
          />
          <input
            type="email"
            className="w-full p-2 border border-gray-600 rounded mb-2 placeholder-gray-500"
            placeholder="Email"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-primary-yellow rounded mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

import CancelIcon from "@mui/icons-material/Cancel";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Form({ onClose }) {
    const [isThankYouOpen, setThankYouOpen] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setThankYouOpen(true);
    };

    function FormContainer() {
        return (
            <div className="fixed w-full inset-0 flex justify-center items-center z-50 section-container">
                {/* close form when clicked outside the form  */}

                <div
                    className="fixed inset-0 bg-gray-900 opacity-70 z-10"
                    onClick={() => onClose(false)}
                ></div>

                {/* The form */}
                <form
                    onSubmit={handleFormSubmit}
                    className="bg-white p-large md:p-xl rounded shadow-lg w-full md:w-1/2 lg:w-[45%] z-20 relative"
                >
                    <div className="flex items-center justify-between mb-xl">
                        <h2 className="uppercase text-primary-maroon-1 text-heading-6 md:text-heading-4">
                            ENQUIRY FORM
                        </h2>

                        <button
                            onClick={() => onClose(false)}
                            className="flex items-center justify-center"
                        >
                            <CancelIcon
                                fontSize="large"
                                style={{ color: "#790000" }}
                            />
                        </button>
                    </div>

                    <fieldset className="mb-large flex flex-col gap-large">
                        <h4 className="uppercase text-primary-maroon-1 text-subheading md:text-heading-5">
                            Student Details
                        </h4>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-600 rounded placeholder-gray-500"
                            placeholder="Enter Student Name"
                            required
                        />
                        <input
                            type="number"
                            className="w-full p-2 border border-gray-600 rounded placeholder-gray-500"
                            placeholder="Enter Age"
                            min="2"
                            required
                        />
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-600 rounded placeholder-gray-500"
                            placeholder="Select Programme"
                            required
                        />
                    </fieldset>

                    <fieldset className="mb-large flex flex-col gap-large">
                        <h4 className="uppercase text-primary-maroon-1 text-subheading md:text-heading-5">
                            Parent Details
                        </h4>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-600 rounded placeholder-gray-500"
                            placeholder="Parent Name"
                            required
                        />
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-600 rounded placeholder-gray-500"
                            placeholder="Phone No"
                            required
                        />
                        <input
                            type="email"
                            className="w-full p-2 border border-gray-600 rounded placeholder-gray-500"
                            placeholder="Email"
                            required
                        />
                    </fieldset>

                    <button type="submit" className="btn-slide lg:w-[40%]">
                        Submit
                    </button>
                </form>
            </div>
        );
    }

    function ThankyouContainer() {
        return (
            <div className="fixed inset-0 flex justify-center items-center z-50">
                <div className="section-container bg-white rounded shadow-lg w-[100%] h-[100%] justify-center z-20 flex flex-col">
                    <div className="flex flex-col gap-large w-full">
                        <div className="flex items-start justify-between gap-xl">
                          <h1 className="text-primary-maroon-1 md:text-heading-2 text-heading-6 uppercase">
                              Thank you for your interest g global school
                          </h1>
                          <button
                              onClick={() => setThankYouOpen(false)}
                              className="items-center justify-center hidden md:flex"
                          >
                              <CancelIcon
                                  style={{ color: "#790000", fontSize: 48 }}
                              />
                          </button>
                        </div>
                        <h3 className="uppercase text-primary-maroon-1 text-subheading md:text-heading-5">
                            our team will contact you soon
                        </h3>
                      <a href="" className="btn-slide">
                        GO BACK
                      </a>
                    </div>
                </div>
            </div>
        );
    }

    return <>{isThankYouOpen ? <ThankyouContainer /> : <FormContainer />}</>;
}

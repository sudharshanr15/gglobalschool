// const Enquiry = () => {
//   return (
//     <section className="section-container">
//       <div className="mb-md lg:mb-xl">
//         <p>Life begins with self exploration and GGS provides your child with that opportunity where
// their dreams extend their wings and fly.</p><br/>
//         <p><span className="font-bold">Join us for inquiry learning,</span> supportive community
// and endless opportunities to grow.</p><br/>
//         <p><span className="font-bold">Inquire with us -</span> Below that the parents will fill their basic details and the contact
// details for admission should be added.</p>
//       </div>
//       <button className="bg-primary-yellow hover:bg-primary-maroon hover:text-gray-100 font-bold text-xl p-md px-large rounded-full">Enquiry Today</button>
//     </section>
//   )
// }

// export default Enquiry

"use client";

import { useState } from "react";
import Form from "../../component/Admission-Form/Form";
const Enquiry = () => {
  const [isFormOpen, setFormOpen] = useState(false);
  const [isThankYouOpen, setThankYouOpen] = useState(false);

  const handleFormSubmit = () => {
    setFormOpen(false);
    setThankYouOpen(true);
  };

  return (
    <section className="section-container">
      <div className="mb-md lg:mb-xl">
        <p>
          Life begins with self exploration and GGS provides your child with
          that opportunity where their dreams extend their wings and fly.
        </p>
        <br />
        <p>
          <span className="font-bold">Join us for inquiry learning,</span>{" "}
          supportive community and endless opportunities to grow.
        </p>
        <br />
        <p>
          <span className="font-bold">Inquire with us -</span> Below that the
          parents will fill their basic details and the contact details for
          admission should be added.
        </p>
      </div>

      <button
        onClick={() => setFormOpen(true)}
        className="bg-primary-yellow hover:bg-primary-maroon hover:text-gray-100 font-bold text-xl p-md px-large rounded-full"
      >
        Enquiry Today
      </button>

      {isFormOpen && (
        <Form onClose={() => setFormOpen(false)} onSubmit={handleFormSubmit} />
      )}

      {isThankYouOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-50 z-10"
            onClick={() => setThankYouOpen(false)}
          ></div>

          {/* Thank You Modal */}
          <div className="bg-white p-8 rounded shadow-lg md:w-[100%] w-[100%] h-[100%] justify-center  z-20 flex flex-col">
            <div className="flex space-x-xl">
              <div className="flex flex-col md:w-[85%] w-full">
                <h1 className="text-primary-maroon-1 md:text-heading-2 text-heading-6 mb-4 uppercase">
                  Thank you for your interest g global school
                </h1>
                <h1 className="uppercase text-primary-maroon-1 md:text-heading-5 text-heading-6">
                  our team will contact you soon
                </h1>
              </div>
              {/* Close Button */}
              <button
                onClick={() => setThankYouOpen(false)}
                className="  bg-primary-maroon text-white w-16 text-heading-4 h-14 rounded-full transition-all duration-300 "
              >
                &times;
              </button>
            </div>

            <button className="relative hover:bg-white text-subheading p-md bg-primary-yellow text-black md:w-[35%] w-[70%] rounded-full mt-xl transform transition-transform duration-150 hover:scale-95 hover:shadow-inner ">
              GO BACK HOME
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Enquiry;

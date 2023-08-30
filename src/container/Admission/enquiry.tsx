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
        <Form onClose={setFormOpen} />
      )}

    </section>
  );
};

export default Enquiry;

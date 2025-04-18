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

import EnquireLink from "@/component/Enquire/EnquireLink";

const Enquiry = () => {

  return (
    <section className="section-container">
      <div className="flex flex-col gap-md text-body">
        <p>
          Life begins with self exploration and GGS provides your child with
          that opportunity where their dreams extend their wings and fly.
        </p>
        <p>
          <span className="font-bold">Join us for inquiry learning,</span>{" "}
          supportive community and endless opportunities to grow.
        </p>
        <p>
          <span className="font-bold">Inquire with us -</span> Below that the
          parents will fill their basic details and the contact details for
          admission should be added.
        </p>
        <button
          className="btn-slide mt-4"
        >
          <EnquireLink>Enquiry Today</EnquireLink>
        </button>
      </div>
    </section>
  );
};

export default Enquiry;

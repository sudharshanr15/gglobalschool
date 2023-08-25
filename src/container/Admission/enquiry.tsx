

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

"use client"

import { useState } from 'react';
import Form from '../../component/Admission-Form/Form';
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
        <p>Life begins with self exploration and GGS provides your child with that opportunity where
their dreams extend their wings and fly.</p><br/>
        <p><span className="font-bold">Join us for inquiry learning,</span> supportive community
and endless opportunities to grow.</p><br/>
        <p><span className="font-bold">Inquire with us -</span> Below that the parents will fill their basic details and the contact
details for admission should be added.</p>
      </div>

      <button 
        onClick={() => setFormOpen(true)} 
        className="bg-primary-yellow hover:bg-primary-maroon hover:text-gray-100 font-bold text-xl p-md px-large rounded-full">
        Enquiry Today
      </button>

      {isFormOpen && <Form onClose={() => setFormOpen(false)} onSubmit={handleFormSubmit} />}

      {isThankYouOpen && (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      
        {/* Overlay */}
        <div 
            className="fixed inset-0 bg-black opacity-50 z-10" 
            onClick={() => setThankYouOpen(false)}
        ></div>
        
        {/* Thank You Modal */}
        <div className="bg-white p-8 rounded shadow-lg w-[90%] z-20 flex flex-col">
          <div className='flex'>
          <div className='flex flex-col'>
            <h1 className="text-primary-maroon-1 text-heading-5 mb-4 uppercase">Thank you for your interest g global school</h1>
            <h1 className='uppercase text-primary-maroon-1 text-heading-5'>our team will contact you soon</h1>
          </div>
            {/* Close Button */}
            <button 
                onClick={() => setThankYouOpen(false)} 
                className="relative  bg-primary-maroon text-white w-6 h-6 rounded-full "
          >
            &times;
            </button>
            </div>

            <button 
            
                className="relative  bg-primary-yellow text-white w-[20%] rounded-full mt-xl "
          >
            GO BACK HOME
            </button>
        </div>
    </div>
)}

    </section>
  )
}

export default Enquiry;


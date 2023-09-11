import Link from 'next/link'

const Admissionpolicy = () => {
  return (
    <section className="section-container">
      <h2 className="text-heading-3 md:text-heading-2 text-primary-maroon">ADMISSION PROCEDURE</h2>
      <p className="my-large lg:my-xl text-body">
      Before you begin the <span>application process</span>, please be sure to first read the information below. It is important that you 
      review ALL information before you progress to the inquiry and application stage. You can view all information and admissions-related
       policies below:
      </p>
      <Link href='https://drive.google.com/file/d/1jQcfIlCm-1HvKUmoX0x6vAM0Xpoh-HyG/view?usp=share_link' target='__blank' className="bg-primary-maroon hover:bg-gray-100 text-gray-100 hover:text-black font-bold text-xl p-md px-large rounded-full">View Admission policy</Link>
    </section>
  )
}

export default Admissionpolicy

import Image from "next/image";

const Agency = () => (
  <div className="div  grid  grid-cols-1 md:grid-cols-2">
    <div className="  mt-10  md:ml-5  p-large ">
      <h1 className="md:text-heading-4 text-heading-4  font-bold  text-[#790000]">
        POWER OF AGENCY
      </h1>

      <p className="sm:mr-28 mt-4  md:mt-10 md:text-xl body">
        Agency is the power to take meaningful international action and{" "}
        <span className="text-black font-bold">
          supports voice, choice and ownership for students, teachers and the
          wider learning community.
        </span>
        <br></br>
        <br></br>
        In G Global school, teachers co-design the learning goals and curriculum
        with the students which provides an opportunity to take ownership of
        their learning.
        <br></br>
        <br></br>
        We motivate our students to{" "}
        <span className="text-black font-bold">
          take initiates and thoughtfully influence the community
        </span>{" "}
        in the face of challenges.
      </p>

      {/* <p className="sm:mr-28 mt-4 md:mt-9">
        At G Global School, we offer more than just education - we provide a gateway to a world of boundless possibilities and personal growth."
        </p> */}
    </div>

    <div className="mx-auto w-full ">
      <Image
        src="/image/power_of_agency.png"
        alt="Background"
        className="w-full h-full mt-38"
        width={500}
        height={500}
      />
      {/* Rest of your content */}
    </div>
  </div>
);

export default Agency;

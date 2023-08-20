import Image from "next/image";

const Agency = () => (
  <section className="section-container">
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2">
        <h2 className="text-heading-4 md:text-heading-3 uppercase lg:w-[90%] text-primary-maroon-1 mb-xl">
          POWER OF AGENCY
        </h2>
        <div className="flex flex-col gap-large text-subheading-regular">
          <p>
            Agency is the power to take meaningful international action and <span className="text-black font-bold"> supports voice, choice and ownership for students, teachers and the wider learning community.</span>
          </p>
          <p>
            In G Global school, teachers co-design the learning goals and curriculum with the students which provides an opportunity to take ownership of their learning.
          </p>
          <p>
            We motivate our students to <span className="text-black font-bold"> take initiates and thoughtfully influence the community</span> in the face of challenges.
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <Image
          src="/image/power_of_agency.png"
          alt="Background"
          className="w-full h-auto"
          width={500}
          height={500}
        />
      </div>
  </div>
  </section>
  
);

export default Agency;

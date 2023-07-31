import Image from "next/image";

const DietPlan = () => (
  <div className="div  grid  grid-cols-1 md:grid-cols-2">
    <div className="mx-auto w-full ">
      <Image
        src="/image/health_wellbeing.png"
        alt="Background"
        className="w-full h-full mt-38 md:p-3xl p-large"
        width={500}
        height={500}
      />
      {/* Rest of your content */}
    </div>
    <div className="  mt-10  md:ml-5  p-large ">
      <h1 className="md:text-heading-4 text-heading-4  font-bold  text-[#790000]">
        HEALTH & WELL BEING
      </h1>

      <p className="sm:mr-28 mt-4  md:mt-10 md:text-xl body">
        During COVID situation offline schooling is as challenging as virtual
        one. Our school handles this situation well by following all guidelines
        provided by the government.
        <br></br>
        <br></br>
        Regular checks are done inside the school campus for students, teachers
        and all the staffs and helpers working inside the school campus.
        <br></br>
        <br></br>
        We also followed the guidelines profoundly and equipped our vans with
        medical kit including all the essential medicines, sanitizers and masks.
        <br></br>
        <br></br>
        We make sure to sanitize and safe check our modes of transport in the
        most authentic ways ensuring a safe and healthy <br/> journey.
      </p>
    </div>
  </div>
);

export default DietPlan;

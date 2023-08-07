import Image from "next/image";

const Teams = () => (
  <div className="div flex  flex-wrap">
    <div className="w-full md:w-1/2 pl-10 md:mt-12  mt-10 text-left">
      <h3 className="text-heading-4 md:text-heading-3  font-bold sm:mr-10 text-black">
        OUR TEAM
      </h3>
      <h1 className="text-heading-3 md:text-8xl font-bold sm:mr-10 lg:text-8xl text-[#F9BDA7]">
        TEAM
      </h1>
    </div>

    <div className="w-full py-[1rem] px-4  bg-white ">
      <div className="w-full mx-auto grid md:grid-cols-3 gap-8 ">
        <div className="w-full shadow-xl flex flex-col  my-4 rounded-lg ">
          <div className=" flex space-x-4  rounded-lg ">
            <div className="w-full ">
              <Image
                src="/image/person3.jpg"
                alt="Background"
                className="w-full h-auto"
                width={500}
                height={500}
              />

              {/* Rest of your content */}
            </div>
          </div>

          <div className="text-left font-medium bg-[#790000] text-[#737373]  ">
            <p className="py-4 text-heading-6 mx-8 mt-8 text-[#FAFAFA]">
              Dr. S. GUNASEKARAN M.Ed., M. Phil., Phd.
            </p>
            <p className="py-2  mb-2 mx-8 ">CHAIRMAN DIRECTOR, G GLOBAL SCHOOL</p>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col  my-4 rounded-lg ">
          <div className=" flex space-x-4  rounded-lg ">
            <div className="w-full">
              <Image
                src="/image/person4.jpg"
                alt="Background"
                className="w-full h-auto"
                width={500}
                height={500}
              />
              {/* Rest of your content */}
            </div>
          </div>

          <div className="text-left font-medium py-3  bg-[#790000] text-[#737373]  ">
            <p className="py-2 text-heading-6 mx-8 mt-8 text-[#FAFAFA]">
              DR. G. VETRICHELVAN
            </p>
            <p className="py-2 subheading-regular mb-5 mx-8">MANAGING DIRECTOR, G GLOBAL SCHOOL</p>
          </div>
        </div>

        <div className="w-full shadow-xl flex flex-col  my-4 rounded-lg ">
          <div className=" flex space-x-4  rounded-lg ">
            <div className="w-full">
              <Image
                src="/image/person5.jpg"
                alt="Background"
                className="w-full h-auto"
                width={500}
                height={500}
              />
              {/* Rest of your content */}
            </div>
          </div>

          <div className="text-left font-medium py-3 bg-[#790000] text-[#737373]  ">
            <p className="py-2 text-heading-6 mx-8 mt-8 text-[#FAFAFA]">
              DR. S. ROSHNI VETRICHELVAN
            </p>
            <p className="py-2 subheading-regular  mx-8  ">
              EXECUTIVE DIRECTOR / HEAD OF SCHOOL, G GLOBAL SCHOOL
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Teams;

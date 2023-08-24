import Image from "next/image";

const Programmesoffers = () => (
  <section className="section-container">
      <div className="text-primary-maroon">
    <div className="div grid  grid-cols-1 md:grid-cols-2">
      <div className="w-full  pl-10 md:mt-12   mt-10 text-left">
        <h3 className="text-heading-5 md:text-heading-3 font-bold  sm:mr-10 text-[#FAFAFA]">
          PROGRAMMES WE OFFER
        </h3>
        <h1 className="text-4xl md:text-8xl font-bold  sm:mr-10 text-[#F9BDA7]">
          PROGRAMME
        </h1>
      </div>
    </div>

    <div className="div  grid  grid-cols-1 md:grid-cols-2 mt-5">
      <div className="w-full">
        <Image
          src="/image/person1.jpg"
          alt="Background"
          className="w-full h-auto"
          width={500}
          height={500}
        />
        {/* Rest of your content */}
      </div>

      <div className="w-full md:ml-9 md:p-xl mt-5  text-center">
        <h1 className="md:text-left  md:text-heading-2 text-heading-4 font-bold  text-[#FAFAFA]">
          Early Year Program
        </h1>

        <div className="flex justify-left   items-left ">
          <button className="bg-[#F9A51A] w-[200px] rounded-full lg:ml-0 font-bold my-6 mx-auto md:item-left  py-3 text-black">
            2-5 Years
          </button>
        </div>

        <div className=" bg-white lg:ml-0  rounded-lg max-w-[312px] mx-auto items-center">
          <div className="text-left   text-[#2A2A2A]   ">
            <p className="p-xl   md:text-heading-3 text-heading-4 fond-bond  ">
              A child’s learning begins from early years
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2  md:mt-5 p-large text-center underline underline-offset-8 ... text-[#F05A22]">
          <h1 className="text-heading-4 md:text-heading-5  font-bold sm:mr-10 md:text-left text-[#FAFAFA]">
            To know more
          </h1>
        </div>
      </div>
    </div>

    {/* --- */}

    <div className="div  grid  grid-cols-1 md:grid-cols-2">
      <div className="w-full  md:p-xl  text-center  p-10  mx-auto">
        <h1 className="md:text-heading-2 text-heading-4  font-bold sm:mr-10 md:text-left text-[#FAFAFA]">
          Primary Year Program
        </h1>

        <div className="flex justify-left items-left ">
          <button className="bg-[#F9A51A] w-[200px] lg:ml-0 rounded-full font-bold my-6 mx-auto  py-3 text-black">
            6-10 Years
          </button>
        </div>

        <div className=" bg-white mx-auto lg:ml-0 md:left-0 rounded-lg max-w-[312px] items-center">
          <div className="text-left font-medium text-[#2A2A2A]   ">
            <p className="p-xl md:text-heading-3 text-heading-4   ">
              Curiosity is the fuel for discovery, inquiry and learning
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2  md:mt-5 p-5 text-center underline underline-offset-8 ... text-[#F05A22]">
          <h1 className="text-heading-4 md:text-heading-5   font-bold sm:mr-10 md:text-left text-[#FAFAFA]">
            To know more
          </h1>
        </div>
      </div>

      <div className="w-full">
        <Image
          src="/image/person2.jpg"
          alt="Background"
          className="w-full h-auto"
          width={500}
          height={500}
        />
        {/* Rest of your content */}
      </div>
    </div>
  </div>

  </section>

);

export default Programmesoffers;

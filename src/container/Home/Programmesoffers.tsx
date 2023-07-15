import Image from "next/image";

const Programmesoffers = () => (
  <div className="bg-[#790000]">
    <div className="div flex  flex-wrap">
      <div className="w-full md:w-1/2 pl-10 md:mt-12  mt-10 text-left">
        <h3 className="text-3xl md:text-xl  font-bold sm:mr-10 text-[#FAFAFA]">
          PROGRAMMES WE OFFER
        </h3>
        <h1 className="text-4xl md:text-5xl font-bold sm:mr-10 text-[#F9BDA7]">
          PROGRAMME
        </h1>
      </div>
    </div>

    <div className="div  grid  grid-cols-1 md:grid-cols-2">
      <div className="mx-auto md w-full mt-5 py-10">
        <div
          className="hover:scale-105 duration-300 bg-cover"
          style={{ position: "relative", width: "100%", height: "80vh" }}
        >
          <Image
            src="/image/person1.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
          />
          {/* Rest of your content */}
        </div>
      </div>

      <div className="w-full md:ml-9  md:mt-14  text-center">
        <h1 className="text-2xl md:text-5xl font-bold sm:mr-10 md:text-left text-[#FAFAFA]">
          Early Year Program
        </h1>

        <div className="flex justify-left   items-left ">
          <button className="bg-[#F9A51A] w-[200px] rounded-full font-medium my-6 mx-auto md:item-left  py-3 text-black">
            2-5 Years
          </button>
        </div>

        <div className=" bg-white mx-auto rounded-lg max-w-[312px] items-center">
          <div className="text-left  font-medium text-[#2A2A2A]   ">
            <p className="p-8 md:text-4xl text-2xl mx-8 ">
              A child’s learning begins from early years
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2  md:mt-5 p-5 text-center underline underline-offset-8 ... text-[#F05A22]">
          <h1 className="text-2xl md:text-xl font-bold sm:mr-10 md:text-left text-[#FAFAFA]">
            To know more
          </h1>
        </div>
      </div>
    </div>

    {/* --- */}

    <div className="div  grid  grid-cols-1 md:grid-cols-2">
      <div className="w-full  text-center md:mt-12  mx-auto">
        <h1 className="text-2xl md:text-5xl font-bold sm:mr-10 md:text-left text-[#FAFAFA]">
          Primary Year Program
        </h1>

        <div className="flex justify-left items-left ">
          <button className="bg-[#F9A51A] w-[200px] rounded-full font-medium my-6 mx-auto  py-3 text-black">
            6-10 Years
          </button>
        </div>

        <div className=" bg-white mx-auto rounded-lg max-w-[312px] items-center">
          <div className="text-left font-medium text-[#2A2A2A]   ">
            <p className="p-8 md:text-4xl text-2xl mx-8 ">
              Curiosity is the fuel for discovery, inquiry and learning
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2  md:mt-5 p-5 text-center underline underline-offset-8 ... text-[#F05A22]">
          <h1 className="text-2xl md:text-xl font-bold sm:mr-10 md:text-left text-[#FAFAFA]">
            To know more
          </h1>
        </div>
      </div>

      <div className="mx-auto w-full mt-5 py-10">
        <div
          className="hover:scale-105 duration-300 bg-cover"
          style={{ position: "relative", width: "100%", height: "80vh" }}
        >
          <Image
            src="/image/person2.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
          />
          {/* Rest of your content */}
        </div>
      </div>
    </div>
  </div>
);

export default Programmesoffers;

import Image from "next/image";

const Cards = () => (
  <div className="div flex  flex-wrap">
    <div className="mx-auto p-5 md:p-16 lg:p-16 relative">
      <p className="font-bold text-5xl text-heading-4">
        At G Global Students will work collaboratively with teachers to:
      </p>
    </div>

    <div className="w-full py-[1rem] px-4  bg-white ">
      <div className="w-full mx-auto md:px-32 grid md:grid-cols-3 gap-8 ">
        <div className="w-full  flex flex-col  my-4  ">

          <div className="text-left p-14 rounded-[32px] font-medium bg-[#790000] text-[#737373]  ">
          <div className=" place-items-center w-full ">
              <Image
                src="/image/photo1.png"
                alt="Background"
                className="mx-auto"
                width={110}
                height={110}
              />

              {/* Rest of your content */}
            </div>
            <p className="py-2 text-2xl text-center text-heading-6 mx-8 mt-8 text-[#FAFAFA]">
            Make decisions together 
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col  my-4  ">
    
          <div className=" font-medium py-3 p-14 sm:pb-8 rounded-[32px] bg-[#790000] text-[#737373]  ">
          <div className="object-center mt-12 w-full ">
              <Image
                src="/image/photo2.png"
                alt="Background"
                className="mx-auto"
                width={110}
                height={110}
              />

              {/* Rest of your content */}
            </div>
            <div className="">
            <p className=" text-2xl text-center text-heading-6 mx-8 mt-8 text-[#FAFAFA]">
            Create shared agreements and routines 
            </p>

            </div>
            
          </div>
        </div>

        <div className="w-full  flex flex-col  my-4  ">
        

          <div className="text-left font-medium py-3 p-14  rounded-[32px] bg-[#790000] text-[#737373]  ">
          <div className="mt-12 w-full ">
              <Image
                src="/image/photo3.png"
                alt="Background"
                className="mx-auto"
                width={110}
                height={110}
              />

              {/* Rest of your content */}
            </div>
            <p className="py-2 text-2xl text-center text-heading-6 mx-8 mt-8 text-[#FAFAFA]">
            Setup learning space and reflect together
            </p>
            
          </div>
        </div>
      </div>
    </div>

  </div>
);

export default Cards;

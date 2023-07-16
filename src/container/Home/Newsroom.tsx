import Image from "next/image";

const Newsroom = () => (
  <div>
    <div className="div flex  flex-wrap">
      <div className="w-full md:w-1/2 pl-10 md:mt-12  mt-10 text-left">
        <h3 className="text-4xl md:text-4xl  font-bold sm:mr-10 text-black">
          NEWS & EVENTS
        </h3>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold sm:mr-10 text-[#F9BDA7]">
          NEWS ROOM
        </h1>
      </div>
    </div>

    <div className="scroll-smooth  hover:scroll-auto -scroll-ml-6 snap-start ...">
      <div className="w-full py-[1rem] px-4 bg-white ">
        <div className="w-auto mx-auto grid md:grid-cols-3 gap-8">
          <div className="w-full shadow-xl flex flex-col  my-4 rounded-lg ">
            <div className=" flex space-x-4  rounded-lg ">
              <div className="md:w-[420px] md:h-[220px]  w-[320px] h-[220px]">
                <div
                  className=" bg-cover"
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Image
                    src="/image/event1.jpg"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                  />
                  {/* Rest of your content */}
                </div>
              </div>
            </div>

            <div className="text-left font-medium bg-[#790000] text-[#737373]  ">
              <p className="py-2  mx-8 mt-8 text-[#FAFAFA]">
                ANNUAL DAY CELEBRATION
              </p>
              <p className="py-2  mx-8 ">12/01/2023</p>
            </div>
          </div>
          <div className="w-full shadow-xl flex flex-col  my-4 rounded-lg ">
            <div className=" flex space-x-4  rounded-lg ">
              <div className="md:w-[420px] md:h-[220px] w-[320px] h-[220px]">
                <div
                  className=" bg-cover"
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Image
                    src="/image/event2.jpg"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                  />
                  {/* Rest of your content */}
                </div>
              </div>
            </div>

            <div className="text-left font-medium  bg-[#790000]  text-[#737373]  ">
              <p className="py-2  mx-8 mt-8  text-[#FAFAFA]">
                MUSIC COMPETITION
              </p>
              <p className="py-2  mx-8">15/03/20233</p>
            </div>
          </div>

          <div className="w-full shadow-xl flex flex-col  my-4 rounded-lg ">
            <div className=" flex space-x-4  rounded-lg ">
              <div className="md:w-[420px] md:h-[220px] w-[320px] h-[220px]">
                <div
                  className=" bg-cover"
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Image
                    src="/image/event3.jpg"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                  />
                  {/* Rest of your content */}
                </div>
              </div>
            </div>

            <div className="text-left font-medium  bg-[#790000] text-[#737373]  ">
              <p className="py-2  mx-8 mt-8 text-[#FAFAFA]">SPORTS DAY</p>
              <p className="py-2  mx-8  ">25/03/2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Newsroom;

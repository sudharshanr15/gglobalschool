import Image from "next/image";

const Newsroom = () => (
  <section className="section-container">
    <div className="div flex  flex-wrap">
      <div className="w-full md:w-1/2 pl-xl md:mt-12  mt-10 text-left">
        <h3 className="text-heading-4  md:text-heading-3  font-bold sm:mr-10 text-black">
          NEWS & EVENTS
        </h3>
        <h1 className="text-heading-3 md:text-heading-1  font-bold sm:mr-10 text-[#F9BDA7]">
          NEWS ROOM
        </h1>
      </div>
    </div>

    <div className="scroll-smooth   -scroll-ml-6 snap-start ...">
      <div className="w-full py-[1rem] px-4 bg-white ">
        <div className="w-auto mx-auto grid md:grid-cols-3 gap-8">
          <div className="w-full shadow-xl flex flex-col  my-4 rounded-lg ">
            <div className=" flex space-x-4  rounded-lg ">
              <div
                className="relative bg-cover bg-center h-80 w-full object-cover"
                style={{
                  backgroundImage: `linear-gradient(360deg, #2A2A2A -34.99%, rgba(42, 42, 42, 0) 184.82%), url(/image/event1.jpg)`,
                }}
              >
        

                {/* Text Elements */}
                <p className="py-2 mx-8 mt-52  text-white font-bold text-heading-6 ">
                  ANNUAL DAY CELEBRATION
                </p>
                <p className="py-2 mx-8 text-white">12/01/2023</p>
              </div>
            </div>

            {/* <div className="text-left font-medium bg-[#790000] text-[#737373]  ">
              <p className="py-2  mx-8 mt-8 text-[#FAFAFA]">
                ANNUAL DAY CELEBRATION
              </p>
              <p className="py-2  mx-8 ">12/01/2023</p>
            </div> */}
          </div>
          <div className="w-full shadow-xl flex flex-col  my-4 rounded-lg ">
            <div className=" flex space-x-4  rounded-lg ">
              <div
                className="relative bg-cover bg-center h-80 w-full object-cover"
                style={{
                  backgroundImage: `linear-gradient(360deg, #2A2A2A -34.99%, rgba(42, 42, 42, 0) 184.82%), url(/image/event2.jpg)`,
                }}
              >
               

                {/* Text Elements */}
                <p className="py-2 mx-8 mt-52  text-white font-bold text-heading-6">
                  MUSIC COMPETITION
                </p>
                <p className="py-2 mx-8 text-white">15/03/20233</p>
              </div>
            </div>
          </div>

          <div className="w-full shadow-xl flex flex-col  my-4 rounded-lg ">
            <div className=" flex space-x-4  rounded-lg ">
              <div
                className="relative bg-cover bg-center h-80 w-full object-cover"
                style={{
                  backgroundImage: `linear-gradient(360deg, #2A2A2A -34.99%, rgba(42, 42, 42, 0) 184.82%), url(/image/event3.jpg)`,
                }}
              >
               
                {/* Text Elements */}
                <p className="py-2 mx-8 mt-52 text-white font-bold text-heading-6">
                  SPORTS DAY
                </p>
                <p className="py-2 mx-8 text-white">25/03/2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Newsroom;

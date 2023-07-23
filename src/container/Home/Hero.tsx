import Image from "next/image";

const Hero = () => (
  <div className="bg-[url('/image/herobg.jpg')]">
    <div className="grid  grid-cols-1 md:grid-cols-2 ">
      <div className="w-full   md:mt-48 p-10 ">
        <h1 className="text-4xl md:text-7xl  font-bold  text-[#333333] ">
          ENLIGHTENING
          <br></br>
          <span className="text-white">FUTURE MINGS</span>
        </h1>

        <p className=" mt-4 md:mt-9 text-xl font-bold 2xl:mt-20  md:text-4xl  text-white ">
          G Global School the{" "}
          <span className="text-black">first authorised IB world school</span>{" "}
          in Tiruchengode.
        </p>

        <div className="flex justify-start">
          <button className="bg-[#F9A51A]   w-[200px] rounded-full font-bold my-6   py-4 text-lg text-black">
            Enquire Now
          </button>
        </div>
      </div>

      <div className="mx-auto w-full ">
        <Image
          src="/image/hero_image.png"
          alt="Background"
          className="w-full h-full mt-38"
          width={500}
          height={500}
        />
        {/* Rest of your content */}
      </div>
    </div>
  </div>
);

export default Hero;

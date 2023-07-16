
import Image from 'next/image';



const Hero = () => (
  <div className="bg-[#F05A22]">
    <div className="div flex mt-28 md:mt-32  flex-wrap p-10">
      <div className="w-full md:w-1/2  md:mt-32  ">
        <h1 className="text-4xl lg:text-9xl md:text-4xl font-bold  text-[#333333] text-center">
          ENLIGHTENING
        </h1>
        <h1 className="mt-1  text-4xl lg:text-9xl font-bold  text-white text-center">
          FUTURE MINGS
        </h1>
        <p className=" mt-4 md:mt-9 text-xl font-bold 2xl:mt-32 lg:text-7xl md:ml-24 text-white ">
        G Global School the <span className='text-black'>first authorised IB world school</span> in Tiruchengode.
        </p>
       

        <div className="flex justify-start">
          <button className="bg-[#F9A51A] lg:ml-16  w-[200px] rounded-full font-bold my-6  px-10 py-6 text-lg text-black">
            Enquire Now
          </button>
        </div>
      </div>


      <div className="mx-auto w-full md:w-1/2  ">  
      <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
        <Image
            src="/image/hero_image.png"
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

export default Hero;


import Image from 'next/image';



const Hero = () => (
  <div className="bg-[#F05A22]">
    <div className="div flex mt-28 md:mt-32 flex-wrap">
      <div className="w-full md:w-1/2  md:mt-32  text-center">
        <h1 className="text-2xl md:text-5xl font-bold sm:mr-10 text-[#333333]">
          Enlightening
        </h1>
        <h1 className="mt-1 sm:mt-3 text-2xl md:text-5xl font-bold sm:mr-44 text-white">
          Future Minds
        </h1>
        <p className="sm:mr-28 mt-4 md:mt-9 text-white ">
        G Global School the <span className='text-black'>first authorised IB world school</span> in Tiruchengode.
        </p>
       

        <div className="flex space-x-4">
          <button className="bg-[#F9A51A] w-[200px] rounded-full font-medium my-6 mx-auto py-3 text-black">
            Enquire Now
          </button>
        </div>
      </div>


      <div className="mx-auto w-full md:w-1/4 mt-5 py-5 hover:scale-105 duration-300">  
      <div style={{ position: 'relative', width: '100%', height: '70vh' }}>
        <Image
            src="/image/hero_image.jpg"
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

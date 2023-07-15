import image1 from "../../assets/image1.jpg";
import Image from 'next/image';


const Personalgrowth = () => (
   
  <div className="div  grid  grid-cols-1 md:grid-cols-2">
      <div className="  mt-10  p-10 ">
        <h1 className="text-2xl md:text-5xl font-bold sm:mr-10 text-[#000000]">
        WHY CHOOSE US
        </h1>
       
        <p className="sm:mr-28 mt-4 md:mt-9 ">
        At G Global School, we offer more than just education - we provide a gateway to a world of boundless possibilities and personal growth."
        </p>
        

        {/* <p className="sm:mr-28 mt-4 md:mt-9">
        At G Global School, we offer more than just education - we provide a gateway to a world of boundless possibilities and personal growth."
        </p> */}

        <div className="flex ">
          <button className="bg-[#F9A51A] w-[200px] rounded-full font-medium my-6 md:mx-auto py-3 text-black">
            Know More
          </button>
        </div>
      </div>


        
   

      <div className="mx-auto w-full  mt-5 py-10 ">
      <div className="flex  space-x-4 ...">
      <div  className="hover:scale-105 duration-300 bg-cover" style={{ position: 'relative', width: '100%', height: '50vh'  }}>
            <Image
                src="/image/image1.jpg"
                alt="Background"
                layout="fill"
                objectFit="cover"
            />
            {/* Rest of your content */}
            </div>
        
            <div className="hover:scale-105 duration-300" style={{ position: 'relative', width: '100%', height: '50vh' }}>
            <Image
                src="/image/image2.jpg"
                alt="Background"
                layout="fill"
                objectFit="cover"
            />
            {/* Rest of your content */}
            </div>
            <div className="hover:scale-105 duration-300" style={{ position: 'relative', width: '100%', height: '50vh' }}>
            <Image
                src="/image/image3.jpg"
                alt="Background"
                layout="fill"
                objectFit="cover"
            />
            {/* Rest of your content */}
            </div>
        </div>
        </div>

    </div>
     
    
  
)

export default Personalgrowth
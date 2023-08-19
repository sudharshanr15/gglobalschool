import image1 from "../../assets/image1.jpg";
import Image from "next/image";

const Personalgrowth = () => (
  <section className="section-container">
     <div className="div  grid  grid-cols-1 md:grid-cols-2">
    <div className="  mt-10    p-xl ">
      <h1 className="text-heading-5 md:text-heading-3  font-bold  text-[#000000]">
        WHY CHOOSE US
      </h1>

      <p className="sm:mr-28 mt-4  md:mt-10  md:text-body ">
        At G Global School, we offer more than just education - we provide a
       <span className="text-body font-bold"> gateway to a world of boundless possibilities
        </span>  and personal growth."
      </p>

      {/* <p className="sm:mr-28 mt-4 md:mt-9">
        At G Global School, we offer more than just education - we provide a gateway to a world of boundless possibilities and personal growth."
        </p> */}

      <div className="flex   ">
        <button className="bg-[#F9A51A] w-[200px]  rounded-full lg:ml-0 md:mt-5  my-5 md:mx-auto text-body px-7  py-5 font-bold text-black">
          Know More
        </button>
      </div>
    </div>

    <div className="mx-auto w-full md:p-20 p-large  mt-5 py-10 ">
      <div className="flex  space-x-4 ... w-full">
        <Image
          src="/image/image1.jpg"
          alt="Background"
          className="w-full h-auto"
          width={500}
          height={500}
        />
        {/* Rest of your content */}

        <Image
          src="/image/image2.jpg"
          alt="Background"
          className="w-full h-auto"
          width={500}
          height={500}
        />
        {/* Rest of your content */}

        <Image
          src="/image/image3.jpg"
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

export default Personalgrowth;

import Image from "next/image";

const Cards = () => (
  <section className="section-container">
    <h2 className="text-heading-5 uppercase mb-xl">
      At G Global Students will work collaboratively with teachers to:
    </h2>
    <div className="flex flex-wrap gap-xl justify-center">
      <div className="bg-primary-maroon-1 rounded-3xl p-3xl sm:max-w-[21rem]">
        <div className="max-w-[7rem] mx-auto mb-3">
          <Image
            src="/image/photo1.png"
            alt="Collaborate image"
            className="w-full h-auto"
            width={100}
            height={100}
          />
        </div>
        <p className="text-heading-6 text-white text-center">Make decisions together</p>
      </div>
      <div className="bg-primary-maroon-1 rounded-3xl p-3xl sm:max-w-[21rem]">
        <div className="max-w-[7rem] mx-auto mb-3">
          <Image
            src="/image/photo2.png"
            alt="Collaborate image"
            className="w-full h-auto"
            width={100}
            height={100}
          />
        </div>
        <p className="text-heading-6 text-white text-center">Create shared agreements and routines</p>
      </div>
      <div className="bg-primary-maroon-1 rounded-3xl p-3xl sm:max-w-[21rem]">
        <div className="max-w-[7rem] mx-auto mb-3">
          <Image
            src="/image/photo3.png"
            alt="Collaborate image"
            className="w-full h-auto"
            width={100}
            height={100}
          />
        </div>
        <p className="text-heading-6 text-white text-center">Setup learning space and reflect together</p>
      </div>
    </div>
  </section>
  
);

export default Cards;

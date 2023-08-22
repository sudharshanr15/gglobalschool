import React from "react";
import Image from "next/image";

function StudioCards({ className, img, name, text }) {
  return (
    <section className={className}>
      <div className="w-full md:w-1/2 2xl:w-1/3">
        <Image src={img} alt="logo" className="w-[100%] h-auto" />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-heading-4 md:text-heading-3 uppercase lg:w-[90%] text-primary-maroon-1 mb-xl">
          <span className="font-normal">{name}</span> STUDIO
        </h2>
        <div className="flex flex-col gap-large text-subheading-regular">
          {text.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StudioCards;

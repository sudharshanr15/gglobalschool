import React from "react";

function PoliciesFlex({ headings, links }) {
  return (
    <section className="flex justify-between w-full  mx-auto flex-wrap  section-container">
      {headings.map((heading, index) => (
        <div className=" h-[250px] lg:h-[300px] w-[295px] lg:w-[394px] bg-primary-maroon-1 m-2 border rounded-3xl" key={index}>
          <h1 className="text-white text-center text-heading-6 my-6 lg:my-14">{heading}</h1>
          <div className="flex justify-center items-center">
              <a href={links[index]} target="_blank" className="text-black hover:text-white text-heading-6  bg-primary-yellow-1 hover:bg-transparent  w-[250px] h-[75px] border border-none rounded-2xl text-center py-5">
                view
              </a>
          </div>
        </div>
      ))}
    </section>
  );
}

export default PoliciesFlex;

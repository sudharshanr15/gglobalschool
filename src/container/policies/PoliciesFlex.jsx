import React from "react";

function PoliciesFlex({ headings, links }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:flex flex-wrap gap-md">
      {headings.map((heading, index) => (
        <div className="max-w-[25rem] w-full bg-primary-maroon-1 px-large py-2xl lg:p-3xl border rounded-3xl" key={index}>
          <h1 className="text-white text-center text-heading-6 mb-md">{heading}</h1>
          <div className="flex justify-center items-center">
              <a href={links[index]} target="_blank" className="text-black hover:text-white text-heading-6  bg-primary-yellow-1 hover:bg-transparent  w-[250px] h-[75px] border border-none rounded-2xl text-center py-5">
                view
              </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PoliciesFlex;

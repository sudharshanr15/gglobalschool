import React from "react";
import Link from "next/link";

function PoliciesFlex({ headings, links }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:flex flex-wrap gap-md">
      {headings.map((heading, index) => (
        <div className="max-w-[25rem] w-full bg-primary-maroon-1 px-large py-2xl lg:p-3xl border rounded-3xl" key={index}>
          <h1 className="text-white text-center text-heading-6 mb-large">{heading}</h1>
          <div className="flex justify-center items-center">
              <Link target="_blank" href={links[index]} className="py-2 rounded font-semibold w-full text-center bg-primary-yellow-1 hover:bg-primary-yellow-2">
                view
              </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PoliciesFlex;

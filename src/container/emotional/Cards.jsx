import React from "react";

function Cards({ text, desc }) {
    return (
        <div className="bg-primary-maroon-1 md:w-[35%] my-xl p-2xl rounded-3xl  ">
            <p className="text-heading-5 text-white uppercase">{text}</p>
            <br />
            <p className="text-body text-white">{desc}</p>
        </div>
    );
}

export default Cards;

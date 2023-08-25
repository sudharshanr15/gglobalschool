import React from "react";

function Cards({ text, desc }) {
    return (
        <div className="bg-primary-maroon-1 p-xl rounded-3xl flex-1 lg:max-w-[22rem]">
            <h2 className="text-heading-5 text-white uppercase">{text}</h2>
            <br />
            <p className="text-body text-white">{desc}</p>
        </div>
    );
}

export default Cards;

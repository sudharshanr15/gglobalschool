import React from "react";
import Cards from "./Cards";

function CardSection() {
    return (
        <section>
            <section className="w-[90%] mx-auto md:flex flex-col md:flex-row gap-3xl  md:gap-3xl ">
                <Cards
                    text={"Self Management"}
                    desc={"managing emotions and behavior to achieve ones goal"}
                />{" "}
                <Cards
                    text={"Self Management"}
                    desc={"managing emotions and behavior to achieve ones goal"}
                />
                <Cards
                    text={"Self Management"}
                    desc={"managing emotions and behavior to achieve ones goal"}
                />
            </section>
            <section className="w-[90%] mx-auto mb-3xl md:flex flex-col md:flex-row justify-center items-center md:gap-3xl gap-3xl">
                <Cards
                    text={"Self Management"}
                    desc={"managing emotions and behavior to achieve ones goal"}
                />{" "}
                <Cards
                    text={"Self Management"}
                    desc={"managing emotions and behavior to achieve ones goal"}
                />
            </section>
        </section>
    );
}

export default CardSection;

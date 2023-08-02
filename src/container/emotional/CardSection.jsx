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
                    text={"Social Awareness"}
                    desc={"Showing understanding and Empathy for others"}
                />
                <Cards
                    text={"Self Awareness"}
                    desc={
                        "Recognizing ones emotions, values  strengths and challenges"
                    }
                />
            </section>
            <section className="w-[90%] mx-auto mb-3xl md:flex flex-col md:flex-row justify-center items-center md:gap-3xl gap-3xl">
                <Cards
                    text={"Relationship skills"}
                    desc={
                        "Farming positive relationships, working in teams, dealing effectively with conflicts"
                    }
                />{" "}
                <Cards
                    text={"Responsible Decision making"}
                    desc={
                        "Making ethical, constructive checks about personal and social behaviour"
                    }
                />
            </section>
        </section>
    );
}

export default CardSection;

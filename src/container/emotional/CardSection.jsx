import React from "react";
import Cards from "./Cards";

function CardSection() {
    return (
        <section className="section-container">
            <section className="flex flex-wrap justify-center gap-xl">
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

import React from "react";
import Cards from "./Cards";
import offer1 from "../../assets/offer1.jpg"
import offer2 from "../../assets/offer2.jpg";
import offer3 from "../../assets/offer3.jpg";
import offer4 from "../../assets/offer4.jpg";
import offer5 from "../../assets/offer5.jpg";


function WhatWeOffer() {
    return (
        <section>
            <div
                id="whatWeOffer"
                className="w-[90%] mx-auto mt-3xl flex flex-col gap-large"
            >
                <p className="text-heading-3 text-primary-maroon-1 uppercase mt-2xl">
                    what we offer
                </p>
                <p className="text-body">
                    Learning spaces at GGS are designed to support active
                    participation of the children through play.
                </p>
                <p className="text-body">
                    Learning engagements and classroom activities are designed
                    by teachers to develop their fine and gross motor skills in
                    every day teaching and learning.
                </p>
            </div>
            <div
                id="pypCards"
                className="w-[90%] mx-auto md:flex gap-2xl my-3xl"
            >
                <Cards
                    cardImage={offer1}
                    title={"Essence of PYP"}
                    desc={[
                        "Early learning in the PYP is a holistic learning experience that integrates socio -emotional, physical and cognitive development. ",
                        <br></br>,
                        <br></br>,
                        "In the PYP classroom, it takes place in dynamic environments that promote play, discovery and exploration.",
                    ]}
                    iswide={false}
                />
                <Cards
                    cardImage={offer2}
                    title={"Encouraging students to develop skills"}
                    desc={
                        "We offer a comprehensive, concept driven, student - centric and inquiry-based approach to teaching and learning that fosters the development of thinking, communication, self management, social and research skills."
                    }
                    iswide={false}
                />
                <Cards
                    cardImage={offer3}
                    title={"Hands on experience"}
                    desc={
                        "The learners are engaged in challenging, relevant, critical and creative thinking activities. We also ensure student - centric learning engagements."
                    }
                    iswide={false}
                />
            </div>
            <div
                id="widePypCards"
                className="w-[90%] mx-auto md:flex md:gap-3xl mb-3xl"
            >
                <Cards
                    cardImage={offer4}
                    title={"Caring and responsible citizens"}
                    desc={
                        "The units of inquiry are designed to help foster their imaginations and meet new challenges and opportunities to help build a peaceful world"
                    }
                    iswide={true}
                />
                <Cards
                    cardImage={offer5}
                    title={"Essence of PYP"}
                    desc={
                        "Early learning in the PYP is a holistic learning experience that integrates socio -emotional, physical and cognitive development. In the PYP classroom, it takes place in dynamic environments that promote play, discovery and exploration."
                    }
                    iswide={true}
                />
            </div>
        </section>
    );
}

export default WhatWeOffer;

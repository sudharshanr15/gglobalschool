import React from "react";
import Cards from "./Cards";
import srcImage from "../../assets/cardwide.png";
import cardimg from "../../assets/Rectangle1.png"


function WhatWeOffer() {
    return (
        <>
            <div id="whatWeOffer" className="w-[90%] mx-auto mt-40 flex flex-col gap-8">
                <p className="text-heading-3 text-primary-maroon-1 uppercase">
                    what we offer
                </p>
                <p>
                    Learning spaces at GGS are designed to support active
                    participation of the children through play.
                </p>
                <p>
                    Learning engagements and classroom activities are designed
                    by teachers to develop their fine and gross motor skills in
                    every day teaching and learning.
                </p>
            </div>
            <div id="pypCards" className="w-[90%] mx-auto md:flex gap-16 my-20">
                <Cards
                    cardImage={cardimg}
                    title={"Essence of PYP"}
                    desc={
                        "Early learning in the PYP is a holistic learning experience that integrates socio -emotional, physical and cognitive development. In the PYP classroom, it takes place in dynamic environments that promote play, discovery and exploration."
                    }
                    iswide={false}
                />
                <Cards
                    cardImage={cardimg}
                    title={"Essence of PYP"}
                    desc={
                        "Early learning in the PYP is a holistic learning experience that integrates socio -emotional, physical and cognitive development. In the PYP classroom, it takes place in dynamic environments that promote play, discovery and exploration."
                    }
                    iswide={false}
                />
                <Cards
                    cardImage={cardimg}
                    title={"Essence of PYP"}
                    desc={
                        "Early learning in the PYP is a holistic learning experience that integrates socio -emotional, physical and cognitive development. In the PYP classroom, it takes place in dynamic environments that promote play, discovery and exploration."
                    }
                    iswide={false}
                />
            </div>
            <div
                id="widePypCards"
                className="w-[90%] mx-auto md:flex md:gap-10"
            >
                <Cards
                    cardImage={srcImage}
                    title={"Essence of PYP"}
                    desc={
                        "Early learning in the PYP is a holistic learning experience that integrates socio -emotional, physical and cognitive development. In the PYP classroom, it takes place in dynamic environments that promote play, discovery and exploration."
                    }
                    iswide={true}
                />
                <Cards
                    cardImage={srcImage}
                    title={"Essence of PYP"}
                    desc={
                        "Early learning in the PYP is a holistic learning experience that integrates socio -emotional, physical and cognitive development. In the PYP classroom, it takes place in dynamic environments that promote play, discovery and exploration."
                    }
                    iswide={true}
                />
            </div>
        </>
    );
}

export default WhatWeOffer;

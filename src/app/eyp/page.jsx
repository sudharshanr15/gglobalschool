import React from "react";
import Image from "next/image";
import eypLogo from "../../assets/eyp image 1.jpg";
import eypLogo2 from "../../assets/Group 24.png";
import TopicCard from "@/component/topicsCard/TopicCard";
import Hero from "../../component/hero/Hero";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

function page() {
    return (
        <>
            <Hero title={"Early Year Programme"} />
            <section className="relative section-container bg-primary-maroon-1 ">
                <div className="absolute top-0 left-0 z-0">
                    <FormatQuoteIcon sx={{ fontSize: 150, opacity: 0.2, color: "#F05A22"}} />
                </div>
                <p className="text-heading-6 uppercase text-white z-10">
                    SHAPING YOUNG MINDS : A CHILD'S LEARNING BEGINS FROM EARLY
                    YEARS
                </p>
            </section>

            {/* early year program */}

            <section className="section-container w-full flex flex-col md:flex-row gap-5 md:gap-28">
                <div className="w-full md:w-1/2">
                    <Image
                        src={eypLogo}
                        className="w-full h-full"
                        alt="logo"
                        unoptimized
                    />
                </div>
                <div className="w-full md:w-1/2">
                    <p className="text-primary-maroon-1 text-heading-3 mb-xl">
                        EARLY YEAR PROGRAMME
                    </p>
                    <div className="flex flex-col gap-large text-subheading-regular">
                        <p>
                            Children are natural inquirers from birth; they have
                            the capacity to learn about, interact with, and
                            interpret the world around them.
                        </p>
                        <p>
                            From birth, children possess all kinds of mental
                            abilities uniquely suited to these early phases of
                            learning and development.
                        </p>
                        <p>
                            They are curious and capable learners with a sense
                            of agency, rich in potential, bringing valid skills,
                            preferences, and understanding to the educational
                            process.
                        </p>
                    </div>
                </div>
            </section>

            {/* feature */}

            <section className="section-container flex flex-col md:flex-row gap-5 md:gap-28">
                <div className="w-full md:w-1/2">
                    <p className="text-primary-maroon-1 text-heading-3 mb-xl">
                        FEATURES
                    </p>
                    <div className="flex flex-col gap-large text-subheading-regular">
                        <p>
                            Learning spaces at GGS are designed to support
                            active participation of children through play.
                        </p>
                        <p>
                            Learning engagements and classroom activities are
                            designed by teachers to develop their fine and gross
                            motor skills in everyday teaching and learning.
                        </p>
                        <p>
                            Literacy and Numeracy curriculum are framed through
                            a wide range of playful and inquiry-based
                            explorations. Learners are provided with various
                            symbolic and representational learning.
                        </p>
                        <p>
                            Learner’s are provided with various symbolic and representational learning.
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <Image
                        src={eypLogo2}
                        alt="logo"
                        className="w-full h-auto"
                        unoptimized
                    />
                </div>
            </section>

            {/* PROGRAMS STECTION */}
            <section className="section-container">
                <h2 className="text-heading-4 md:text-heading-3 uppercase lg:w-[90%] text-primary-maroon-1 mb-xl">
                    early years @ g global school programmes
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-xl">
                    <div className="bg-[#790000] text-white rounded-3xl p-xl">
                        <h3 className="text-heading-4 mb-xl uppercase">PLAY GROUND</h3>
                        <p className="text-primary-yellow text-heading-6 uppercase">
                            2.5 to 3 years
                        </p>
                    </div>
                    <div className="bg-[#790000] text-white rounded-3xl p-xl">
                        <h3 className="text-heading-4 mb-xl uppercase">KINDER GARDEN 1</h3>
                        <p className="text-primary-yellow text-heading-6 uppercase">
                            3 years
                        </p>
                    </div>
                    <div className="bg-[#790000] text-white rounded-3xl p-xl">
                        <h3 className="text-heading-4 mb-xl uppercase">KINDER GARDEN 2</h3>
                        <p className="text-primary-yellow text-heading-6 uppercase">
                            4 years
                        </p>
                    </div>
                    <div className="bg-[#790000] text-white rounded-3xl p-xl">
                        <h3 className="text-heading-4 mb-xl uppercase">KINDER GARDEN 3</h3>
                        <p className="text-primary-yellow text-heading-6 uppercase">
                            5 years
                        </p>
                    </div>
                </div>
            </section>

            {/* other topics to explore */}

            <section className="section-container">
                <h2 className="text-heading-4 md:text-heading-3 uppercase lg:w-[90%] text-primary-maroon-1 mb-xl">
                    OTHER TOPICS TO EXPLORE
                </h2>
                <div className="flex flex-col md:flex-row gap-xl">
                    <TopicCard
                      text={"STUDENT COUNCIL"}
                      link={""}
                    />
                    <TopicCard
                      text={"STUDENT COUNCIL"}
                      link={""}
                    />
                </div>
            </section>
        </>
    );
}

export default page;

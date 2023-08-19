import React from "react";
import Image from "next/image";
import eypLogo from "../../assets/eyp image 1.jpg";
import eypLogo2 from "../../assets/Group 24.png";
import TopicCard from "../../container/eyp/TopicCard";

function page() {
    return (
        <>
            <div className="w-[85%] ">
                <p className="text-heading-4 uppercase md:pl-24 px-4">
                    SHAPING YOUNG MINDS : A CHILD'S LEARNING BEGINS FROM EARLY
                    YEARS
                </p>
            </div>

            {/* early year program */}

            <section className="section-container w-full  flex flex-col md:flex-row   top-3 p-5 md:mt-6 gap-5 md:gap-[117px]">
                <div className="w-full md:w-[550.281px] md:h-[420.876px]">
                    <Image
                        src={eypLogo}
                        className="w-full h-full"
                        alt="logo"
                        unoptimized
                    />
                </div>
                <div className="w-full md:w-[70%]">
                    <p className="text-primary-maroon-1 text-heading-3 w-full md:w-[60%]">
                        EARLY YEAR PROGRAMME
                    </p>
                    <div className="text-base font-normal leading-7 tracking-normal text-left md:w-[78%]">
                        <p className="pt-4">
                            Children are natural inquirers from birth; they have
                            the capacity to learn about, interact with, and
                            interpret the world around them.
                        </p>
                        <p className="pt-4">
                            From birth, children possess all kinds of mental
                            abilities uniquely suited to these early phases of
                            learning and development.
                        </p>
                        <p className="pt-4">
                            They are curious and capable learners with a sense
                            of agency, rich in potential, bringing valid skills,
                            preferences, and understanding to the educational
                            process.
                        </p>
                    </div>
                </div>
            </section>

            {/* feature */}

            <section className=" section-container  flex flex-col md:flex-row md:mt-7 gap-5 md:gap-[117px]">
                <div className="w-full md:w-[50%]  ">
                    <p className="text-primary-maroon-1 text-heading-3 w-full md:w-[50%]">
                        FEATURES
                    </p>
                    <div className="text-base font-normal leading-7 tracking-normal text-left">
                        <p className="pt-2">
                            Learning spaces at GGS are designed to support
                            active participation of children through play.
                        </p>
                        <p className="pt-4">
                            Learning engagements and classroom activities are
                            designed by teachers to develop their fine and gross
                            motor skills in everyday teaching and learning.
                        </p>
                        <p className="pt-4">
                            Literacy and Numeracy curriculum are framed through
                            a wide range of playful and inquiry-based
                            explorations. Learners are provided with various
                            symbolic and representational learning.
                        </p>
                    </div>
                </div>
                <div className="relative left-0 md:left-3 w-full md:w-[80%]">
                    <Image
                        src={eypLogo2}
                        alt="logo"
                        className="w-[95%] h-[80%] "
                    />
                </div>
            </section>

            {/* PROGRAMS STECTION */}
            <section className="section-container w-auto text-left  content-center">
                <p className="text-heading-4 uppercase mx-auto w-[90%]  text-primary-maroon-1">
                    early years @ g global school programmes
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2  mx-auto  xl:grid-cols-2 gap-3 w-[90%] md:w-[75%] mt-10 left-7  ">
                    <div className="bg-[#790000] text-white rounded-3xl p-4  text-center ">
                        <p className="text-heading-6">PLAY GROUND</p>
                        <div className="bg-[#F9A51A] text-black text-center rounded-3xl p-2  text-heading-6 mx-4 my-5">
                            <p>2.5 years to 3 years</p>
                        </div>
                    </div>

                    <div className="bg-[#790000] text-white rounded-3xl p-4 text-center">
                        <p className="text-heading-6">KINDER GARDER 1</p>
                        <div className="bg-[#F9A51A]  text-black text-center rounded-3xl text-heading-6 p-2  mx-4 my-5">
                            <p> 3 years</p>
                        </div>
                    </div>

                    <div className="bg-[#790000] text-white rounded-3xl p-4  text-center">
                        <p className="text-heading-6">KINDER GARDEN 2</p>
                        <div className="bg-[#F9A51A]  text-black text-center rounded-3xl text-heading-6 p-2 mx-4 my-5">
                            <p>4 years</p>
                        </div>
                    </div>

                    <div className="bg-[#790000] text-white rounded-3xl p-4 text-center">
                        <p className="text-heading-6">KINDER GARDERN 3</p>
                        <div className="bg-[#F9A51A]   text-black text-center rounded-3xl text-heading-6 p-2 mx-4 my-5">
                            <p>5 years</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* other topics to explore */}

            <div>
                <p className="text-heading-4 uppercase mx-auto w-[90%] mt-10 text-primary-maroon-1">
                    other topics to explore
                </p>
            </div>

            <section className="section-container md:w-[95%] flex flex-col md:flex-row justify-center   top-3  md:p-10 gap-5 md:gap-[30px]">
                <TopicCard text={"life @ ggc"} text1={"LIFE @ GCC"} />
                <TopicCard text={"student council"} text1={"STUDENT COUNCIL"} />
            </section>
        </>
    );
}

export default page;

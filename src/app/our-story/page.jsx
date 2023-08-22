import React from "react";
import Image from "next/image";
import logo1 from "../../assets/orustory1.png";
import Logo2 from "../../assets/orustory2.png";
import logo3 from "../../assets/orustory3.png";
import logo4 from "../../assets/orustory4.png";
import logo5 from "../../assets/orustory5.png";
import logo6 from "../../assets/ourstory6.png";
import logo7 from "../../assets/ourstory7.png";
import TopicCard from "@/component/topicsCard/TopicCard";
import Hero from "../../component/hero/Hero";

function page() {
    return (
        <>
            <Hero title={"GGS Story"} />
            <section className="section-container">
                <p className="text-heading-6">
                    G Global School nurtures <span className="text-primary-maroon">sparkling imaginations, fertile minds, and willingness</span> to take on risks with student's agency.
                </p>
            </section>
            {/* about GGS */}
            <section className="section-container">
                <div className="w-full flex flex-col md:flex-row gap-xl">
                    <div className="w-full md:w-1/2">
                        <Image
                            src={logo1}
                            className="w-full h-auto"
                            alt="logo"
                            unoptimized
                        />
                    </div>
                    <div className="w-full md:w-[50%]">
                        <h2 className="text-heading-4 md:text-heading-3 uppercase lg:w-[90%] text-primary-maroon-1 mb-xl">
                            About GGS
                        </h2>
                        <div className="flex flex-col gap-large text-body">
                            <p>
                                We, the passionate educators with more than <span className="font-bold"> 44 years of experience.</span>
                            </p>
                            <p>We proudly introduced our new venture, the G Global School, a fresh breath of experience to <span className="font-bold">present IB education, in the year 2017</span> in our very own town <span className="font-bold">Tiruchengode</span>, a prime location for educational institutions in Tamil Nadu.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* chairman director */}
            <section className="section-container">
                <h2 className="text-heading-4 md:text-heading-3 uppercase lg:w-[90%] text-primary-maroon-1 mb-xl">
                    MANAGEMENT
                </h2>
                <div className="mb-xl">
                    <div className="w-full flex flex-col md:flex-row items-center gap-xl">
                        <div className="w-full md:w-1/2">
                            <div className="flex flex-col gap-large text-body">
                                <h3 className="text-primary-orange-1 text-heading-6 w-full">
                                    CHAIRMAN DIRECTOR
                                </h3>
                                <p>
                                  A noble laureate who pursued his professional
                                    life in educational field. He began his career
                                    as a teacher in government school and with his
                                    consistent perseverance he became the Principal.
                                </p>
                                <p>
                                    Later he served as the Head of Department in
                                    various govern schools. His knowledge and
                                    commitment towards educating young minds made
                                    him the Secretary and
                                    <span className="font-bold">
                                        {" "}
                                        Managing Trustee of Vidyaa Vikas Educational
                                        institution and the Founder of Vetri Vikaas
                                        Educational institution .
                                    </span>
                                </p>
                                <p>
                                    His dream of providing International Education
                                    in his hometown was fulfilled by establishing G
                                    Global School.
                                </p>
                            </div>
                        </div>
                        <div className="relative w-full md:w-1/2">
                            <Image
                                src={Logo2}
                                alt="logo"
                                className="w-full h-auto"
                                unoptimized
                            />
                            <div className="absolute flex flex-col p-2  rounded-[48px] bg-gradient-to-t from-zinc-900 to-transparent justify-center items-center bottom-0 left-0 right-0 top-[40%] h-[60%] w-full md:w-full text-heading-6">
                                <p className="text-white uppercase pt-10 p-2">
                                    Dr. S. GUNASEKARAN M.Ed., M. Phil., Phd.
                                </p>
                                <p className="text-white uppercase pt-large">
                                    CHAIRMAN DIRECTOR,G GLOBAL SCHOOL
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-xl">
                    <div className="w-full flex flex-col md:flex-row-reverse items-center gap-xl">
                        <div className="w-full md:w-[50%]">
                            <div className="flex flex-col gap-large text-body">
                                <h3 className="text-primary-orange-1 text-heading-6 w-full">
                                    MANAGING DIRECTOR
                                </h3>
                                <p>
                                    A versatile administrator with a deep knowledge
                                    in technology, implements the same in his
                                    educational profession.
                                </p>
                                <p>
                                    He is the
                                    <span className="font-bold">
                                        Chairman of Vetri Vikaas Educational
                                        institutions - Rasipuram and Mallur.
                                    </span>
                                    He is also the Director of Vidyaa Vikas
                                    Educational institutions - Karamadai and Tanjore
                                    and is now implementing global ideas and provide
                                    holistic education through G Global School.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 relative">
                            <Image
                                src={logo3}
                                alt="logo"
                                className="w-full h-auto"
                                unoptimized
                            />
                            <div className="absolute flex flex-col  md:rounded-[40px] rounded-[20px] bg-gradient-to-t from-zinc-900 to-transparent justify-center items-center bottom-0 left-0 right-0 top-[40%] h-[60%] w-full text-heading-6">
                                <p className="text-white uppercase pt-12">
                                    DR. G. VETRICHELVAN
                                </p>
                                <p className="text-white uppercase pt-3 text-center ">
                                    MANAGING DIRECTOR,G GLOBAL SCHOOL
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-xl">
                    <div className="w-full flex flex-col md:flex-row items-center gap-xl">
                        <div className="w-full md:w-[50%]">
                            <div className="flex flex-col gap-large text-body">
                                <h3 className="text-primary-orange-1 text-heading-6 w-full">
                                    EXECUTIVE DIRECTOR/ HEAD OF SCHOOL
                                </h3>
                                <p>
                                    A compassionate and empowered lady who handles
                                    every situation with sheer positivity.
                                </p>
                                <p>
                                    She started her educational career as a Primary
                                    Years academic Consultant in Vetri Vikaas Public
                                    School, Rasipuram.
                                </p>
                                <p>
                                    She designed and created books for kindergarten
                                    imbibing her Montessori learning. Her curiosity
                                    provoked her to gather extensive knowledge about
                                    IB PYP which lands her as the Head of School in
                                    GGS providing facilities to the school community
                                    through her caring attribute.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 relative">
                            <Image
                                src={logo4}
                                alt="logo"
                                className="w-full h-auto"
                                unoptimized
                            />
                            <div className="absolute flex flex-col   md:rounded-[40px] rounded-[20px]  bg-gradient-to-t from-zinc-900 to-transparent justify-center items-center bottom-0 left-0 right-0 top-[40%] h-[60%] w-full text-heading-6">
                                <p className="text-white uppercase pt-large p-md  ">
                                    DR. S. ROSHNI VETRICHELVAN
                                </p>
                                <p className="text-white uppercase pt-md p-md ">
                                    EXECUTIVE DIRECTOR / HEAD OF SCHOOL,G GLOBAL
                                    SCHOOL
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* PEDAGOGICAL LEADERSHIP TEAM */}
            <section className="section-container">
                <h2 className="text-heading-4 md:text-heading-3 uppercase lg:w-[90%] text-primary-maroon-1 mb-xl">
                    PEDAGOGICAL LEADERSHIP TEAM
                </h2>
                <p className="text-body mb-xl">
                    Our PLT includes our head of school, deputy head of school
                    Ms. Sathyavarthini and our coordinator Ms. Suguna. Our PLT
                    takes the responsibility of framing our curriculum and
                    ensures the interdisciplinary learning of the students which
                    are broad and balanced, conceptual and connected.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-xl">
                    <div className="w-full p-md">
                        <Image
                            src={logo5}
                            alt="logo"
                            className="w-full md:h-auto "
                            unoptimized
                        />
                        <p className="text-heading-4 mt-md">Ms. SUGUNA</p>
                        <p className="pt-large text-heading-6 font-normal">
                            PYP COORDINATOR
                        </p>
                        <p className="pt-md text-body">
                            A passionate leader, who drives the team with sheer
                            positivity and enthusiasm. Her journey at GGS began
                            in the year 2018. Her positive mindset guides the
                            GGS team both academically and non-academically
                        </p>
                    </div>
                    <div className="w-full p-md">
                        <Image
                            src={logo5}
                            alt="logo"
                            className="w-full md:h-auto "
                            unoptimized
                        />
                        <p className="text-heading-4 mt-md">Ms. SUGUNA</p>
                        <p className="pt-large text-heading-6 font-normal">
                            PYP COORDINATOR
                        </p>
                        <p className="pt-md text-body">
                            A passionate leader, who drives the team with sheer
                            positivity and enthusiasm. Her journey at GGS began
                            in the year 2018. Her positive mindset guides the
                            GGS team both academically and non-academically
                        </p>
                    </div>
                    <div className="w-full p-md">
                        <Image
                            src={logo5}
                            alt="logo"
                            className="w-full md:h-auto "
                            unoptimized
                        />
                        <p className="text-heading-4 mt-md">Ms. SUGUNA</p>
                        <p className="pt-large text-heading-6 font-normal">
                            PYP COORDINATOR
                        </p>
                        <p className="pt-md text-body">
                            A passionate leader, who drives the team with sheer
                            positivity and enthusiasm. Her journey at GGS began
                            in the year 2018. Her positive mindset guides the
                            GGS team both academically and non-academically
                        </p>
                    </div>
                    <div className="w-full p-md">
                        <Image
                            src={logo5}
                            alt="logo"
                            className="w-full md:h-auto "
                            unoptimized
                        />
                        <p className="text-heading-4 mt-md">Ms. SUGUNA</p>
                        <p className="pt-large text-heading-6 font-normal">
                            PYP COORDINATOR
                        </p>
                        <p className="pt-md text-body">
                            A passionate leader, who drives the team with sheer
                            positivity and enthusiasm. Her journey at GGS began
                            in the year 2018. Her positive mindset guides the
                            GGS team both academically and non-academically
                        </p>
                    </div>
                </div>
            </section>
            {/* other topics */}
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

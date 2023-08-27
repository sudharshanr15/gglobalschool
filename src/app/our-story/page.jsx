import React from "react";
import Image from "next/image";
import logo1 from "../../assets/orustory1.png";
import { Management, LeadershipTeam } from "@/container/our-story";
import TopicCard from "@/component/topicsCard/TopicCard";
import Hero from "../../component/hero/Hero";
import {story_1} from "@/assets/images/our-story";

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
                            src={story_1}
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
            <Management />
            {/* PEDAGOGICAL LEADERSHIP TEAM */}
            <LeadershipTeam />
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

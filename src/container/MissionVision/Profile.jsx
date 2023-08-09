import React, { useRef, useState } from "react";
import missionImage from "../../assets/mv.png";
import Image from "next/image";
import MissionCards from "./MissionCard";
import scrollImg from "../../assets/scroll.png";
import profile1 from "../../assets/profile1.jpg";
import profile2 from "../../assets/profile2.jpg";
import profile3 from "../../assets/profile3.jpg";
import profile4 from "../../assets/profile4.jpg";
import profile5 from "../../assets/profile5.png";
import profile6 from "../../assets/profile6.png";
import profile7 from "../../assets/profile7.jpg";
import profile8 from "../../assets/profile8.png";
import profile9 from "../../assets/profile9.jpg";

function Profile() {
    const ref = useRef(null);
    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };
    return (
        <section>
            <section className=" section-container md:flex  md:gap-large   ">
                <div className="mb-large">
                    <p className="text-heading-3 text-primary-maroon-1 mb-md">
                        IB LEARNER PROFILE
                    </p>
                    <p className="text-body">
                        At G Global School we are dedicated to creating a
                        learning environment that supports the development of
                        the whole child, aligning with the IB Learner Profile
                        attributes.
                        <br />
                        <br />
                        Our vision and mission guide us in empowering our
                        students to become lifelong learners, critical thinkers,
                        and responsible global citizens who can contribute
                        positively to the world around them.
                    </p>
                </div>
                <Image src={missionImage} alt="mission" unoptimized />
            </section>

            <section className="  section-container  relative ">
                <Image
                    src={scrollImg}
                    onClick={() => {
                        scroll(440);
                    }}
                    className={` absolute md:top-80 top-96 right-md `}
                />
                <Image
                    src={scrollImg}
                    onClick={() => {
                        scroll(-440);
                    }}
                    className={` absolute left-md md:top-80 top-96  rotate-180`}
                />

                <div
                    ref={ref}
                    className="flex gap-xl overflow-x-auto scroll-smooth scrollbar-hide"
                >
                    <MissionCards
                        cardImage={profile1}
                        title={"THINKER"}
                        desc={
                            "We approach complex problems critically and creatively. We apply our thinking skills to analyze and evaluate information, make informed decisions, and solve real-life challenges."
                        }
                        iswide={false}
                    />
                    <MissionCards
                        cardImage={profile2}
                        title={"KNOWLEDABLE"}
                        desc={
                            "We strive to develop a deep understanding of a wide range of subjects and explore the connections between them. We embrace both local and global perspectives and are knowledgeable about issues of significance"
                        }
                        iswide={false}
                    />
                    <MissionCards
                        cardImage={profile3}
                        title={"COMMUNICATORS"}
                        desc={
                            "We approach complex problems critically and creatively. We apply our thinking skills to analyze and evaluate information, make informed decisions, and solve real-life challenges."
                        }
                        iswide={false}
                    />
                    <MissionCards
                        cardImage={profile4}
                        title={"INQUIRER"}
                        desc={
                            "We nurture a love for learning and develop the skills to acquire knowledge independently. We are curious, ask questions, and actively engage in the learning process."
                        }
                        iswide={false}
                    />
                    <MissionCards
                        cardImage={profile5}
                        title={"PRINCIPLED"}
                        desc={
                            "We act with integrity and honesty, upholding ethical principles and respecting the rights and dignity of others. We take responsibility for our actions and contribute to a just and harmonious community."
                        }
                        iswide={false}
                    />
                    <MissionCards
                        cardImage={profile6}
                        title={"OPEN MINDED"}
                        desc={
                            "We embrace and appreciate our own culture and the diversity of other cultures, perspectives, and ideas. We seek to understand different viewpoints and are willing to consider new possibilities."
                        }
                        iswide={false}
                    />
                    <MissionCards
                        cardImage={profile7}
                        title={"RISK TAKERS"}
                        desc={
                            "We approach challenges with confidence and enthusiasm. We are willing to try new things, explore unfamiliar territories, and take calculated risks to extend our learning and personal growth."
                        }
                        iswide={false}
                    />
                    <MissionCards
                        cardImage={profile8}
                        title={"BALANCED"}
                        desc={
                            "We strive to achieve a balance between our intellectual, physical, and emotional well-being. We recognize the importance of maintaining a healthy lifestyle and fostering positive relationships."
                        }
                        iswide={false}
                    />
                    <MissionCards
                        cardImage={profile9}
                        title={"REFLECTIVE"}
                        desc={
                            "We thoughtfully consider our own strengths and weaknesses, set goals for personal growth, and evaluate our progress. We learn from our experiences and use them to shape our future actions."
                        }
                        iswide={false}
                    />
                </div>
            </section>
        </section>
    );
}

export default Profile;

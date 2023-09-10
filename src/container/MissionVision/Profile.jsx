import React, { useRef, useState } from "react";
import MissionCards from "./MissionCard";
import { img_4 } from "@/assets/images/individual-pursuit";
import { img_4 as risk_taker } from "@/assets/images/adventure-challenges";
import { img_2 as open_minded } from "@/assets/images/games";
import { support_1 as balanced } from "@/assets/images/emotional-support";
import { pyp as knowledgeable } from "@/assets/images/curriculum";
import { thinker } from "@/assets/images/curriculum";
import { inquirers as inquirer } from "@/assets/images/curriculum";
import { principled } from "@/assets/images/curriculum";
import { communicators } from "@/assets/images/curriculum";
import {story_1 as caring} from "@/assets/images/our-story";

function Profile() {
    return (
        <section>
            <section className=" section-container ">
                <div className="mb-xl">
                    <p className="text-heading-3 text-primary-maroon-1 mb-md">
                        IB LEARNER PROFILE ATTRIBUTES
                    </p>
                    <p className="text-body">
                        At G Global School we are dedicated to creating a
                        learning environment that supports the development of
                        the whole child, aligning with the IB Learner Profile
                        Attributes.
                        <br />
                        <br />
                        Our vision and mission guide us in empowering our
                        students to become lifelong learners, critical thinkers,
                        and responsible global citizens who can contribute
                        positively to the world around them.
                    </p>
                </div>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-xl"
                >
                    <MissionCards
                        cardImage={thinker}
                        title={"THINKERS"}
                        desc={
                            "We approach complex problems critically and creatively. We apply our thinking skills to analyze and evaluate information, make informed decisions, and solve real-life challenges."
                        }
                        iswide={false}
                    />
                    <MissionCards
                        cardImage={knowledgeable}
                        title={"KNOWLEDGEABLE"}
                        desc={
                            "We strive to develop a deep understanding of a wide range of subjects and explore the connections between them. We embrace both local and global perspectives and are knowledgeable about issues of significance"
                        }
                        iswide={false}
                    />
                    <MissionCards
                        cardImage={communicators}
                        title={"COMMUNICATORS"}
                        desc={
                            "We approach complex problems critically and creatively. We apply our thinking skills to analyze and evaluate information, make informed decisions, and solve real-life challenges."
                        }
                        iswide={false}
                    />
                    <MissionCards
                        cardImage={inquirer}
                        title={"INQUIRERS"}
                        desc={
                            "We nurture a love for learning and develop the skills to acquire knowledge independently. We are curious, ask questions, and actively engage in the learning process."
                        }
                        iswide={false}
                    />
                    <MissionCards
                        cardImage={principled}
                        title={"PRINCIPLED"}
                        desc={
                            "We act with integrity and honesty, upholding ethical principles and respecting the rights and dignity of others. We take responsibility for our actions and contribute to a just and harmonious community."
                        }
                        iswide={false}
                    />
                    <MissionCards
                        cardImage={open_minded}
                        title={"OPEN-MINDED"}
                        desc={
                            "We embrace and appreciate our own culture and the diversity of other cultures, perspectives, and ideas. We seek to understand different viewpoints and are willing to consider new possibilities."
                        }
                        iswide={false}
                    />
                    <MissionCards
                        cardImage={risk_taker}
                        title={"RISK-TAKERS"}
                        desc={
                            "We approach challenges with confidence and enthusiasm. We are willing to try new things, explore unfamiliar territories, and take calculated risks to extend our learning and personal growth."
                        }
                        iswide={false}
                    />
                    <MissionCards
                        cardImage={balanced}
                        title={"BALANCED"}
                        desc={
                            "We strive to achieve a balance between our intellectual, physical, and emotional well-being. We recognize the importance of maintaining a healthy lifestyle and fostering positive relationships."
                        }
                        iswide={false}
                    />
                    <MissionCards
                        cardImage={img_4}
                        title={"REFLECTIVE"}
                        desc={
                            "We thoughtfully consider our own strengths and weaknesses, set goals for personal growth, and evaluate our progress. We learn from our experiences and use them to shape our future actions."
                        }
                        iswide={false}
                    />
                    <MissionCards
                        cardImage={caring}
                        title={"CARING"}
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

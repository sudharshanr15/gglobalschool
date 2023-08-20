import React from "react";
import { Header, CardSection,OtherTopics } from "../../container/emotional";
import learning from "../../assets/learning.png";
import emo1 from "../../assets/emo1.jpg";
import emo2 from "../../assets/emo2.jpg";
import Hero from "../../component/hero/Hero";

function page() {
    return (
        <div>
            <Hero title={"emotional and ethical  support"} />
            <Header
                title={"EMOTIONAL & ETHICAL SUPPORT"}
                content={[
                    "Our GGS incorporates and ensures that well being is intrinsically linked to all aspects of learner’s experience at school and beyond. ",
                    <br></br>,
                    <br></br>,
                    " Our facilitators nurture the and develop physical, emotional, cognitive, spiritual and social health of the ggians and make them Internationally thought people and a great citizen. Every learner’s holistic well being is implicitly and explicitly addressed through words of encouragement and constant motivation.",
                    <br></br>,
                    <br></br>,
                    " Social and emotional learning is the process of developing self-awareness, self control, and interpersonal skills that are necessary for resilience, wellbeing, and overall life satisfaction. This can be achieved through the practice of student agency.   ",
                ]}
                img={learning}
            />
            <CardSection />
            <Header
                title={"THROUGH STUDENT AGENCY"}
                content={[
                    "Learners take initiative, express interest and wonderings, make choices and are aware of their learning goals. They are active, engaged, monitor and adjust their learning as needed. They offer feedback to others and consult on decisions that affect them.",
                    <br></br>,
                    <br></br>,
                    " They also take responsibility for their learning and collaborate with facilitators and peers to plan, present and assess learning needs.",
                    <br></br>,
                    <br></br>,
                    "Our facilitators recognize learners’ capabilities through listening, respecting and responding to their ideas. They make thoughtful considerations and decisions with an emphasis on relationships.",
                ]}
                img={emo1}
                rev={true}
            />{" "}
            <Header
                title={"GGS VIRTUAL SCHOOLING"}
                content={[
                    "Adapting to situations and preparing for the unprepared, G Global School adapted well to the transition of physical to virtual schooling during the pandemic situation. ",
                    <br></br>,
                    <br></br>,
                    " Collaborative planning of the teaching community imbibing Student Agency led to the success of virtual schooling implementation.",
                    <br></br>,
                    <br></br>,
                    " Amidst the restrictions of face-to-face learning, facilitators were trained to be creative and responsive to cater the learning needs of our students in an uninterrupted way.",
                    <br></br>,
                    <br></br>,
                    " As every facilitator is provided with an iPad, it is possible for facilitators to create and modify their teaching material addressing the individual and personalized needs of our young Ggians.",
                    <br></br>,
                    <br></br>,
                    " In addition to language, mathematics and UOI, our Zoom sessions also ensure holistic learning by providing online classes that develop the learners’ social and emotional learning, visual arts, dance, music, reading and physical education..",
                ]}
                img={emo2}
            />
            <OtherTopics />
        </div>
    );
}

export default page;

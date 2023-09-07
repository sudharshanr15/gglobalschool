import { ib1, ib2, ib3, ib4, ib5, ib6, ib7, ib8, ib9, ib10 } from "@/assets";
import Image from "next/image";

function Cards() {
    const cards = [
        {
            image: ib1,
            title: "Encourage students to inquire",
            text: "The PYP fosters natural curiosity and learning in creative, supportive and collaborative environments."
        },
        {
            image: ib2,
            title: "Understanding a complex and interdependent world",
            text: "PYP students create meaning for themselves and build understanding through exploring."
        },
        {
            image: ib3,
            title: "Emerging as confident communicate",
            text: "PYP students work collaboratively with teachers and other students to plan, present and assess their own learning."
        },
        {
            image: ib4,
            title: "Learning how to learn",
            text: "PYP students work collaboratively with teachers and other students to plan, present and assess their own learning"
        },
        {
            image: ib5,
            title: "Encourages international mindedness",
            text: "Collaboration and understanding of their own and other cultures or an important focus of PYP. Students learn how to be respectful and open minded."
        },
        {
            image: ib6,
            title: "Seeing things from different perspective",
            text: "Students use critical and creative, thinking to develop knowledge, understanding and skills within and across subject areas."
        },
        {
            image: ib7,
            title: "Motivate students to take action in real life",
            text: "Students believe they are able to grow and succeed. They make appropriate choices and take responsibility for their actions."
        },
        {
            image: ib8,
            title: "Thinking about the real world issues",
            text: "Creative learning gives students the agility and imagination to respond to new and unexpected challenges and opportunities in an increasingly globalised and uncertain world"
        },
        {
            image: ib9,
            title: "Involving whole school learning community",
            text: "Together we celebrate our common humanity, and the belief that education can help to build a better and more peaceful world"
        },
        {
            image: ib10,
            title: "Caring and responsible citizens",
            text: "Students can express ideas and opinions, and they can propose solutions that make a difference in their lives and the lives of others."
        },
    ]
    return (
        <section className="section-container">
        <h2 className="text-heading-4 md:text-heading-3 uppercase lg:w-[90%] text-primary-maroon-1 mb-xl">
            10 REASONS WHY IB
        </h2>
        <div className="flex flex-col gap-xl">
            {cards.map((item, index) => (
                <div className={`flex flex-col items-center md:flex-row gap-md p-large relative ${index % 2 == 0 ? "bg-primary-yellow" : "bg-primary-yellow-2"}`}>
                    <div className="absolute top-0 left-0 bg-white text-heading-5 m-large w-14 aspect-square rounded-full">
                        <span className="flex items-center justify-center w-full h-full">
                            {index + 1}
                        </span>
                    </div>
                    <div className="w-full max-w-[14rem] mx-auto md:max-w-[10rem]">
                        <Image src={item.image} alt="IB Image" className="w-full" />
                    </div>
                    <div className="w-full">
                        <h3 className="text-heading-5 text-primary-orange md:text-gray-900 mb-large">
                            {item.title}
                        </h3>
                        <p className="text-body">
                            {item.text}
                        </p>
                    </div>
                </div>
            ))}
        </div>
        </section>
    );
}

export default Cards;

import Image, { StaticImageData } from "next/image";
import { dietplan, health } from "@/assets/images/health-wellbeing";

type CardType = {
    title: string,
    img: StaticImageData,
    text: string[]
}

function Cards() {
    const card: CardType[] = [
        {
            title: "DIET PLAN",
            img: dietplan,
            text: [
            "A healthy diet is essential for good health and well being. Our GGS ensure that our students get all the necessary nutrients through their food. We motivate students to have healthy food inside and outside school.",
            "We believe that being healthy should be a part of our overall lifestyle and we incorporate the same to our students.",
            'Our In-house chefs bring to our table the most nutritious meals that our students thoroughly seems to enjoy. We use the most sophisticated equipment’s and cook as per the weekly plan and make sure to full-fill the needs of children.',
            "Our teachers spend their time to ensure that all the children gets their daily nourishment without fail, Because a happy tummy gives us a curios mind!."
            ],
        },
        {
            title: "HEALTH & WELL BEING",
            img: health,
            text: [
            "During COVID situation offline schooling is as challenging as virtual one. Our school handles this situation well by following all guidelines provided by the government.",
            "Regular checks are done inside the school campus for students, teachers and all the staffs and helpers working inside the school campus.",
            "We also followed the guidelines profoundly and equipped our vans with medical kit including all the essential medicines, sanitizers and masks.",
            "We make sure to sanitize and safe check our modes of transport in the most authentic ways ensuring a safe and healthy journey."
            ],
        },
        ]

    return (
        <>
            {card.map((item: CardType, index: number) => (
                <section className={`section-container flex flex-col gap-large ${index % 2 == 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`} key={index}>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-heading-3 font-bold  text-primary-maroon mb-large">
                            {item.title}
                        </h2>
                        <div className="flex flex-col gap-large text-body">
                            {item.text.map((item: string, index: number) => (
                                <p key={index}>
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <Image
                            src={item.img}
                            alt="Health and well being"
                            className="w-full h-auto object-contain max-h-[35rem]"
                        />
                        {/* Rest of your content */}
                    </div>
                </section>
            ))}
        </>
    );
}

export default Cards
import Image, { StaticImageData } from "next/image";
import {offer_1, offer_2, offer_3, offer_4, offer_5} from "@/assets/images/curriculum";

type OffersType = {
  img: StaticImageData;
  title: string;
  text: string [];
};

function Offers() {
  const offers_1: OffersType[] = [
    {
      img: offer_1,
      title: "ESSENCE OF PYP",
      text: [
        "Early learning in the PYP is a holistic learning experience that integrates socio - emotional, physical and cognitive development.",
        "In the PYP classroom, it takes place in dynamic environments that promote play, discovery and exploration.",
      ],
    },
    {
      img: offer_4,
      title: "ENCOURAGING STUDENTS TO DEVELOP SKILLS",
      text: [
        "We offer a comprehensive, concept driven, student - centric and inquiry-based approach to teaching and learning that fosters the development of thinking, communication, self management, social and research skills.",
      ],
    },
    {
      img: offer_2,
      title: "HANDS ON EXPERIENCE",
      text: [
        "The learners are engaged in challenging, relevant, critical and creative thinking activities. We also ensure student - centric learning engagements.",
      ],
    },
  ];

  const offers_2: OffersType[] = [
    {
        img: offer_5,
        title: "CONCEPT DRIVEN INQUIRY",
        text: [
            "The learners explore the essential elements in the unit, reflect their learning through student agency, assess their learning through self and peer assessments which supports student agency and also make connections to real world experiences."
        ]
    },
    {
        img: offer_3,
        title: "Caring and responsible citizens",
        text: [
            "The units of inquiry are designed to help foster their imaginations and meet new challenges and opportunities to help build a peaceful world."
        ]
    }
  ]

  return (
    <section className="section-container">
      <h2 className="text-primary-maroon-1 text-heading-3 mb-large uppercase">
        WHAT WE OFFER
      </h2>
      <div className="flex flex-col gap-md text-body mb-large">
        <p>
          Learning spaces at GGS are designed to support active participation of
          the children through play.
        </p>
        <p>
          Learning engagements and classroom activities are designed by teachers
          to develop their fine and gross motor skills in every day teaching and
          learning.
        </p>
      </div>
      <div className="flex flex-col gap-xl">
        <div className="flex gap-md justify-center flex-wrap md:flex-nowrap">
            {offers_1.map((item, index) => (
                <div className="p-md bg-gray-100 w-full xl:max-w-[40rem]" key={index}>
                    <div className="aspect-video overflow-hidden">
                    <Image
                        src={item.img}
                        alt="Offer Image"
                        className="w-full h-auto object-contain"
                    />
                    </div>
                    <h3 className="text-primary-maroon-1 uppercase text-heading-5 my-md">
                        {item.title}
                    </h3>
                    <div className="flex flex-col gap-large text-gray-900">
                        {item.text.map((item, index) => (
                            <p key={index}>
                                {item}
                            </p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        <div className="flex gap-md justify-center flex-wrap md:flex-nowrap">
            {offers_2.map((item, index) => (
                <div className="p-md bg-gray-100 w-full xl:max-w-[40rem]" key={index}>
                    <div className="aspect-video overflow-hidden">
                    <Image
                        src={item.img}
                        alt="Offer Image"
                        className="w-full h-auto object-contain"
                    />
                    </div>
                    <h3 className="text-primary-maroon-1 uppercase text-heading-5 my-md">
                        {item.title}
                    </h3>
                    <div className="flex flex-col gap-large text-gray-900">
                        {item.text.map((item, index) => (
                            <p key={index}>
                                {item}
                            </p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Offers;

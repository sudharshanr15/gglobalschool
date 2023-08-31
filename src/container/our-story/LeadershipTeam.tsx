import Image, { StaticImageData } from "next/image";
import logo5 from "../../assets/orustory5.png";
import * as management from "@/assets/images/management";

type TeamType = {
    name: string,
    role: string,
    image: StaticImageData,
    text: string
}

function LeadershipTeam() {
    const team: TeamType[] = [
        {
            name: "MS. SANGEETHA PRATTI",
            role: "IB IN-SCHOOL EDUCATION ADVISOR",
            image: management.img_1,
            text: "An eminent leader, who guides the GGS pedagogical and teaching community through her timely feedbacks and suggestions. Her constant support will enhance the implementation of IB at GGS.",
        },
        {
            name: "MS. SATHYAVARTHINI",
            role: "DEPUTY HEAD",
            image: management.img_2,
            text: "A vibrant leader, who guides the GGS Team with IB philosophy and practices. Her knowledge with nine years of teaching experience supports the teaching and learning at GGS through her active collaboration.",
        },
        {
            name: "MS. SUGUNA",
            role: "PYP COORDINATOR",
            image: management.img_3,
            text: "A passionate leader, who drives the team with sheer positivity and enthusiasm. Her journey at GGS began in the year 2018. Her positive mindset guides the GGS team both academically and non-academically.",
        },
        {
            name: "MS. NITHYA",
            role: "HR ADMIN/HEAD",
            image: management.img_8,
            text: "A smart leader, who has 25 years of administrative experience. Her expertise will support the cordial functioning of the non-academic team for the welfare of the GGS community.",
        },
    ]
    return (
        <section className="section-container">
            <h2 className="text-heading-4 md:text-heading-3 uppercase lg:w-[90%] text-primary-maroon-1 mb-large">
                PEDAGOGICAL LEADERSHIP TEAM
            </h2>
            <p className="text-body mb-xl">
                Our PLT includes our head of school, deputy head of school Ms.
                Sathyavarthini and our coordinator Ms. Suguna. Our PLT takes the
                responsibility of framing our curriculum and ensures the
                interdisciplinary learning of the students which are broad and
                balanced, conceptual and connected.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-xl">
                {team.map((item, index) => (
                    <div className="w-full" key={index}>
                        <div className="aspect-video rounded-xl md:rounded-3xl overflow-hidden">
                            <Image
                                src={item.image}
                                alt="logo"
                                className="h-full w-full object-contain"
                                unoptimized
                            />
                        </div>
                        <p className="text-heading-5 md:text-heading-4 mt-md uppercase">{item.name}</p>
                        <p className="pt-large text-heading-6 font-normal">
                            {item.role}
                        </p>
                        <p className="pt-md text-body">
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default LeadershipTeam;

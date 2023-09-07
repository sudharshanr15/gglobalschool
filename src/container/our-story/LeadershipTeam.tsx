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
            name: "MS. SANGEETA PRATTI",
            role: "IB IN-SCHOOL EDUCATION ADVISOR",
            image: management.img_2,
            text: "An eminent leader, who guides the GGS pedagogical and teaching community through her timely feedbacks and suggestions. Her constant support will enhance the implementation of IB at GGS.",
        },
    ]
    return (
        <section className="section-container">
            <h2 className="text-heading-3 md:text-heading-4 uppercase lg:w-[90%] text-primary-maroon-1 mb-large">
                IB IN-SCHOOL EDUCATION ADVISOR
            </h2>
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

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
            <h2 className="text-heading-5 md:text-heading-4 uppercase lg:text-center text-primary-maroon-1 mb-large">
                IB IN-SCHOOL EDUCATION ADVISOR
            </h2>
            <div className="lg:mt-12">
                {/* write here loop via map method if need */}
                <div className="lg:flex">
                    <div className="basis-6/12 overflow-hidden rounded-xl max-h-[400px] border-4 border-primary-maroon-1 lg:border-0">
                        <Image alt="advisor image object-contain h-full " src={team[0].image}></Image>
                    </div>
                    <div className="basis-6/12 lg:px-8 lg:self-center">
                        <h3 className="text-heading-6 lg:text-heading-5 mt-4 lg:mt-0">Ms. SANGEETA PRATTI</h3>
                        <h4 className="text-subheading-5 font-semibold mt-1">IB IN-SCHOOL EDUCATION ADVISOR</h4>
                        <p className="mt-3 lg:text-body">An eminent leader, who guides  the GGS pedagogical and  teaching community through her timely feedbacks and 
                            suggestions. Her constant support will enhance the implementation of IB at GGS.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LeadershipTeam;

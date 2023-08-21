import { team1, team2, team3 } from "@/assets"
import Image from "next/image"

function Team(){
    const teams = [
        {
            "name": "Dr. S. GUNASEKARAN M.Ed., M. Phil., Phd.",
            "pos": "CHAIRMAN DIRECTOR, G GLOBAL SCHOOL",
            "image": team1
        },
        {
            "name": "Dr. S. GUNASEKARAN M.Ed., M. Phil., Phd.",
            "pos": "CHAIRMAN DIRECTOR, G GLOBAL SCHOOL",
            "image": team2
        },
        {
            "name": "Dr. S. GUNASEKARAN M.Ed., M. Phil., Phd.",
            "pos": "CHAIRMAN DIRECTOR, G GLOBAL SCHOOL",
            "image": team3
        },
    ]
    return (
        <section className="section-container">
            <h2 className="uppercase text-heading-5 md:text-heading-3">OUR TEAM</h2>
            <h4 className="text-heading-4 md:text-8xl opacity-10">TEAM</h4>
            <div className="mt-md flex flex-col md:flex-row gap-md">
                {teams.map((item, index) => (
                    <div className="bg-primary-maroon md:max-w-[27rem] rounded-t-3xl overflow-hidden flex-grow" key={index}>
                        <Image src={item.image} alt="Management Team" className="w-full" unoptimized />
                        <div className="p-large text-gray-100">
                            <h3 className="text-heading-6 uppercase">{item.name}</h3>
                            <p className="text-body uppercase">{item.pos}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Team
import Image from "next/image"
import img from '@/assets/Rectangle 75.png'
import * as individual from "@/assets/images/individual-pursuit"
import * as movement from "@/assets/images/movement-composition"
import * as games from "@/assets/images/games"
import * as adventure from "@/assets/images/adventure-challenges"
import * as health_fitness from "@/assets/images/health-fitness"

function Curriculum(){
    const curriculum_list = [
        {
            name: "INDIVIDUAL PURSUIT",
            images: [...Object.values(individual)]
        },
        {
            name: "MOVEMENT COMPOSITION",
            images: [...Object.values(movement)]
        },
        {
            name: "GAMES",
            images: [...Object.values(games)]
        },
        {
            name: "ADVENTURE CHALLENGES",
            images: [...Object.values(adventure)]
        },
        {
            name: "HEALTH RELATED FITNESS",
            images: [...Object.values(health_fitness)]
        },
    ]

    return (
        <section className="section-container">
            <h2 className="text-primary-maroon-1 text-heading-3 mb-large uppercase">
                OUR BALANCED CURRICULUM FOR PHYSICAL LEARNING
            </h2>
            <div className="flex flex-col gap-xl">
                {
                    curriculum_list.map((item: any, index: number) => (
                        <div key={index}>
                            <h3 className="text-primary-maroon text-heading-5 uppercase mb-large">{item.name}</h3>
                            <div className="grid gap-md grid-cols-2 lg:grid-cols-4">
                                {item.images.map((img: any, index: number) => (
                                    <div className="w-full" key={index}>
                                        <Image src={img} alt="Image" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Curriculum
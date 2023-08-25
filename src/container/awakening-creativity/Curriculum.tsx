import Image from "next/image"
import img from '@/assets/Rectangle 75.png'

function Curriculum(){
    const curriculum_list = [
        {
            name: "INDIVIDUAL PURSUIT",
            images: img
        },
        {
            name: "MOVEMENT COMPOSITION",
            images: img
        },
        {
            name: "GAMES",
            images: img
        },
        {
            name: "ADVENTURE CHALLENGES",
            images: img
        },
        {
            name: "HEALTH RELATED FITNESS",
            images: img
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
                            <div className="grid gap-md grid-cols-2 md:grid-cols-4">
                                {Array(4).fill(0).map((temp, index) => (
                                    <div className="w-full" key={index}>
                                        <Image src={item.images} alt="Image" />
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
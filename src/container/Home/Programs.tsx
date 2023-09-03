import Link from "next/link"
import Image from "next/image"
import { programmes1, programmes2, wave_fill } from "@/assets"

function Programs(){
    return (
        <section className="section-container bg-primary-maroon-1">
            <h2 className="text-gray-100 uppercase text-heading-5 md:text-heading-3">PRIMARY YEARS PROGRAMME</h2>
            <div className="w-fit relative">
                <h4 className="text-heading-4 md:text-8xl opacity-10 text-primary-orange-2">PROGRAMMES</h4>
                <div className="absolute w-full h-full top-0 right-0">
                    <Image src={wave_fill} className="max-w-[112px] absolute w-[20%] top-1/2 -translate-y-1/2 right-[5%]" alt="Wave Image" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-xl mt-large">
                <div className="w-full">
                    <div className="w-full mb-md aspect-square">
                        <Image src={programmes1} alt="Programmes Image" className="w-full h-full object-cover object-top" />
                    </div>
                    <div className="w-full">
                        <div className="flex flex-col items-center md:items-start gap-md">
                            <h3 className="uppercase text-gray-100 text-heading-4 xl:text-heading-2 text-center md:text-start">EARLY YEARS<br/>@ GGS</h3>
                            <div className="text-heading-6 xl:text-heading-3 text-primary-yellow-1">
                                2.5 - 5 YEARS
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="w-full mb-md aspect-square">
                        <Image src={programmes2} alt="Programmes Image" className="w-full h-full object-cover object-top" />
                    </div>
                    <div className="w-full">
                        <div className="flex flex-col items-center md:items-start gap-md">
                            <h3 className="uppercase text-gray-100 text-heading-4 xl:text-heading-2 text-center md:text-start">PRIMARY YEARS<br/>@ GGS</h3>
                            <div className="text-heading-6 xl:text-heading-3 text-primary-yellow-1">
                                6 - 10 YEARS
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center md:text-start">
                <Link href="/eyp" className="btn-slide mt-xl">
                    KNOW MORE
                </Link>
            </div>
        </section>
    )
}


export default Programs
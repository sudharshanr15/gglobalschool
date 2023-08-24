import Link from "next/link"
import Image from "next/image"
import { programmes1, programmes2 } from "@/assets"

function Programs(){
    return (
        <section className="section-container bg-primary-maroon-1">
            <h2 className="text-gray-100 uppercase text-heading-5 md:text-heading-3">PROGRAMMES WE OFFER</h2>
            <h4 className="text-heading-4 md:text-8xl opacity-10 text-primary-orange-2">PROGRAMME</h4>
            <div className="flex flex-col md:flex-row gap-xl mt-large">
                <div className="w-full">
                    <div className="w-full mb-md aspect-square">
                        <Image src={programmes1} alt="Programmes Image" className="w-full h-full object-cover" />
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
                        <Image src={programmes2} alt="Programmes Image" className="w-full h-full object-cover" />
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
                <Link href={""} className="uppercase text-heading-6 text-gray-900 bg-primary-yellow-1 px-xl py-md rounded-full mt-xl inline-block">
                    KNOW MORE
                </Link>
            </div>
        </section>
    )
}


export default Programs
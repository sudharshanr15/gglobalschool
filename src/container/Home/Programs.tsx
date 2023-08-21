import Link from "next/link"
import Image from "next/image"
import { programmes1, programmes2 } from "@/assets"

function Programs(){
    return (
        <section className="bg-primary-maroon-1">
            <div className="p-md md:p-3xl">
                <h2 className="text-gray-100 uppercase text-heading-5 md:text-heading-3">PROGRAMMES WE OFFER</h2>
                <h4 className="text-heading-4 md:text-8xl opacity-10 text-primary-orange-2">PROGRAMME</h4>
            </div>
            <div className="flex flex-col md:flex-row gap-md md:gap-28 p-md xl:p-0 mb-xl">
                <div className="w-full md:w-1/2">
                    <Image src={programmes1} alt="Programmes Image" />
                </div>
                <div className="w-full md:w-1/2 md:px-2xl">
                    <div className="flex flex-col items-center md:items-start gap-md md:gap-xl">
                        <h3 className="uppercase text-gray-100 text-heading-4 xl:text-heading-2 text-center md:text-start">EARLY YEARS PROGRAM</h3>
                        <div className="text-subheading xl:text-heading-5 bg-primary-yellow-1 text-gray-900 px-8 py-md rounded-full w-fit">
                            2-5 YEARS
                        </div>
                        <div className="p-xl md:p-2xl bg-gray-100 rounded-3xl">
                            <p className="text-gray-900 uppercase text-heading-6 xl:text-heading-3">
                                A CHILD'S LEARNING BEGINS FROM EARLY YEARS
                            </p>
                            <Link href={""} className="uppercase text-heading-5 text-primary-maroon-1 mt-xl block">
                                <span className="underline underline-offset-8 decoration-primary-orange-1">
                                    TO KNOW MORE
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse gap-md md:gap-28 p-md xl:p-0 mb-xl">
                <div className="w-full md:w-1/2">
                    <Image src={programmes2} alt="Programmes Image" className="ml-auto" />
                </div>
                <div className="w-full md:w-1/2 md:px-2xl">
                    <div className="flex flex-col items-center md:items-start gap-md md:gap-xl">
                        <h3 className="uppercase text-gray-100 text-heading-4 xl:text-heading-2 text-center md:text-start">PRIMARY YEARS PROGRAM</h3>
                        <div className="text-subheading xl:text-heading-5 bg-primary-yellow-1 text-gray-900 px-8 py-md rounded-full w-fit">
                            6-10 YEARS
                        </div>
                        <div className="p-xl md:p-2xl bg-gray-100 rounded-3xl">
                            <p className="text-gray-900 uppercase text-heading-6 xl:text-heading-3">
                                Curiosity is the fuel for discovery, inquiry and learning
                            </p>
                            <Link href={""} className="uppercase text-heading-5 text-primary-maroon-1 mt-xl block">
                                <span className="underline underline-offset-8 decoration-primary-orange-1">
                                    TO KNOW MORE
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Programs
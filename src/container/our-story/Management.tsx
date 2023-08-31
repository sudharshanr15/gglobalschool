import Image from "next/image";
import Logo2 from "../../assets/orustory2.png";
import logo3 from "../../assets/orustory3.png";
import logo4 from "../../assets/orustory4.png";
import img from '@/assets/Rectangle 75.png'
import * as management from "@/assets/images/management";

function Management() {
    return (
        <section className="section-container">
            <h2 className="text-heading-4 md:text-heading-3 uppercase lg:w-[90%] text-primary-maroon-1 mb-large">
                MANAGEMENT
            </h2>
            <div className="mb-xl">
                <div className="w-full flex flex-col md:flex-row items-center gap-xl">
                    <div className="w-full md:w-1/2">
                        <div className="flex flex-col gap-large text-body">
                            <h3 className="text-primary-orange-1 text-heading-6 w-full uppercase">
                                CHAIRMAN DIRECTOR
                            </h3>
                            <p>
                                A noble laureate who pursued his professional
                                life in educational field. He began his career
                                as a teacher in government school and with his
                                consistent perseverance he became the Principal.
                            </p>
                            <p>
                                Later he served as the Head of Department in
                                various govern schools. His knowledge and
                                commitment towards educating young minds made
                                him the Secretary and
                                <span className="font-bold">
                                    {" "}
                                    Managing Trustee of Vidyaa Vikas Educational
                                    institution and the Founder of Vetri Vikaas
                                    Educational institution .
                                </span>
                            </p>
                            <p>
                                His dream of providing International Education
                                in his hometown was fulfilled by establishing G
                                Global School.
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="relative rounded-3xl overflow-hidden max-h-[500px] aspect-video">
                            <Image
                                src={management.img_4}
                                alt="logo"
                                className="w-auto mx-auto h-full object-contain"
                                unoptimized
                            />
                            <div className="absolute hidden lg:flex flex-col justify-end p-large md:px-xl md:rounded-[40px] rounded-[20px] bg-gradient-to-t from-zinc-900 to-transparent bottom-0 left-0 right-0 h-[60%] w-full md:w-full text-heading-6">
                                <p className="text-white uppercase pt-large">
                                    Dr. S. GUNASEKARAN M.Ed., M. Phil., Phd.
                                </p>
                                <p className="text-white uppercase pt-md">
                                    CHAIRMAN DIRECTOR, G GLOBAL SCHOOL
                                </p>
                            </div>
                        </div>
                        <div className="lg:hidden">
                            <p className="text-heading-6 lg:text-heading-4 mt-md uppercase">
                                Dr. S. GUNASEKARAN M.Ed., M. Phil., Phd.
                            </p>
                            <p className="pt-md text-body">
                                CHAIRMAN DIRECTOR, G GLOBAL SCHOOL
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-xl">
                <div className="w-full flex flex-col md:flex-row-reverse items-center gap-xl">
                    <div className="w-full md:w-1/2">
                        <div className="flex flex-col gap-large text-body">
                            <h3 className="text-primary-orange-1 text-heading-6 w-full uppercase">
                                DIRECTOR
                            </h3>
                            <p>
                                A caring and courteous lady who strives to bring the best for the welfare of the organization through her solicitous caliber.
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="relative rounded-3xl overflow-hidden max-h-[500px] aspect-video">
                            <Image
                                src={management.img_5}
                                alt="logo"
                                className="w-auto mx-auto h-full object-contain"
                                unoptimized
                            />
                            <div className="absolute hidden lg:flex flex-col justify-end p-large md:px-xl md:rounded-[40px] rounded-[20px] bg-gradient-to-t from-zinc-900 to-transparent bottom-0 left-0 right-0 h-[60%] w-full md:w-full text-heading-6">
                                <p className="text-white uppercase pt-large">
                                    Ms. MALLIKA GUNASEKARAN
                                </p>
                                <p className="text-white uppercase pt-md">
                                    DIRECTOR, G GLOBAL SCHOOL
                                </p>
                            </div>
                        </div>
                        <div className="lg:hidden">
                            <p className="text-heading-6 lg:text-heading-4 mt-md uppercase">
                                Ms. MALLIKA GUNASEKARAN
                            </p>
                            <p className="pt-md text-body">
                                DIRECTOR, G GLOBAL SCHOOL
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-xl">
                <div className="w-full flex flex-col md:flex-row items-center gap-xl">
                    <div className="w-full md:w-[50%]">
                        <div className="flex flex-col gap-large text-body">
                            <h3 className="text-primary-orange-1 text-heading-6 w-full uppercase">
                                MANAGING DIRECTOR
                            </h3>
                            <p>
                                A versatile administrator with a deep knowledge
                                in technology, implements the same in his
                                educational profession.
                            </p>
                            <p>
                                He is the <span className="font-bold"> Chairman of Vetri Vikaas Educational institutions - Rasipuram and Mallur.</span> He is also the Director of Vidyaa Vikas Educational institutions - Karamadai and Tanjore and is now implementing global ideas and provide holistic education through G Global School.
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="relative rounded-3xl overflow-hidden max-h-[500px] aspect-video">
                            <Image
                                src={management.img_6}
                                alt="logo"
                                className="w-auto mx-auto h-full object-contain"
                                unoptimized
                            />
                            <div className="absolute hidden lg:flex flex-col justify-end p-large md:px-xl md:rounded-[40px] rounded-[20px] bg-gradient-to-t from-zinc-900 to-transparent bottom-0 left-0 right-0 h-[60%] w-full md:w-full text-heading-6">
                                <p className="text-white uppercase pt-large">
                                    DR. G. VETRICHELVAN
                                </p>
                                <p className="text-white uppercase pt-md">
                                    MANAGING DIRECTOR, G GLOBAL SCHOOL
                                </p>
                            </div>
                        </div>
                        <div className="lg:hidden">
                            <p className="text-heading-6 lg:text-heading-4 mt-md uppercase">
                                DR. G. VETRICHELVAN
                            </p>
                            <p className="pt-md text-body">
                                MANAGING DIRECTOR, G GLOBAL SCHOOL
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-xl">
                <div className="w-full flex flex-col md:flex-row-reverse items-center gap-xl">
                    <div className="w-full md:w-[50%]">
                        <div className="flex flex-col gap-large text-body">
                            <h3 className="text-primary-orange-1 text-heading-6 w-full uppercase">
                                EXECUTIVE DIRECTOR/ HEAD OF SCHOOL
                            </h3>
                            <p>
                                A compassionate and empowered lady who handles
                                every situation with sheer positivity.
                            </p>
                            <p>
                                She started her educational career as a Primary
                                Years academic Consultant in Vetri Vikaas Public
                                School, Rasipuram.
                            </p>
                            <p>
                                She designed and created books for kindergarten
                                imbibing her Montessori learning. Her curiosity
                                provoked her to gather extensive knowledge about
                                IB PYP which lands her as the Head of School in
                                GGS providing facilities to the school community
                                through her caring attribute.
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="relative rounded-3xl overflow-hidden max-h-[500px] aspect-video">
                            <Image
                                src={management.img_7}
                                alt="logo"
                                className="w-auto mx-auto h-full object-contain"
                                unoptimized
                            />
                            <div className="absolute hidden lg:flex flex-col justify-end p-large md:px-xl md:rounded-[40px] rounded-[20px] bg-gradient-to-t from-zinc-900 to-transparent bottom-0 left-0 right-0 h-[60%] w-full md:w-full text-heading-6">
                                <p className="text-white uppercase pt-large">
                                    DR. S. ROSHNI VETRICHELVAN
                                </p>
                                <p className="text-white uppercase pt-md">
                                    EXECUTIVE DIRECTOR / HEAD OF SCHOOL, G GLOBAL SCHOOL
                                </p>
                            </div>
                        </div>
                        <div className="lg:hidden">
                            <p className="text-heading-6 lg:text-heading-4 mt-md uppercase">
                                DR. S. ROSHNI VETRICHELVAN
                            </p>
                            <p className="pt-md text-body">
                                EXECUTIVE DIRECTOR / HEAD OF SCHOOL, G GLOBAL SCHOOL
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Management;

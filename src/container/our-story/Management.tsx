import Image, {StaticImageData} from "next/image";
import Logo2 from "../../assets/orustory2.png";
import logo3 from "../../assets/orustory3.png";
import logo4 from "../../assets/orustory4.png";
import img from '@/assets/Rectangle 75.png'
import * as management from "@/assets/images/management";

type TeamType = {
    name: string,
    role: string,
    image: StaticImageData,
    text: string,
    isreverseCard?:boolean
    imageXl?: StaticImageData
}

const managementMembers:TeamType[] = [
    {
        name: 'DR. S. GUNASEKARAN M.ED., M. PHIL., PHD',
        role: 'CHAIRMAN DIRECTOR',
        image: management.gunaXL,
        text: "A noble laureate who pursued his professional life in educational field. He began his career as a teacher in government school\
        and with his consistent perseverance he became the Principal. Later he served as the Head of Department in various govern schools.\
        His knowledge and commitment towards educating young minds made him the Secretary and <b class=\"font-semibold\"> Managing Trustee of Vidyaa Vikas Educational\
        institution and the Founder of Vetri Vikaas Educational institution. </b> <br/><br/>His dream of providing International Education in his hometown\
        was fulfilled by establishing G Global School.",
        isreverseCard:true
    },
    {
        name: 'Ms. MALLIKA GUNASEKARAN',
        role: 'DIRECTOR',
        image: management.mallikaXL,
        text: "A caring and courteous lady who strives to bring the best for the welfare of the organization through her solicitous caliber.",
        imageXl:management.mallikaXL

    },
    {
        name: 'DR. G. VETRICHELVAN',
        role: 'MANAGING DIRECTOR',
        image: management.img_6,
        text: "A versatile administrator with a deep knowledge in technology, implements the same in his educational profession.<br/><br/> He is the <b class=\"font-semibold\"}> Chairman\
        of Vetri Vikaas Educational institutions - Rasipuram and Mallur.</b> He is also the Director of Vidyaa Vikas Educational institutions - Karamadai\
        and Tanjore and is now implementing global ideas and provide holistic education through G Global School.",
        isreverseCard:true
    },
    {
        name: "DR. S. ROSHNI VETRICHELVAN",
        role: "EXECUTIVE DIRECTOR/ HEAD OF SCHOOL",
        image:management.img_7,
        text: "A compassionate and empowered lady who handles every situation with sheer positivity.<br/><br/> She started her educational career as a\
        Primary Years academic Consultant in Vetri Vikaas Public School, Rasipuram.<br></br> She designed and created books for kindergarten imbibing\
        her Montessori learning. Her curiosity provoked her to gather extensive knowledge about IB PYP which lands her as the Head of School\
        in GGS providing facilities to the school community through her caring attribute.",

    }
]

function Management() {
    return (
        <section className="section-container my-6">
            <div>
                <h2 className="text-heading-4 md:text-heading-3 uppercase text-primary-maroon-1 mb-large text-center">MANAGEMENT</h2>
            </div>
            <div>
                {
                    managementMembers.map((memeber)=>(
                        <div className={`my-8 lg:flex lg:gap-12 lg:my-20 ${memeber.isreverseCard && 'lg:flex-row-reverse'}`}>
                            <div className="border-4 border-primary-maroon-1 rounded-xl overflow-hidden lg:basis-6/12">
                                <div className="max-h-[240px] lg:max-h-[400px] overflow-hidden flex justify-center">
                                    <Image className=" object-cover " src={memeber.image} alt={memeber.role}></Image>
                                </div>
                                <div className="">
                                    <div className="bg-primary-maroon text-white p-4 text-center">
                                        <h4 className="text-subheading">{memeber.name}</h4>
                                        <p className="mt-2  font-semibold">{memeber.role}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:basis-6/12 lg:flex lg:items-center">
                                <div className="">
                                    <div className="hidden lg:block">
                                        <h4 className="text-primary-maroon text-heading-6">{memeber.name}</h4>
                                        <p className="text-subheading text-primary-orange-1 mt-3">{memeber.role}</p>
                                    </div>
                                    <p className="mt-4 text-lg" dangerouslySetInnerHTML={{__html : memeber.text}}></p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default Management;

import Image from "next/image"
import grid1 from '@/assets/grid1.jpg'
import grid2 from '@/assets/grid2.png'
import grid3 from '@/assets/grid3.jpg'
import grid4 from '@/assets/grid4.jpg'
import grid5 from '@/assets/grid5.jpg'
import grid6 from '@/assets/grid6.jpg'
import grid7 from '@/assets/grid7.jpg'
import grid8 from '@/assets/grid8.jpg'
import grid9 from '@/assets/grid9.jpg'
import last from '@/assets/last.png'

const Cards = () => {
    
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-5 md:mx-20 lg:mx-20">

    <div className="w-[100%] hover:bg-primary-maroon grid md:grid-rows-3 md:hover:grid-rows-5 lg:grid-rows-3 lg:hover:grid-rows-5 hover:text-gray-100 mx-5 mx-auto">
        <div className="image-container w-[100%] h-72 md:h-full row-span-2 lg:h-full overflow-hidden">
            <div className="relative w-full h-full">
            <Image src={grid1} alt="grid1" className="absolute inset-0 w-full h-full object-center object-cover"/>
            </div>
        </div>
        <div className="row-span-3">
        <h1 className="font-bold text-3xl pt-5 pb-2 pl-4 text-primary-orange">CRITICAL THINKING</h1>
        <p className="px-5 pb-20">Foster critical thinking skills and open-mindedness to encourage analytical reasoning, problem-solving,
         and the ability to consider different perspectives. </p>
         </div>
    </div>

    <div className="w-[100%] mx-auto px-5">
        <div className="image-container w-[100%]  h-72 md:h-96 lg:h-[520px] overflow-hidden">
            <div className="relative w-full h-full">
            <Image src={grid2} alt="grid1" className="absolute inset-0 w-full h-full object-center object-cover"/>
            </div>
        </div>
        <h1 className="font-bold text-3xl mt-5 mb-2 pl-4 text-primary-orange">GLOBAL CITIZEN</h1>
        <p className="pl-5 pr-5 mb-20">Cultivate global citizenship by promoting cultural understanding, empathy, and a sense of responsibility towards the global community.</p>
    </div>

    <div className="w-[100%] mx-auto px-5">
        <div className="image-container w-[100%] h-72 md:h-96 lg:h-[520px] overflow-hidden">
            <div className="relative w-full h-full">
            <Image src={grid3} alt="grid1" className="absolute inset-0 w-full h-full object-center object-cover"/>
            </div>
        </div>
        <h1 className="font-bold text-3xl mt-5 mb-2 pl-4 text-primary-orange">LEARNING WITH RELEVANCE</h1>
        <p className="pl-5 pr-5 mb-20">Emphasize learning that is meaningful and applicable to real-world situations, enabling students to connect their knowledge to practical contexts.</p>
    </div>

    <div className="w-[100%] mx-auto px-5">
        <div className="image-container w-[100%] h-72 md:h-96 lg:h-[520px] overflow-hidden">
            <div className="relative w-full h-full">
            <Image src={grid4} alt="grid1" className="absolute inset-0 w-full h-full object-center object-cover"/>
            </div>
        </div>
        <h1 className="font-bold text-3xl mt-5 mb-2 pl-4 text-primary-orange">CHARACTER BUILDING</h1>
        <p className="pl-5 pr-5 mb-20">Focus on developing strong character traits such as resilience, empathy, integrity, and leadership, to nurture well-rounded individuals.</p>
    </div>

    <div className="w-[100%] mx-auto px-5">
        <div className="image-container w-[100%] h-72 md:h-96 lg:h-[520px] overflow-hidden">
            <div className="relative w-full h-full">
            <Image src={grid5} alt="grid1" className="absolute inset-0 w-full h-full object-center object-cover"/>
            </div>
        </div>
        <h1 className="font-bold text-3xl mt-5 mb-2 pl-4 text-primary-orange">SUCCESS FOR ALL</h1>
        <p className="pl-5 pr-5 mb-20">Ensure that every student has equal opportunities and support to achieve their full potential, regardless of their background or abilities.</p>
    </div>

    <div className="w-[100%] mx-auto px-5">
        <div className="image-container w-[100%] h-72 md:h-96 lg:h-[520px] overflow-hidden">
            <div className="relative w-full h-full">
            <Image src={grid6} alt="grid1" className="absolute inset-0 w-full h-full object-center object-cover"/>
            </div>
        </div>
        <h1 className="font-bold text-3xl mt-5 mb-2 pl-4 text-primary-orange">RESPONSIBLE LEARNERS</h1>
        <p className="pl-5 pr-5 mb-20">Instill a sense of responsibility and accountability in students towards their own learning, their actions, and the environment.</p>
    </div>

    <div className="w-[100%] mx-auto px-5">
        <div className="image-container w-[100%] h-72 md:h-96 lg:h-[520px] overflow-hidden">
            <div className="relative w-full h-full">
            <Image src={grid7} alt="grid1" className="absolute inset-0 w-full h-full object-center object-cover"/>
            </div>
        </div>
        <h1 className="font-bold text-3xl mt-5 mb-2 pl-4 text-primary-orange">SERVICE</h1>
        <p className="pl-5 pr-5 mb-20">Encourage students to actively contribute to their communities through meaningful service projects, fostering a spirit of compassion and civic engagement.</p>
    </div>

    <div className="w-[100%] mx-auto px-5">
        <div className="image-container w-[100%] h-72 md:h-96 lg:h-[520px] overflow-hidden">
            <div className="relative w-full h-full">
            <Image src={grid8} alt="grid1" className="absolute inset-0 w-full h-full object-center object-cover"/>
            </div>
        </div>
        <h1 className="font-bold text-3xl mt-5 mb-2 pl-4 text-primary-orange">INQUIRY BASED EDUCATION</h1>
        <p className="pl-5 pr-5 mb-20">Promote an inquiry-based approach to learning, where students are encouraged to ask questions, explore, and discover knowledge through curiosity-driven exploration.</p>
    </div>

    <div className="w-[100%] mx-auto px-5">
        <div className="image-container w-[100%] h-72 md:h-96 lg:h-[520px] overflow-hidden">
            <div className="relative w-full h-full">
            <Image src={grid9} alt="grid1" className="absolute inset-0 w-full h-full object-center object-cover"/>
            </div>
        </div>
        <h1 className="font-bold text-3xl mt-5 mb-2 pl-4 text-primary-orange">HOLISTIC DEVLOPEMENT</h1>
        <p className="pl-5 pr-5 mb-20">Foster the holistic development of students, addressing their intellectual, emotional, physical, and social well-being, to nurture their overall growth.</p>
    </div>

   <div className="lg:w-1/3 mx-auto px-5 lg:col-span-3">
        <div className="image-container w-[100%] h-72 md:h-96 lg:h-96 overflow-hidden">
            <div className="relative w-full h-full">
            <Image src={last} alt="grid1" className="absolute inset-0 w-full h-full object-center object-cover"/>
            </div>
        </div>
        <h1 className="font-bold text-3xl mt-5 mb-2 pl-4 text-primary-orange">PERSONAL & SOCIAL INTEGRITY</h1>
        <p className="pl-5 pr-5 mb-20">Cultivate personal and social integrity, emphasizing ethical behavior, honesty, respect, and the development of positive relationships within the school community.</p>
    </div>

    </div>
  )
}

export default Cards

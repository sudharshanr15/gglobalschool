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
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl mx-md md:mx-3xl lg:mx-3xl">

    <div className="w-[100%] ease-in duration-500 hover:bg-primary-maroon grid md:grid-rows-3 md:hover:grid-rows-5 lg:grid-rows-3 hover:lg:grid-rows-5 hover:text-gray-100 mx-5 mx-auto">
        <div className="image-container w-[100%] h-72 md:h-full row-span-2 lg:h-full overflow-hidden">
            <div className="relative w-full h-full">
            <Image src={grid1} alt="grid1" className="absolute inset-0 w-full h-full object-center object-cover"/>
            </div>
        </div>
        <div className="row-span-3">
        <h1 className="font-bold text-3xl pt-md pb-md pl-md text-primary-orange">CRITICAL THINKING</h1>
        <p className="px-md pb-3xl">Foster critical thinking skills and open-mindedness to encourage analytical reasoning, problem-solving,
         and the ability to consider different perspectives. </p>
         </div>
    </div>

    <div className="w-[100%] ease-in duration-500 hover:bg-primary-maroon grid md:grid-rows-3 md:hover:grid-rows-5 lg:grid-rows-3 hover:lg:grid-rows-5 hover:text-gray-100 mx-5 mx-auto">
        <div className="image-container w-[100%] h-72 md:h-full row-span-2 lg:h-full overflow-hidden">
            <div className="relative w-full h-full">
            <Image src={grid2} alt="grid1" className="absolute inset-0 w-full h-full object-center object-cover"/>
            </div>
        </div>
        <div className="row-span-2">
        <h1 className="font-bold text-3xl mt-md mb-md pl-md text-primary-orange">GLOBAL CITIZEN</h1>
        <p className="pl-md pr-md mb-3xl">Cultivate global citizenship by promoting cultural understanding, empathy, and a sense of responsibility towards the global community.</p>
        </div>
    </div>

    <div className="w-[100%] ease-in duration-500 hover:bg-primary-maroon grid md:grid-rows-3 md:hover:grid-rows-5 lg:grid-rows-3 hover:lg:grid-rows-5 hover:text-gray-100 mx-5 mx-auto">
        <div className="image-container w-[100%] h-72 md:h-full row-span-2 lg:h-full overflow-hidden">
            <div className="relative w-full h-full">
            <Image src={grid3} alt="grid1" className="absolute inset-0 w-full h-full object-center object-cover"/>
            </div>
        </div>
        <div className="row-span-2">
        <h1 className="font-bold text-3xl mt-md mb-md pl-md text-primary-orange">LEARNING WITH RELEVANCE</h1>
        <p className="pl-md pr-md mb-3xl">Emphasize learning that is meaningful and applicable to real-world situations, enabling students to connect their knowledge to practical contexts.</p>
        </div>
    </div>

    <div className="w-[100%] ease-in duration-500 hover:bg-primary-maroon grid md:grid-rows-3 md:hover:grid-rows-5 lg:grid-rows-3 hover:lg:grid-rows-5 hover:text-gray-100 mx-5 mx-auto">
        <div className="image-container w-[100%] h-72 md:h-full row-span-2 lg:h-full overflow-hidden">
            <div className="relative w-full h-full">
            <Image src={grid4} alt="grid1" className="absolute inset-0 w-full h-full object-center object-cover"/>
            </div>
        </div>
        <div className="row-span-2">
        <h1 className="font-bold text-3xl mt-md mb-md pl-md text-primary-orange">CHARACTER BUILDING</h1>
        <p className="pl-md pr-md mb-3xl">Focus on developing strong character traits such as resilience, empathy, integrity, and leadership, to nurture well-rounded individuals.</p>
        </div>
    </div>

    <div className="w-[100%] ease-in duration-500 hover:bg-primary-maroon grid md:grid-rows-3 md:hover:grid-rows-5 lg:grid-rows-3 hover:lg:grid-rows-5 hover:text-gray-100 mx-5 mx-auto">
        <div className="image-container w-[100%] h-72 md:h-full row-span-2 lg:h-full overflow-hidden">
            <div className="relative w-full h-full">
            <Image src={grid5} alt="grid1" className="absolute inset-0 w-full h-full object-center object-cover"/>
            </div>
        </div>
        <div className="row-span-2">
        <h1 className="font-bold text-3xl mt-md mb-md pl-md text-primary-orange">SUCCESS FOR ALL</h1>
        <p className="pl-md pr-md mb-3xl">Ensure that every student has equal opportunities and support to achieve their full potential, regardless of their background or abilities.</p>
        </div>
    </div>

    <div className="w-[100%] ease-in duration-500 hover:bg-primary-maroon grid md:grid-rows-3 md:hover:grid-rows-5 lg:grid-rows-3 hover:lg:grid-rows-5 hover:text-gray-100 mx-5 mx-auto">
        <div className="image-container w-[100%] h-72 md:h-full row-span-2 lg:h-full overflow-hidden">
            <div className="relative w-full h-full">
            <Image src={grid6} alt="grid1" className="absolute inset-0 w-full h-full object-center object-cover"/>
            </div>
        </div>
        <div className="row-span-2">
        <h1 className="font-bold text-3xl mt-md mb-md pl-md text-primary-orange">RESPONSIBLE LEARNERS</h1>
        <p className="pl-md pr-md mb-3xl">Instill a sense of responsibility and accountability in students towards their own learning, their actions, and the environment.</p>
        </div>
    </div>

    <div className="w-[100%] ease-in duration-500 hover:bg-primary-maroon grid md:grid-rows-3 md:hover:grid-rows-5 lg:grid-rows-3 hover:lg:grid-rows-5 hover:text-gray-100 mx-5 mx-auto">
        <div className="image-container w-[100%] h-72 md:h-full row-span-2 lg:h-full overflow-hidden">
            <div className="relative w-full h-full">
            <Image src={grid7} alt="grid1" className="absolute inset-0 w-full h-full object-center object-cover"/>
            </div>
        </div>
        <div className="row-span-2">
        <h1 className="font-bold text-3xl mt-md mb-md pl-md text-primary-orange">SERVICE</h1>
        <p className="pl-md pr-md mb-3xl">Encourage students to actively contribute to their communities through meaningful service projects, fostering a spirit of compassion and civic engagement.</p>
        </div>
    </div>

    <div className="w-[100%] ease-in duration-500 hover:bg-primary-maroon grid md:grid-rows-3 md:hover:grid-rows-5 lg:grid-rows-3 hover:lg:grid-rows-5 hover:text-gray-100 mx-5 mx-auto">
        <div className="image-container w-[100%] h-72 md:h-full row-span-2 lg:h-full overflow-hidden">
            <div className="relative w-full h-full">
            <Image src={grid8} alt="grid1" className="absolute inset-0 w-full h-full object-center object-cover"/>
            </div>
        </div>
        <div className="row-span-2">
        <h1 className="font-bold text-3xl mt-md mb-md pl-md text-primary-orange">INQUIRY BASED EDUCATION</h1>
        <p className="pl-md pr-md mb-3xl">Promote an inquiry-based approach to learning, where students are encouraged to ask questions, explore, and discover knowledge through curiosity-driven exploration.</p>
        </div>
    </div>

    <div className="w-[100%] ease-in duration-500 hover:bg-primary-maroon grid md:grid-rows-3 md:hover:grid-rows-5 lg:grid-rows-3 hover:lg:grid-rows-5 hover:text-gray-100 mx-5 mx-auto">
        <div className="image-container w-[100%] h-72 md:h-full row-span-2 lg:h-full overflow-hidden">
            <div className="relative w-full h-full">
            <Image src={grid9} alt="grid1" className="absolute inset-0 w-full h-full object-center object-cover"/>
            </div>
        </div>
        <div className="row-span-2">
        <h1 className="font-bold text-3xl mt-md mb-md pl-md text-primary-orange">HOLISTIC DEVLOPEMENT</h1>
        <p className="pl-md pr-md mb-3xl">Foster the holistic development of students, addressing their intellectual, emotional, physical, and social well-being, to nurture their overall growth.</p>
        </div>
    </div>

   <div className="w-[100%] lg:w-1/3 ease-in duration-500 hover:bg-primary-maroon grid md:grid-rows-3 md:hover:grid-rows-5 lg:grid-rows-3 hover:lg:grid-rows-5 hover:text-gray-100 mx-5 mx-auto lg:col-span-3">
        <div className="image-container w-[100%] h-72 md:h-full row-span-2 lg:h-full overflow-hidden">
            <div className="relative w-full h-full">
            <Image src={last} alt="grid1" className="absolute inset-0 w-full h-full object-center object-cover"/>
            </div>
        </div>
        <div className="row-span-2">
        <h1 className="font-bold text-3xl mt-md mb-md pl-md text-primary-orange">PERSONAL & SOCIAL INTEGRITY</h1>
        <p className="pl-md pr-md mb-3xl">Cultivate personal and social integrity, emphasizing ethical behavior, honesty, respect, and the development of positive relationships within the school community.</p>
        </div>
    </div>

    </section>
  )
}

export default Cards

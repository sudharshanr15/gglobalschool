import Image from "next/image"
import benefitImage from '@/assets/student council benefits.png' 

const Benefits = () => {
  return (
    <div className="md:flex lg:flex align-center justify-between mx-auto mb-20 md:mt-20 lg:mt-20">
      <div className="w-full md:w-2/3 lg:w-1/2 p-5 lg:p-0 md:p-0 md:px-10 lg:mx-20 lg:mr-16 mt-0 flex-col justify-between">
        <div className="text-heading-4 text-primary-maroon">BENEFITS</div><br/>
        <div>
                  At GGS, the Student Council and the leadership programme helps develop
          strong leadership skills by giving learners a dedicated space to share their
          opinions in the running of the school. 
          </div><br/><div>
          The main <span className="font-bold">goal of the Student Council
          is to build teamwork</span> and initiate and be role models to others. Suggestions
          from learners are valued and given agency in every GGS activity.
          </div><br/><div>
          The Student Council members are given the responsibility to take a major
          role in <span className="font-bold">planning of interesting activities </span>such as Sports Day, Teachers’
          Day,Whole school assembly, National and International celebrations and
          events, Yearbook and many more.
          </div><br/><div>
          Members of the student council are <span className="font-bold">chosen through the Investiture
          ceremony every year.</span> The school head boy and school head girl lead
          followed by the four house captains and vice captains. 
          </div><br/><div>
          The four houses at
          GGS are <span className="font-bold">Flamma, Terra, Aqua, Aura.</span> The school formally entrusts
          responsibilities on the ‘young leaders’, who also pledge to bestow their
          duties honestly, sincerely and to the best of their abilities, during this
          ceremony.
          </div>
        </div>
        <Image src={benefitImage} className="lg:ml-16 lg:mr-20 p-5 lg:p-0 md:w-2/3 lg:w-1/3 md:h-full" alt="studentcouncil"/>
    </div>
  )
}

export default Benefits

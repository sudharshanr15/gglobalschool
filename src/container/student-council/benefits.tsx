import Image from "next/image"
import benefitImage from '@/assets/student council benefits.png' 

const Benefits = () => {
  return (
    <section className="section-container flex flex-col md:flex-row gap-5 md:gap-28">
      <div className="w-full md:w-1/2">
        <h2 className="text-heading-4 md:text-heading-3 uppercase lg:w-[90%] text-primary-maroon-1 mb-xl">
          BENEFITS
        </h2>
        <div className="flex flex-col gap-large text-subheading-regular">
          <p>
            At GGS, the Student Council and the leadership programme helps develop
            strong leadership skills by giving learners a dedicated space to share their
            opinions in the running of the school. 
          </p>
          <p>
            The main <span className="font-bold">goal of the Student Council
            is to build teamwork</span> and initiate and be role models to others. Suggestions
            from learners are valued and given agency in every GGS activity.
          </p>
          <p>
            The Student Council members are given the responsibility to take a major
            role in <span className="font-bold">planning of interesting activities </span>such as Sports Day, Teachers’
            Day,Whole school assembly, National and International celebrations and
            events, Yearbook and many more.
          </p>
          <p>
            Members of the student council are <span className="font-bold">chosen through the Investiture
            ceremony every year.</span> The school head boy and school head girl lead
            followed by the four house captains and vice captains. 
          </p>
          <p>
            The four houses at GGS are <span className="font-bold">Flamma, Terra, Aqua, Aura.</span> The school formally entrusts
            responsibilities on the ‘young leaders’, who also pledge to bestow their
            duties honestly, sincerely and to the best of their abilities, during this
            ceremony.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2">
          <Image src={benefitImage} className="w-full h-auto" alt="studentcouncil"/>
      </div>
    </section>
  )
}

export default Benefits

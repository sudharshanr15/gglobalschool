import Image from "next/image"
import contentimage from '../../assets/student council images.png'
import benefitImage from '@/assets/student council benefits.png'

const Content = () => {
  return (
    <section className="section-container w-full flex flex-col gap-large">
      <div className="pb-md">
        <Image className="w-full hidden md:block lg:block" src={contentimage} alt="council image" />
        <Image src={benefitImage} className="md:hidden lg:hidden lg:ml-2xl lg:mr-3xl h-full" alt="studentcouncil" />
      </div>
      <div className="flex flex-col text-body gap-large">
        <p>
          G Global nurtures leadership qualities from the most earliest of stages with
          every growing, curious mind. Placing these responsibilities with potential
          individuals not only makes them quick problem solvers but also foster values
          of ethics, that they would reflect positively in their succeeding circumstances
          and in return sculpt themselves into courageous, self disciplined,
          independent learners.
        </p>
        <p>
          G Global School believes in challenging our learners on everyday basis
          preparing them for all times. As decision makers, the learners collaboratively
          interact with facilitators to share their ideas and suggestions. This way the
          learners engage and develop team spirt in every activity they do. Ggians
          support each other and facilitators play a major role achieving their learning
          goals.
          We promote active collaboration among members of the school community.
          Also our support towards building teamwork leads to a positive learning
          environment.
        </p>
        <p>
          Ethical leaders recognize the talent of their followers. The same way we
          identify the qualities of excellence in each learner and faculty of the school
          community, recognize theme for their uniqueness and promote those
          individuals in ways that create goodwill among all the members of the school
          community. The other side of recognizing talent is maximizing it where we
          place each member to exhibit their potentials in building socially healthy
          teams. This affords opportunities to develop interpersonal relationship
          among members in our organization as a whole.
        </p>
      </div>
    </section>
  )
}

export default Content

import Image from "next/image"
import contentimage from '../../assets/workwithus.png'
import benefitImage from '@/assets/student council benefits.png' 

const Content = () => {
  return (
    <section className="w-full md:mt-3xl lg:mt-3xl">
      <div className="mx-md md:mx-xl lg:mx-3xl">
      <Image className="w-full" src={contentimage} alt="why us image"/>
      </div>
      <div className="m-md md:m-xl lg:m-3xl"><p>
      At GGS, we seek persons who have the love for learning, willing to
explore and be a part of the dynamic and vibrant team.
</p><br/><p>
Our teaching faculty begin their journey at GGS with an
Induction Programme. Also our teaching team continue to be engaged in
professional learning programmes through facilitator-led and self-directed
sessions, workshops and training programmes.
</p><br/><p>
This provides
an opportunity for all our faculty members to explore the various
teaching methodologies and pedagogical practices, which enhances
their teaching skills in classrooms resulting in effective learning
experiences for our learners.
</p><br/><p>
Our collaborative work environment encourages and ensures a lot
of interaction and peer learning amidst the faculty. Each day teachers
across the school collaborate to develop and design curriculum based
on students' need. Sharing ideas, a supportive network, and positive
environment are some of the benefits of G Global School culture.
</p><br/><p>
To apply, please click the below box and submit the duly filled form.
</p>
      </div>
    </section>
  )
}

export default Content

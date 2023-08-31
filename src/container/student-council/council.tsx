import Image from "next/image"
import studentcouncil from '../../assets/council.jpg'
import { agency_1 } from "@/assets/images/student-agency"

const Council = () => {
  return (
    <section className="section-container flex flex-col md:flex-row gap-md md:gap-28">
      <div className="w-full md:w-1/2">
        <h2 className="text-heading-4 md:text-heading-3 uppercase text-primary-maroon-1 mb-xl">
          STUDENT COUNCIL
        </h2>
        <div className="flex flex-col gap-large text-body">
          <p>
            As a IB school we believe in student agency and given opportunities to
            students to foster skills like leadership, decision making, communication, team
            work, organisation and public speaking.
          </p>
          <p>
            Our student council stand out to explicit the above mentioned skills. Our
            ggians are divide in to four houses which are named as Aqua, Aura, Terra and
            Flamma. We have an outstanding student council which comprises of head girl,
            head boy and the leaders of the four houses.
          </p>
          <p>
            Student council actively involves in all the school issues and always takenresponsibilities of the younger ones.
            They are teaching new skills to their
            younger ones around the school campus.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <Image src={agency_1} unoptimized className="w-full" alt="studentcouncil"/>
      </div>
    </section>
  )
}

export default Council

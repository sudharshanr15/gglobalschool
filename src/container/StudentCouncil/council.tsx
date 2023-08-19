import Image from "next/image"
import studentcouncil from '../../assets/council.jpg'

const Council = () => {
  return (
    <section className="section-container md:flex lg:flex justify-between gap-3xl align-center mx-auto">
      <div className="w-full pb-md flex-col justify-between">
        <div className="text-heading-4 text-primary-maroon">STUDENT COUNCIL</div><br/>
        <div>
          As a IB school we believe in student agency and given opportunities to
          students to foster skills like leadership, decision making, communication, team
          work, organisation and public speaking.</div><br/><div>

          Our student council stand out to explicit the above mentioned skills. Our
          ggians are divide in to four houses which are named as Aqua, Aura, Terra and
          Flamma. We have an outstanding student council which comprises of head girl,
          head boy and the leaders of the four houses.</div><br/><div>

          Student council actively involves in all the school issues and always takenresponsibilities of the younger ones.
          They are teaching new skills to their
          younger ones around the school campus.
        </div>
      </div>
        <Image src={studentcouncil} unoptimized className="mx-auto w-auto lg:w-1/2 lg:h-full" alt="studentcouncil"/>
    </section>
  )
}

export default Council

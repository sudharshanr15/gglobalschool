import Image from "next/image"
import studentcouncil from '../../assets/council.jpg'

const Council = () => {
  return (
    <section className="md:flex lg:flex justify-between align-center mx-auto mb-0 lg:mb-3xl mt-2xl lg:mt-3xl">
      <div className="w-full md:w-2/3 lg:w-1/2 p-md lg:p-0 md:p-0 md:px-xl lg:mx-3xl lg:mr-2xl mt-0 mb-md md:mb-0 flex-col justify-between">
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
        <Image src={studentcouncil} unoptimized className="md:mr-xl p-md md:p-0 mx-auto lg:p-0 lg:mr-3xl h-96 w-auto lg:w-1/2 lg:h-full" alt="studentcouncil"/>
    </section>
  )
}

export default Council

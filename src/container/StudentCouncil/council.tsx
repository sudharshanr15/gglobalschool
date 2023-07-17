import Image from "next/image"
import studentcouncil from '../../assets/student council.png'

const Council = () => {
  return (
    <div className="md:flex lg:flex justify-between align-center mx-auto mb-0 lg:mb-20 mt-10 lg:mt-40">
      <div className="w-full md:w-2/3 lg:w-1/2 p-5 lg:p-0 md:p-0 md:px-10 lg:mx-20 lg:mr-16 mt-0 mb-5 md:mb-0 flex-col justify-between">
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
        <Image src={studentcouncil} quality={100} className="md:mr-10 p-5 md:p-0 mx-auto lg:p-0 lg:mr-20 h-96 w-auto lg:w-2/3 lg:h-full" alt="studentcouncil"/>
    </div>
  )
}

export default Council

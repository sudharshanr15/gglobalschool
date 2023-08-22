import Image from "next/image"
import logo1 from '../../assets/PNG image 6.png'
import logo2 from '../../assets/PNG image .png'
import logo3 from '../../assets/PNG imag.png'
import logo4 from '../../assets/PNG logo.png'

const Teamcard = () => {
  return (
    <section className="section-container flex flex-col md:flex-row flex-wrap justify-center content-stretch gap-large">
      <div className="w-full md:max-w-[17rem] p-large border border-primary-maroon my-md md:my-0 rounded-3xl">
        <Image src={logo1} className="w-full h-auto" alt="team1" unoptimized />
        <div className="flex flex-col gap-large text-body">
          <p>A team that symbolizes the <span className="font-bold">crust which keeps the peace</span> for the mob.</p>
          <p>They show off calm & a strong team never moves out of the orbit</p>
        </div>
      </div>
      <div className="w-full md:max-w-[17rem] p-large border border-primary-maroon my-md md:my-0 rounded-3xl">
        <Image src={logo2} className="w-full h-auto" alt="team2" unoptimized />
        <div className="flex flex-col gap-large text-body">
          <p>A team that symbolizes the <span className="font-bold">force of its players.</span></p>
          <p>its always peaceful before they show up ! you know when they are here.</p>
        </div>
      </div>
      <div className="w-full md:max-w-[17rem] p-large border border-primary-maroon my-md md:my-0 rounded-3xl">
        <Image src={logo3} className="w-full h-auto" alt="team3" unoptimized />
        <div className="flex flex-col gap-large text-body">
          <p>A team that symbolizes <span className="font-bold">the fury.</span></p>
          <p>They will be energetic as the discharge from the gun. They make it smokey wherever they go.</p>
        </div>
      </div>
      <div className="w-full md:max-w-[17rem] p-large border border-primary-maroon my-md md:my-0 rounded-3xl">
        <Image src={logo4} className="w-full h-auto" alt="team4" unoptimized />
        <div className="flex flex-col gap-large text-body">
          <p>A team that symbolizes <span className="font-bold">the cohesion.</span></p>
          <p>They flow of the team goes up even more when they reach higher goals</p>
        </div>
      </div>
    </section>
  )
}

export default Teamcard

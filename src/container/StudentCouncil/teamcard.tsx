import Image from "next/image"
import logo1 from '../../assets/PNG image 6.png'
import logo2 from '../../assets/PNG image .png'
import logo3 from '../../assets/PNG imag.png'
import logo4 from '../../assets/PNG logo.png'

const Teamcard = () => {
  return (
    <div className="lg:flex md:flex align-center gap-5 md:gap-2 justify-center my-20 w-fit mx-auto">
      <div className="w-72 md:w-52 lg:w-56 px-4 py-10 lg:py-16 border border-primary-maroon my-5 rounded-3xl">
        <Image src={logo1} alt="team1" />
        <p>A team that symbolizes the <span className="font-bold">crust which keeps the peace</span> for the mob.</p><br/>
        <p>They show off calm & a strong team never moves out of the orbit</p>
      </div>
      <div className="w-72 md:w-52 lg:w-56 px-4 py-10 lg:py-16 border border-primary-maroon my-5 rounded-3xl">
        <Image src={logo2} alt="team2" />
        <p>A team that symbolizes the <span className="font-bold">force of its players.</span></p><br/>
        <p>its always peaceful before they show up ! you know when they are here.</p>
      </div>
      <div className="w-72 md:w-52 lg:w-56 px-4 md:px-2 py-10 lg:py-16 border border-primary-maroon my-5 rounded-3xl">
        <Image src={logo3} alt="team3" />
        <p>A team that symbolizes <span className="font-bold">the fury.</span></p><br/>
        <p>They will be energetic as the discharge from the gun. They make it smokey wherever they go.</p>
      </div>
      <div className="w-72 md:w-52 lg:w-56 px-4 py-10 lg:py-16 border border-primary-maroon my-5 rounded-3xl">
        <Image src={logo4} alt="team4" />
        <p>A team that symbolizes <span className="font-bold">the cohesion.</span></p><br/>
        <p>They flow of the team goes up even more when they reach higher goals</p>
      </div>
    </div>
  )
}

export default Teamcard

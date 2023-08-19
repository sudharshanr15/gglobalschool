'use client'
import { gglobal_logo } from "@/assets/index"
import Image from "next/image"
import Link from "next/link" 
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DirectionsBusOutlinedIcon from '@mui/icons-material/DirectionsBusOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

const Footer = () => {
  return (
    <section className="section-container bg-primary-maroon grid gap-y-large">

      <div className="grid gap-y-md md:flex gap-3xl">

    <div className="md:w-1/3 grid gap-y-large">
      <div className="p-large bg-white w-fit rounded-2xl"> 
        <Image src={gglobal_logo} alt="logo"/>
      </div>
      <p className="text-heading-6 text-white">Address</p>
      <p className="text-white">29A, Rajagoundampalayam, 2nd street,pallipalayam road, tiruchengodu Namakkal, Tamil Nadu, India 637211</p>
      <div className="w-2/3 flex gap-2 bg-primary-orange-1 rounded-3xl px-5 py-2 font-bold cursor-pointer">
        <LocationOnOutlinedIcon/>
        <div>Directions</div>
        </div>
      <div className="w-2/3 flex gap-2 bg-primary-red-2 rounded-3xl px-5 py-2 font-bold cursor-pointer">
        <DirectionsBusOutlinedIcon/>
        <div>View Bus Route</div>
        </div>
      <div className="w-2/3 flex gap-2 bg-primary-yellow-2 rounded-3xl px-5 py-2 font-bold cursor-pointer">
        <CallOutlinedIcon/>
        <div>+91 9231289290</div>
        </div>
      <div className="text-white flex gap-5">
        <FacebookRoundedIcon className="text-4xl cursor-pointer"/>
        <YouTubeIcon className="text-4xl cursor-pointer"/>
        <InstagramIcon className="text-4xl cursor-pointer"/>
      </div>
    </div>

    <div className="w-full grid gap-y-md">
      <div className="grid gap-y-md md:flex justify-between">
        <div className="md:w-1/2 grid gap-y-3">
        <p className="text-heading-6 text-white">G Global Universe</p>
        <Link href='/ourstory' className="text-white cursor-pointer">Our Story</Link>
        <Link href='/mission' className="text-white cursor-pointer">Vision and Mission</Link>
        <Link href='/whyus' className="cursor-pointer text-white">Why us</Link>
        <Link href='/studentagency' className="text-white cursor-pointer">Student Agency</Link>
        <Link href='/policies' className="text-white cursor-pointer">Policies</Link>
        </div>

        <div className="md:w-1/2 grid gap-y-3">
        <p className="text-heading-6 text-white">Curriculum</p>
        <Link href='/eyp' className="text-white cursor-pointer">Early year Programme</Link>
        <Link href='/pyp' className="text-white cursor-pointer">Primary Year Programme</Link>
        <Link href='/life@GGS' className="text-white cursor-pointer">Life @ GGS</Link>
        <Link href='/emotional' className="text-white cursor-pointer">Emotion & Ethical Support</Link>
        </div>
      </div>

      <div className="grid gap-y-md md:flex justify-between">
        <div className="md:w-1/2 grid gap-y-3">
          <p className="text-heading-6 text-white">Become One of US</p>
          <Link href='/#' className="text-white cursor-pointer">Admissions</Link>
          <Link href='/workwithus' className="text-white cursor-pointer">Work with us</Link>
        </div>

        <div className="md:w-1/2 grid gap-y-3">
          <p className="text-heading-6 text-white">Discovery Outside the Wall</p>
          <Link href='/council' className="text-white cursor-pointer">Student Council</Link>
          <Link href='/awakeningcreativity' className="text-white cursor-pointer">Awakening Creativity & Health</Link>
        </div>
      </div>

      <div className="grid gap-y-md md:flex justify-between">
        <Link href='/community' className="md:w-1/2 text-heading-6 text-white cursor-pointer">Community Wellness</Link>
        <Link href='/#' className="md:w-1/2 text-heading-6 text-white cursor-pointer">Days and Events</Link>
      </div>
    </div>

      </div>
    <hr/>
    <div className="flex gap-large text-white text-large">
      <Link href='/terms' className="cursor-pointer">Terms</Link>
      <Link href='/privacy' className="cursor-pointer">Privacy Policy</Link>
    </div>

    </section>
  )
}

export default Footer

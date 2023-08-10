'use client'
import { gglobal_logo } from "@/assets/index"
import Image from "next/image"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DirectionsBusOutlinedIcon from '@mui/icons-material/DirectionsBusOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

const Footer = () => {
  return (
    <section className="section-container bg-primary-maroon grid gap-y-large">

      <div className="flex justify-between">

    <div className="w-1/4 grid gap-y-large">
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
        <FacebookRoundedIcon className="text-4xl"/>
        <YouTubeIcon className="text-4xl"/>
        <InstagramIcon className="text-4xl"/>
      </div>
    </div>

    <div className="w-1/4 grid gap-y-md">
      <div className="grid gap-y-3">
      <p className="text-heading-6 text-white">G Global Universe</p>
      <p className="text-white">Our Story</p>
      <p className="text-white">Vision and Mission</p>
      <p className="text-white">Why us</p>
      <p className="text-white">Student Agency</p>
      <p className="text-white">Policies</p>
      </div>
      <div className="grid gap-y-3">
      <p className="text-heading-6 text-white">Become One of US</p>
      <p className="text-white">Admissions</p>
      <p className="text-white">Work with us</p>
      <br/>
      </div>
      <p className="text-heading-6 text-white">Community Wellness</p>
    </div>

    <div className="w-1/4 grid gap-y-md">
      <div className="grid gap-y-3">
      <p className="text-heading-6 text-white">Curriculum</p>
      <p className="text-white">Early year Programme</p>
      <p className="text-white">Primary Year Programme</p>
      <p className="text-white">Life @ GGS</p>
      <p className="text-white">Emotion & Ethical Support</p>
      <br/>
      </div>
      <div className="grid gap-y-3">
      <p className="text-heading-6 text-white">Discovery Outside the Wall</p>
      <p className="text-white">Student Council</p>
      <p className="text-white">Awakening Creativity & Health</p>
      <br/>
      </div>
      <p className="text-heading-6 text-white">Days and Events</p>
    </div>

      </div>
    <hr/>
    <div className="flex gap-large text-white text-large">
      <p>Terms</p>
      <p>Privacy Policy</p>
    </div>

    </section>
  )
}

export default Footer

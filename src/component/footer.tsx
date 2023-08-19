'use client'
import { gglobal_logo } from "@/assets/index"
import Image from "next/image"
import { useRouter } from 'next/navigation'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DirectionsBusOutlinedIcon from '@mui/icons-material/DirectionsBusOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

const Footer = () => {
  const router=useRouter()
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
        <p onClick={()=>router.push('/#')} className="text-white cursor-pointer">Our Story</p>
        <p onClick={()=>router.push('/#')} className="text-white cursor-pointer">Vision and Mission</p>
        <p onClick={()=>router.push('/whyus')} className="cursor-pointer text-white">Why us</p>
        <p onClick={()=>router.push('/#')} className="text-white cursor-pointer">Student Agency</p>
        <p onClick={()=>router.push('/#')} className="text-white cursor-pointer">Policies</p>
        </div>

        <div className="md:w-1/2 grid gap-y-3">
        <p className="text-heading-6 text-white">Curriculum</p>
        <p onClick={()=>router.push('/eyp')} className="text-white cursor-pointer">Early year Programme</p>
        <p onClick={()=>router.push('/pyp')} className="text-white cursor-pointer">Primary Year Programme</p>
        <p onClick={()=>router.push('/#')} className="text-white cursor-pointer">Life @ GGS</p>
        <p onClick={()=>router.push('/#')} className="text-white cursor-pointer">Emotion & Ethical Support</p>
        </div>
      </div>

      <div className="grid gap-y-md md:flex justify-between">
        <div className="md:w-1/2 grid gap-y-3">
          <p className="text-heading-6 text-white">Become One of US</p>
          <p onClick={()=>router.push('/#')} className="text-white cursor-pointer">Admissions</p>
          <p onClick={()=>router.push('/workwithus')} className="text-white cursor-pointer">Work with us</p>
        </div>

        <div className="md:w-1/2 grid gap-y-3">
          <p className="text-heading-6 text-white">Discovery Outside the Wall</p>
          <p onClick={()=>router.push('/council')} className="text-white cursor-pointer">Student Council</p>
          <p onClick={()=>router.push('/#')} className="text-white cursor-pointer">Awakening Creativity & Health</p>
        </div>
      </div>

      <div className="grid gap-y-md md:flex justify-between">
        <p onClick={()=>router.push('/community')} className="md:w-1/2 text-heading-6 text-white cursor-pointer">Community Wellness</p>
        <p onClick={()=>router.push('/#')} className="md:w-1/2 text-heading-6 text-white cursor-pointer">Days and Events</p>
      </div>
    </div>

      </div>
    <hr/>
    <div className="flex gap-large text-white text-large">
      <p className="cursor-pointer">Terms</p>
      <p className="cursor-pointer">Privacy Policy</p>
    </div>

    </section>
  )
}

export default Footer

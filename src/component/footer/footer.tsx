"use client";
import gglobal_logo from "@/assets/logo/gglogo.svg";
import ibLogo from "@/assets/logo/ib-logo.png";
import Image from "next/image";
import Link from "next/link";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import DirectionsBusOutlinedIcon from "@mui/icons-material/DirectionsBusOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import spotifyIcon from "@/assets/icons/spotify.png"
import { WhatsApp } from "@mui/icons-material";

const Footer = () => {
  return (
    <section className="section-container bg-primary-maroon grid gap-y-large">
      <div className="flex flex-col md:flex-row items-start gap-large">
        <div className="md:w-1/3 grid gap-y-md">
          {/* <div className="border">
            <div className="flex h-18 lg:h-36">
              <Image className="basis-6/12" src={gglobal_logo} alt="logo" />
              <Image className="basis-6/12" src={iblogo} alt="ib logo"></Image>
            </div>
          </div> */}
          <div className="flex-1 h-full mt-4 lg:mt-0">
              <div className="h-17 lg:h-28 overflow-hidden">
                  <div className="h-full flex items-center gap-2 lg:gap-4">
                      <div className="h-full">
                          <Link href="/" >
                              <Image className="h-full object-contain" src={gglobal_logo} unoptimized alt="G Global School Logo" />
                          </Link>
                      </div>
                      <div className="h-20 lg:h-3/6">
                          <Image className="h-full object-contain w-full" src={ibLogo} alt='IB Logo'></Image>
                      </div>
                  </div>
              </div>
          </div>
          <p className="text-heading-6 text-white">Address</p>
          <p className="text-white">
            29A, Rajagoundampalayam, 2nd street,pallipalayam road, Tiruchengodu,
            Namakkal, Tamil Nadu, India 637211
          </p>
          <div className="flex flex-col w-fit gap-md">
            <div className="">
              <Link className="flex items-center gap-2 bg-primary-orange-1 rounded-3xl px-5 py-2 font-bold cursor-pointer" href='https://goo.gl/maps/bXvVWDMoaBnwo7qq5' target="__blank"><LocationOnOutlinedIcon /><div>Directions</div></Link>
            </div>
            <div className="flex items-center gap-2 bg-primary-red-2 rounded-3xl px-5 py-2 font-bold cursor-pointer">
              <DirectionsBusOutlinedIcon />
              <div>View Bus Route</div>
            </div>
            <div className="flex items-center gap-2 bg-primary-yellow-2 rounded-3xl px-5 py-2 font-bold cursor-pointer">
              <CallOutlinedIcon />
              <div>+91 7550327999</div>
            </div>
            <div className="text-white flex gap-5">
              <a href="https://www.facebook.com/gglobalschool" target="_blank"><FacebookRoundedIcon className="text-4xl cursor-pointer" /></a>
              <a href="http://instagram.com/ggsibworldschool" target="_blank"><InstagramIcon className="text-4xl cursor-pointer" /></a>
              <a href="https://www.youtube.com/channel/UC48SqWZUMYj7uP4Zahfm46g" target="_blank"><YouTubeIcon className="text-4xl cursor-pointer" /></a>
              <a href="https://api.whatsapp.com/send/?phone=7550317999&text=Hi,%20I%20am%20(name)%20I%20would%20like%20to%20know%20more%20about%20G%20GLOBAL%20SCHOOL" target="_blank"><WhatsApp className="text-4xl cursor-pointer" /></a>
              <a href="mailto:inquiry@gglobalschool.com"><EmailIcon className="text-4xl cursor-pointer" /></a>
            </div>
          </div>
        </div>
        <div className="w-full grid gap-y-md">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-large">
            <div className="flex flex-auto flex-col gap-md">
              <p className="text-heading-6 text-white">Our G Global Universe</p>
              <Link href="/our-story" className="text-white cursor-pointer">
                GGS Story
              </Link>
              <Link href="/mission" className="text-white cursor-pointer">
                Mission & Values
              </Link>
              <Link href="/why-us" className="cursor-pointer text-white">
                Why us
              </Link>
              <Link
                href="/student-agency"
                className="text-white cursor-pointer"
              >
                Student Agency
              </Link>
              <Link href="/policies" className="text-white cursor-pointer">
                Pillars by which we abide
              </Link>
            </div>
            <div className="flex flex-auto flex-col gap-md">
              <p className="text-heading-6 text-white uppercase">Curriculum & Learning</p>
              <Link href="/eyp" className="text-white cursor-pointer">
                Primary years programme
              </Link>
              <Link href="/emotional" className="text-white cursor-pointer">
                Emotional & Ethical Support
              </Link>
            </div>
            <div className="flex flex-auto flex-col gap-md">
              <p className="text-heading-6 text-white">Life @ GGS</p>
              <Link href="/life-at-ggs" className="text-white cursor-pointer">
                Studio @ GGS
              </Link>
              <Link
                href="/student-council"
                className="text-white cursor-pointer"
              >
                Student Leadership
              </Link>
              <Link
                href="/awakening-creativity"
                className="text-white cursor-pointer"
              >
                Health & Well being
              </Link>
            </div>
            <div className="flex flex-auto flex-col gap-md">
              <p className="text-heading-6 text-white">Become One of US</p>
              <Link href="/admission" className="text-white cursor-pointer">
                Admissions
              </Link>
              <Link href="/work-with-us" className="text-white cursor-pointer">
                Work with us
              </Link>
            </div>
            <div className="flex flex-auto flex-col gap-md">
              <Link
                href="/discovery"
                className="text-heading-6 text-white cursor-pointer"
              >
                Discovery Outside the Wall
              </Link>
            </div>
            <div className="flex flex-auto flex-col gap-md">
              <Link
                href="/community"
                className="text-heading-6 text-white cursor-pointer"
              >
                Community Wellness
              </Link>
            </div>
            <div className="flex flex-auto flex-col gap-md">
              <Link
                href="/events"
                className="text-heading-6 text-white cursor-pointer"
              >
                Days and Events
              </Link>
            </div>
            <div className="flex flex-auto flex-col gap-md">
              <div className="flex flex-row flex-wrap items-center gap-x-md">
                <Link
                  href=""
                  className="text-heading-6 text-white cursor-pointer"
                >
                  News room
                </Link>
                <span className="bg-primary-yellow p-1 text-gray-900 text-caption rounded-md">coming soon</span>
              </div>
            </div>
            <div className="flex flex-auto flex-col gap-md">
            <div className="flex flex-row flex-wrap items-center gap-x-md">
                <Link
                  href=""
                  className="text-heading-6 text-white cursor-pointer"
                >
                  Blogs
                </Link>
                <span className="bg-primary-yellow p-1 text-gray-900 text-caption rounded-md">coming soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-x-md lg:px-12  lg:justify-end">
          <Link href="https://anchor.fm/g-global-school" target="_blank"  className="bg-white py-2 px-4 font-semibold rounded-md flex gap-2 items-center">
            <span>
              Listen on broadcast
            </span>
            <span className="">
              <Image src={spotifyIcon} alt="Spotify Logo"></Image>
            </span>
          </Link>
      </div>
      <hr />
      <div className="flex gap-large text-white text-xl">
        <Link href="/terms" className="">
          Terms
        </Link>
        <Link href="/privacy" className="">
          Privacy Policy
        </Link>
      </div>
      <div className="flex flex-col md:flex-row gap-large justify-between w-full text-white">
        <p className="text-xl">2023 @ Copyrights Reserved</p>
        <p className="text-xl">Crafted by Neulancers</p>
      </div>
    </section>
  );
};

export default Footer;

import Hero from "@/container/Home/Hero";
import {Programs, Team, Blogs, News} from "@/container/Home";
import Link from "next/link";
import { choose_us_1, choose_us_2, choose_us_3, wave_fill } from "@/assets"
import { story_2 } from "@/assets/images/our-story";
import { swim } from "@/assets/images/health-wellbeing";
import { music_1 } from "@/assets/images/music";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Hero />
      <section className="section-container">
        <div className="flex flex-col md:flex-row gap-xl">
          <div className="w-full md:w-1/2">
            <div className="w-fit mb-md">
              <h2 className="uppercase text-heading-5 md:text-heading-3">Why choose us</h2>
              <div className="">
                <Image src={wave_fill} className="w-1/4 mx-auto" alt="Wave Image" />
              </div>
            </div>
            <p className="text-body mb-md md:mb-2xl">At G Global School, we offer more than just education - we provide a <span className="text-primary-maroon">gateway to a world of boundless possibilities</span> and personal growth.</p>
            <Link href={""} className="text-heading-6 md:text-heading-5 bg-primary-yellow-1 text-gray-900 px-8 py-md rounded-full w-fit block">
              Know more
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex gap-md">
              <div className="w-full rounded-xl md:rounded-3xl overflow-hidden">
                <Image unoptimized src={story_2} alt="Why Choose image" className="w-full h-full object-cover" />
              </div>
              <div className="w-full rounded-xl md:rounded-3xl overflow-hidden">
                <Image unoptimized src={music_1} alt="Why Choose image" className="w-full h-full object-cover" />
              </div>
              <div className="w-full rounded-xl md:rounded-3xl overflow-hidden">
                <Image unoptimized src={swim} alt="Why Choose image" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Programs />
      <Team />
      <Blogs />
      <News />
    </>
  );
};

export default Home;

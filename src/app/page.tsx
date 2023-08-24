import Hero from "@/container/Home/Hero";
import {Programs, Team, Blogs, News} from "@/container/Home";
import Link from "next/link";
import { choose_us_1, choose_us_2, choose_us_3 } from "@/assets"
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Hero />
      <section className="section-container">
        <div className="flex flex-col md:flex-row gap-xl">
          <div className="w-full md:w-1/2">
            <h2 className="uppercase text-heading-5 md:text-heading-3 mb-md">Why choose us</h2>
            <p className="text-body mb-md md:mb-2xl">At G Global School, we offer more than just education - we provide a <span className="text-primary-maroon">gateway to a world of boundless possibilities</span> and personal growth.</p>
            <Link href={""} className="text-heading-6 md:text-heading-5 bg-primary-yellow-1 text-gray-900 px-8 py-md rounded-full w-fit block">
              Know more
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex gap-md">
              <div className="w-full">
                <Image unoptimized src={choose_us_1} alt="Why Choose image" className="w-full h-full object-cover" />
              </div>
              <div className="w-full">
                <Image unoptimized src={choose_us_2} alt="Why Choose image" className="w-full h-full object-cover" />
              </div>
              <div className="w-full">
                <Image unoptimized src={choose_us_3} alt="Why Choose image" className="w-full h-full object-cover" />
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

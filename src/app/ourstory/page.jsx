import React from "react";
import Image from "next/image";
import logo1 from "../../assets/orustory1.png";
import Logo2 from "../../assets/orustory2.png";
import logo3 from "../../assets/orustory3.png";
import logo4 from "../../assets/orustory4.png";
import logo5 from "../../assets/orustory5.png";
import logo6 from "../../assets/ourstory6.png";
import logo7 from "../../assets/ourstory7.png";
import TopicCard from "../../container/ourstory/TopicCards";

function page() {
  return (
    <>
      <div className="w-[100%] md:w-[95%] top-5 ">
        <p className="md:pl-24 px-4 text-heading-6">
          G Global School nurtures
          <span className="text-primary-maroon ">
            sparkling imaginations, fertile minds, and willingness
          </span>
          <span> to take on risks with students’ agency.</span>
        </p>
      </div>

      {/* about GGS */}

      <div className="w-full md:w-[90%] flex flex-col md:flex-row   mx-auto top-3 p-5 md:mt-6 gap-5 md:gap-[42px]">
        <div className="w-[345px]  h-[380px] md:h-[280px] md:w-[610px]">
          <Image
            src={logo1}
            className="w-full h-full  "
            alt="logo"
            unoptimized
          />
        </div>

        <div className="w-full md:w-[50%]">
          <p className="text-primary-maroon-1 text-heading-4 w-full md:w-[50%] ">
            About GGS
          </p>
          <div className=" text-left  md:w-[90%] flex flex-col  text-body pt-3 gap-3">
            <div>
              <p className="  ">
                We, the passionate educators with more than
                <span className="font-bold"> 44 years of experience. </span>
              </p>
            </div>
            <div className="top-auto text-body">
              <p className="">
                We proudly introduced our new venture, the G Global School, a
                fresh breath of experience to
                <span className="font-bold">
                  present IB education, in the year 2017
                </span>
                <span> in our very own town</span>
                <span className="font-bold"> Tiruchengode</span>
                <span>
                  , a prime location for educational institutions in Tamil Nadu.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MANAGEMENT SECTION */}

      <div>
        <p className="pt-12 text-heading-4 uppercase md:pl-24 px-4 text-primary-maroon">
          MANAGEMENT
        </p>
      </div>

      {/* chairman director */}
      <div className="">
        <div className="w-full md:w-[90%] flex flex-col md:flex-row md:mt-7  mx-auto p-5  gap-5 md:gap-[42px]">
          <div className="w-full md:w-[626px]  ">
            <p className="text-primary-orange-1 text-heading-6 w-full md:w-auto">
              CHAIRMAN DIRECTOR
            </p>
            <div className="text-body font-normal leading-7 tracking-normal text-left md:w-full">
              <p className="pt-6">
                A noble laureate who pursued his professional life in
                educational field. He began his career as a teacher in
                government school and with his consistent perseverance he became
                the Principal.
              </p>
              <p className="pt-6">
                Later he served as the Head of Department in various govern
                schools. His knowledge and commitment towards educating young
                minds made him the Secretary and
                <span className="font-bold">
                  {" "}
                  Managing Trustee of Vidyaa Vikas Educational institution and
                  the Founder of Vetri Vikaas Educational institution .
                </span>
              </p>
              <p className="pt-6">
                His dream of providing International Education in his hometown
                was fulfilled by establishing G Global School.
              </p>
            </div>
          </div>
          <div className="relative  left-0 md:left-3 w-[340px] h-[403px] md:w-[600px] md:h-[450px] rounded-md ">
            <Image
              src={Logo2}
              alt="logo"
              className="w-full h-full rounded-[48px] "
              unoptimized
            />
            <div className="absolute flex flex-col p-2  rounded-[48px] bg-gradient-to-t from-zinc-900 to-transparent justify-center items-center bottom-0 left-0 right-0 top-[40%] h-[60%] w-full md:w-full  ">
              <p className="text-white text-subheading-regular  uppercase pt-10 p-2">
                Dr. S. GUNASEKARAN M.Ed., M. Phil., Phd.
              </p>
              <p className="text-white text-body pt-6">
                CHAIRMAN DIRECTOR,G GLOBAL SCHOOL
              </p>
            </div>
          </div>
        </div>

        {/* Managing director */}
        <div className="w-full md:w-[90%] md:h-120 flex flex-col md:flex-row-reverse md:pt-16  p-5 mx-auto  gap-5 md:gap-[66px]">
          <div className="w-full md:w-[50%]   ">
            <p className="text-primary-orange-1 text-heading-6 w-full md:w-auto md:pt-8">
              MANAGING DIRECTOR
            </p>
            <div className="text-body font-normal leading-7 tracking-normal text-left">
              <p className="pt-6">
                A versatile administrator with a deep knowledge in technology,
                implements the same in his educational profession.
              </p>
              <p className="pt-6">
                He is the
                <span className="font-bold">
                  Chairman of Vetri Vikaas Educational institutions - Rasipuram
                  and Mallur.
                </span>
                He is also the Director of Vidyaa Vikas Educational institutions
                - Karamadai and Tanjore and is now implementing global ideas and
                provide holistic education through G Global School.
              </p>
            </div>
          </div>
          <div className="relative  left-0 md:left-3 w-[340px] h-[403px] md:w-[600px] md:h-[380px] rounded-md ">
            <Image
              src={logo3}
              alt="logo"
              className="w-full h-full "
              unoptimized
            />
            <div className="absolute flex flex-col  md:rounded-[48px] rounded-[20px] bg-gradient-to-t from-zinc-900 to-transparent justify-center items-center bottom-0 left-0 right-0 top-[40%] h-[60%] w-full  ">
              <p className="text-white text-subheading-regular uppercase pt-12">
                DR. G. VETRICHELVAN
              </p>
              <p className="text-white text-body pt-3 text-center ">
                MANAGING DIRECTOR,G GLOBAL SCHOOL
              </p>
            </div>
          </div>
        </div>

        {/* head of school */}
        <div className="w-full md:w-[90%] flex flex-col md:flex-row   mx-auto p-5 md:pt-16  gap-5 md:gap-[42px]">
          <div className="w-full md:w-[60%]  ">
            <p className="text-primary-orange-1 text-heading-6 w-full md:w-auto">
              EXECUTIVE DIRECTOR/ HEAD OF SCHOOL
            </p>
            <div className="text-body  font-normal leading-7 tracking-normal text-left">
              <p className="pt-2">
                A compassionate and empowered lady who handles every situation
                with sheer positivity.
              </p>
              <p className="pt-4">
                She started her educational career as a Primary Years academic
                Consultant in Vetri Vikaas Public School, Rasipuram.
              </p>
              <p className="pt-4">
                She designed and created books for kindergarten imbibing her
                Montessori learning. Her curiosity provoked her to gather
                extensive knowledge about IB PYP which lands her as the Head of
                School in GGS providing facilities to the school community
                through her caring attribute.
              </p>
            </div>
          </div>
          <div className="relative  left-0 md:left-3 w-[340px] h-[403px] md:w-[600px] md:h-[380px] rounded-md ">
            <Image
              src={logo4}
              alt="logo"
              className="w-full h-full "
              unoptimized
            />
            <div class="absolute flex flex-col   md:rounded-[48px] rounded-[40px]  bg-gradient-to-t from-zinc-900 to-transparent justify-center items-center bottom-0 left-0 right-0 top-[40%] h-[60%] w-full  ">
              <p className="text-white text-subheading-regular uppercase pt-8 p-2">
                DR. S. ROSHNI VETRICHELVAN
              </p>
              <p className="text-white text-body pt-2 p-4 ">
                EXECUTIVE DIRECTOR / HEAD OF SCHOOL,G GLOBAL SCHOOL
              </p>
            </div>
          </div>
        </div>

        {/* PEDAGOGICAL LEADERSHIP TEAM */}
        <div className="pt-12">
          <p className=" text-heading-4 uppercase md:pl-24 px-4 text-primary-maroon">
            PEDAGOGICAL LEADERSHIP TEAM{" "}
          </p>
        </div>

        <div className="">
          <p className=" pt-6 md:pl-24 px-4 text-body">
            Our PLT includes our head of school, deputy head of school Ms.
            Sathyavarthini and our coordinator Ms. Suguna. Our PLT takes the
            responsibility of framing our curriculum and ensures the
            interdisciplinary learning of the students which are broad and
            balanced, conceptual and connected.
          </p>
        </div>

        <div className="w-[90%] md:w-[95%] flex flex-col md:flex-row justify-center  mx-auto top-3 pt-12 md:p-10 gap-5 md:gap-[30px]">
          <div className=" p-3 ">
            <Image
              src={logo5}
              alt="logo"
              className="w-full md:h-[440px] h-[337px]  "
              unoptimized
            />
            <p className="text-heading-6 pt-4">Ms. SUGUNA </p>
            <p className=" pt-6 text-subheading-regular ">PYP COORDINATOR</p>
            <p className=" pt-2 ">
              A passionate leader, who drives the team with sheer positivity and
              enthusiasm. Her journey at GGS began in the year 2018. Her
              positive mindset guides the GGS team both academically and
              non-academically
            </p>
          </div>

          <div className="p-3">
            <Image
              src={logo5}
              alt="logo"
              className="w-full md:h-[440px] h-[337px] "
              unoptimized
            />
            <p className="text-heading-6 pt-4">Ms. SUGUNA </p>
            <p className=" pt-6 text-subheading-regular">PYP COORDINATOR</p>
            <p className=" pt-2 ">
              A passionate leader, who drives the team with sheer positivity and
              enthusiasm. Her journey at GGS began in the year 2018. Her
              positive mindset guides the GGS team both academically and
              non-academically
            </p>
          </div>
        </div>

        {/* other topics */}
        <div>
          <p className="text-heading-4 uppercase mx-auto w-[90%] mt-10 text-primary-maroon-1">
            other topics to explore
          </p>
        </div>

        <div className="w-[90%] md:w-[90%] flex flex-col md:flex-row justify-center  mx-auto top-3  md:p-10  md:gap-[30px]">
          <TopicCard
            img={logo7}
            text={"Mission and vision"}
            text1={"Mission and vision"}
          />
          <TopicCard img={logo6} text={"why us"} text1={"why us"} />
        </div>
      </div>
    </>
  );
}

export default page;
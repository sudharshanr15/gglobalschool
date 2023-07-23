import React from "react";
import Image from "next/image";
import logo1 from "../../assets/orustory1.png";
import Logo2 from "../../assets/orustory2.png";
import logo3 from "../../assets/orustory3.png";
import logo4 from "../../assets/orustory4.png";
import logo5 from "../../assets/orustory5.png";
import TopicCard from "../../container/eyp/TopicCard";


function page() {
  return (
    <>
      <div className="w-[100%] md:w-[93%] top-5 ">
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
        <div className="w-full   md:w-[45%]">
          <Image src={logo1} className="w-full h-full " alt="logo" />
        </div>

        <div className="w-full md:w-[55%]">
          <p className="text-primary-maroon-1 text-heading-4 w-full md:w-[50%]">
            About GGS
          </p>
          <div className=" text-left  md:w-[100%] flex flex-col  text-body">
            <div>
              <p className="pt-6  ">
                We, the passionate educators with more than
                <span className="font-bold"> 44 years of experience. </span>
              </p>
            </div>
            <div className="top-auto text-body">
              <p className="pt-5">
                We proudly introduced our new venture, the G Global School, a
                fresh breath of experience to
                <span className="font-bold">
                  {" "}
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
        <p className="top-4 text-heading-4 uppercase md:pl-24 px-4 text-primary-maroon">
          MANAGEMENT
        </p>
      </div>

      {/* chairman director */}
      <div className="">
        <div className="w-full md:w-[90%] flex flex-col md:flex-row md:mt-7  mx-auto p-5  gap-5 md:gap-[42px]">
          <div className="w-full md:w-[65%]  ">
            <p className="text-primary-orange-1 text-heading-6 w-full md:w-auto">
              CHAIRMAN DIRECTOR
            </p>
            <div className="text-base font-normal leading-7 tracking-normal text-left">
              <p className="pt-2">
                A noble laureate who pursued his professional life in
                educational field. He began his career as a teacher in
                government school and with his consistent perseverance he became
                the Principal.
              </p>
              <p className="pt-4">
                Later he served as the Head of Department in various govern
                schools. His knowledge and commitment towards educating young
                minds made him the Secretary and
                <span className="font-bold">
                  {" "}
                  Managing Trustee of Vidyaa Vikas Educational institution and
                  the Founder of Vetri Vikaas Educational institution .
                </span>
              </p>
              <p className="pt-4">
                His dream of providing International Education in his hometown
                was fulfilled by establishing G Global School.
              </p>
            </div>
          </div>
          <div className="relative left-0 md:left-3 w-full md:w-[80%]">
            <Image src={Logo2} alt="logo" className="w-[95%] h-[90%]  " />
          </div>
        </div>

        {/* Managing director */}
        <div className="w-full md:w-[90%] md:h-120 flex flex-col md:flex-row-reverse items-center  p-5 mx-auto  gap-5 md:gap-[66px]">
          <div className="w-full md:w-[50%]   ">
            <p className="text-primary-orange-1 text-heading-6 w-full md:w-auto">
              MANAGING DIRECTOR
            </p>
            <div className="text-base font-normal leading-7 tracking-normal text-left">
              <p className="pt-2">
                A versatile administrator with a deep knowledge in technology,
                implements the same in his educational profession.
              </p>
              <p className="pt-4">
                He is the{" "}
                <span className="font-bold">
                  {" "}
                  Chairman of Vetri Vikaas Educational institutions - Rasipuram
                  and Mallur.
                </span>{" "}
                He is also the Director of Vidyaa Vikas Educational institutions
                - Karamadai and Tanjore and is now implementing global ideas and
                provide holistic education through G Global School.
              </p>
            </div>
          </div>
          <div className="relative left-0 md:left-3 md:h-[483px] w-full md:w-[50%]">
            <Image src={logo3} alt="logo" className="w-full h-[80%]  " />
          </div>
        </div>

        {/* head of school */}
        <div className="w-full md:w-[90%] flex flex-col md:flex-row md:mt-7  mx-auto p-5  gap-5 md:gap-[42px]">
          <div className="w-full md:w-[50%]  ">
            <p className="text-primary-orange-1 text-heading-6 w-full md:w-auto">
              EXECUTIVE DIRECTOR/ HEAD OF SCHOOL
            </p>
            <div className="text-base font-normal leading-7 tracking-normal text-left">
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
          <div className="relative left-0 md:left-3 md:h-[483px] w-full md:w-[50%]">
            <Image src={logo4} alt="logo" className="w-full h-[80%]  " />
          </div>
        </div>

        {/* PEDAGOGICAL LEADERSHIP TEAM */}
        <div>
          <p className="top-4 text-heading-4 uppercase md:pl-24 px-4 text-primary-maroon">
            PEDAGOGICAL LEADERSHIP TEAM{" "}
          </p>
        </div>

        <div>
          <p className=" md:pl-24 px-4">
            Our PLT includes our head of school, deputy head of school Ms.
            Sathyavarthini and our coordinator Ms. Suguna. Our PLT takes the
            responsibility of framing our curriculum and ensures the
            interdisciplinary learning of the students which are broad and
            balanced, conceptual and connected.
          </p>
        </div>

        <div className="w-[90%] md:w-[95%] flex flex-col md:flex-row justify-center  mx-auto top-3  md:p-10 gap-5 md:gap-[30px]">
          <div className="">
            <Image src={logo5} alt="logo" className="w-full h-[466.827px]  " />
            <p className="text-heading-6">Ms. SUGUNA </p>
            <p>PYP COORDINATOR</p>
            <p>
              A passionate leader, who drives the team with sheer positivity and
              enthusiasm. Her journey at GGS began in the year 2018. Her
              positive mindset guides the GGS team both academically and
              non-academically
            </p>
          </div>

          <div className="">
            <Image src={logo5} alt="logo" className="w-full h-[466.827px]  " />
            <p className="text-heading-6">Ms. SUGUNA </p>
            <p>PYP COORDINATOR</p>
            <p>
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
      
      <div className="w-[90%] md:w-[95%] flex flex-col md:flex-row justify-center  mx-auto top-3  md:p-10 gap-5 md:gap-[30px]">
        <TopicCard text={"Mission and vision"} text1={"Mission and vision"} />
        <TopicCard text={"why us"} text1={"why us"} />
      </div>



      </div>
    </>
  );
}

export default page;

import React from "react";
import Image from "next/image";
import logo1 from "../../assets/orustory1.png";
import Logo2 from "../../assets/orustory2.png"
import logo3 from "../../assets/orustory3.png";
import logo4 from "../../assets/orustory4.png"

function page() {
  return (
    <>
      <div class="w-[90%] flex p-20  items-start content-center gap-y-24  ">
        <p> G Global School nurtures </p>
        <p className="text-primary-maroon px-2">
          sparkling imaginations, fertile minds, and willingness{" "}
        </p>
        <p>to take on risks with students’ agency.</p>
      </div>

      {/* about GGS */}

      <div className="w-full md:w-[95%] flex flex-col md:flex-row   mx-auto top-3 p-5 md:mt-6 gap-5 md:gap-[42px]">
        <div className="w-full md:w-auto">
          <Image src={logo1} className="w-full h-full" alt="logo" />
        </div>

        <div className="w-full md:w-[80%]">
          <p className="text-primary-maroon-1 text-heading-4 w-full md:w-[50%]">
            About GGS
          </p>
          <div className="text-base font-normal text-left md:w-[100%] flex flex-col">
            <div >
              <p className="pt-4 text-body">
                We, the passionate educators with more than
              </p>
              <p className="text-heading-6">44 years of experience. </p>
            </div>
            <div>
              <p>
                We proudly introduced our new venture, the G Global School, a
                fresh breath of experience to
              </p>
              <p className="text-heading-6">
                present IB education, in the year 2017
              </p>
              <p>in our very own town</p>
              <p className="text-heading-6">Tiruchengode</p>
              <p>
                , a prime location for educational institutions in Tamil Nadu.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* MANAGEMENT SECTION */}

      <div >
        <p>MANAGEMENT</p>

        {/* chairman director */}

        <div className="w-full md:w-[90%] flex flex-col md:flex-row md:mt-7  mx-auto p-5  gap-5 md:gap-[42px]">
        <div className="w-full md:w-[50%]  ">
          <p className="text-primary-orange-1 text-heading-6 w-full md:w-auto">
          CHAIRMAN DIRECTOR
          </p>
          <div className="text-base font-normal leading-7 tracking-normal text-left">
            <p className="pt-2">
            A noble laureate who pursued his professional life in educational field. He began his career as a teacher in government school and with his consistent perseverance he became the Principal.
            </p>
            <p className="pt-4">
            Later he served as the Head of Department in various govern schools. His knowledge and commitment towards educating young minds made him the Secretary and Managing Trustee of Vidyaa Vikas Educational institution and the Founder of Vetri Vikaas Educational institution .
            </p>
            <p className="pt-4">
            His dream of providing International Education in his hometown was fulfilled by establishing G Global School.
            </p>
          </div>
        </div>
        <div className="relative left-0 md:left-3 w-full md:w-[80%]">
          <Image src={Logo2} alt="logo" className="w-[95%] h-[80%]  " />
        </div>
      </div>


      {/* Managing director */}
      <div className="w-full md:w-[90%] flex flex-col md:flex-row-reverse md:mt-7  mx-auto p-5  gap-5 md:gap-[42px]">
        <div className="w-full md:w-[50%]  ">
          <p className="text-primary-orange-1 text-heading-6 w-full md:w-auto">
          CHAIRMAN DIRECTOR
          </p>
          <div className="text-base font-normal leading-7 tracking-normal text-left">
            <p className="pt-2">
            A noble laureate who pursued his professional life in educational field. He began his career as a teacher in government school and with his consistent perseverance he became the Principal.
            </p>
            <p className="pt-4">
            Later he served as the Head of Department in various govern schools. His knowledge and commitment towards educating young minds made him the Secretary and Managing Trustee of Vidyaa Vikas Educational institution and the Founder of Vetri Vikaas Educational institution .
            </p>
            <p className="pt-4">
            His dream of providing International Education in his hometown was fulfilled by establishing G Global School.
            </p>
          </div>
        </div>
        <div className="relative left-0 md:left-3 w-full md:w-[80%]">
          <Image src={logo3} alt="logo" className="w-[95%] h-[80%]  " />
        </div>
      </div>

     
        
         {/* head of school */}
         <div className="w-full md:w-[90%] flex flex-col md:flex-row md:mt-7  mx-auto p-5  gap-5 md:gap-[42px]">
        <div className="w-full md:w-[50%]  ">
          <p className="text-primary-orange-1 text-heading-6 w-full md:w-auto">
          CHAIRMAN DIRECTOR
          </p>
          <div className="text-base font-normal leading-7 tracking-normal text-left">
            <p className="pt-2">
            A noble laureate who pursued his professional life in educational field. He began his career as a teacher in government school and with his consistent perseverance he became the Principal.
            </p>
            <p className="pt-4">
            Later he served as the Head of Department in various govern schools. His knowledge and commitment towards educating young minds made him the Secretary and Managing Trustee of Vidyaa Vikas Educational institution and the Founder of Vetri Vikaas Educational institution .
            </p>
            <p className="pt-4">
            His dream of providing International Education in his hometown was fulfilled by establishing G Global School.
            </p>
          </div>
        </div>
        <div className="relative left-0 md:left-3 w-full md:w-[80%]">
          <Image src={logo4} alt="logo" className="w-[95%] h-[80%]  " />
        </div>
      </div>





      </div>


    </>
  );
}

export default page;

import React from "react";
import Image from "next/image";
import eypLogo from "../../assets/eyp image 1.jpg";
import eypLogo2 from "../../assets/Group 24.png"

function page() {
  return (
    <>
      <div className="w-[80%] ">
        <p className="text-heading-4 uppercase mx-auto w-[90%]">
          SHAPING YOUNG MINDS : A CHILD'S LEARNING BEGINS FROM EARLY YEARS
        </p>
      </div>

      <div className="w-[85%] flex justify-center items-center mx-auto top-3 p-20 gap-[117px]">
        <div>
          <Image src={eypLogo} height="full" width="full" alt="logo" />
        </div>
        <div className="w-[60%]">
          <p className="text-primary-maroon-1 text-heading-3 w-[50%] ">
            EARLY YEAR PROGRAMME
          </p>
          <div className=" text-base font-normal leading-7 tracking-normal text-left  ">
            <p className="pt-4">
              children are natural inquires from birth; they have the capacity
              to learn about,intract with and interpret the world around them.
            </p>
            <p className="pt-4">
              Fromt birth, children possess all kind of mental abilities
              uniquely suited these early phase of learning and development.
            </p>
            <p className="pt-4">
              They are curiuous and capable learners with a sence of agency,
              rich in potential, bringing valid skills, preference and
              understanding to the educational process.
            </p>
          </div>
        </div>
      </div>

      {/* // next div */}
      <div className="w-[85%] flex justify-center items-center mx-auto  p-20 gap-[117px]">
        
        <div className="w-[60%]">
          <p className="text-primary-maroon-1 text-heading-3 w-[50%] ">
            FEATURES
          </p>
          <div className=" text-base font-normal leading-7 tracking-normal text-left  ">
            <p className="pt-4">
            Learning spaces at GGS are designed to support active participation of the children through play.
            </p>
            <p className="pt-4">
            Learning engagements and classroom activities are designed by teachers to develop their fine and gross motor skills in every day teaching and learning.
            </p>
            <p className="pt-4">
            Literacy and Numeracy curriculum are framed through a wide range of playful and inquiry- based explorations. Learner’s are provided with various symbolic and representational learning
            </p>
           
          
          </div>
        </div>
        <div className="relative left-3 w-[100%]">
          <Image src={eypLogo2}  alt="logo"  />
        </div>
      </div>
    </>
  );
}

export default page;

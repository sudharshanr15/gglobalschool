import React, { useRef,useState } from 'react'
import missionImage from "../../assets/mv.png"
import Image from 'next/image';
import MissionCards from "./MissionCard"
import scrollImg from "../../assets/scroll.png"
import profile1 from "../../assets/profile1.jpg" 

function Profile() {
    const ref = useRef(null);
    const [isleft,setIsLeft]=useState(true)
        const scroll = (scrollOffset) => {
            ref.current.scrollLeft += scrollOffset;
        };
  return (
      <>
          <div className="flex w-[90%] mx-auto ">
              <div>
                  <p className="text-heading-3 text-primary-maroon-1">
                      IB LEARNER PROFILE
                  </p>
                  <p>
                      At G Global School we are dedicated to creating a learning
                      environment that supports the development of the whole
                      child, aligning with the IB Learner Profile attributes.
                      <br />
                      <br />
                      Our vision and mission guide us in empowering our students
                      to become lifelong learners, critical thinkers, and
                      responsible global citizens who can contribute positively
                      to the world around them.
                  </p>
              </div>
              <Image src={missionImage} alt="mission" unoptimized />
          </div>
          <div
              id="ProfileCardsSection"
              className="flex gap-10 overflow-x-auto relative scroll-smooth "
              ref={ref}
          >
              <Image
                  src={scrollImg}
                  onClick={() => {
                      scroll(2000);
                      setIsLeft(false);
                  }}
                  className={
                      " absolute top-44 right-10" + (isleft ? " " : " hidden")
                  }
              />
              <Image
                  src={scrollImg}
                  onClick={() => {
                      scroll(-2000);
                      setIsLeft(true);
                  }}
                  className={
                      " absolute  top-44 -right-40 rotate-180" +
                      (isleft ? " hidden" : "")
                  }
              />

              <MissionCards
                  cardImage={profile1}
                  title={"Essence of PYP"}
                  desc={[
                      "Early learning in the PYP is a holistic learning experience that integrates socio -emotional, physical and cognitive development. ",
                      <br></br>,
                      <br></br>,
                      "In the PYP classroom, it takes place in dynamic environments that promote play, discovery and exploration.",
                  ]}
                  iswide={false}
              />
              <MissionCards
                  cardImage={profile1}
                  title={"Essence of PYP"}
                  desc={[
                      "Early learning in the PYP is a holistic learning experience that integrates socio -emotional, physical and cognitive development. ",
                      <br></br>,
                      <br></br>,
                      "In the PYP classroom, it takes place in dynamic environments that promote play, discovery and exploration.",
                  ]}
                  iswide={false}
              />
              <MissionCards
                  cardImage={profile1}
                  title={"Essence of PYP"}
                  desc={[
                      "Early learning in the PYP is a holistic learning experience that integrates socio -emotional, physical and cognitive development. ",
                      <br></br>,
                      <br></br>,
                      "In the PYP classroom, it takes place in dynamic environments that promote play, discovery and exploration.",
                  ]}
                  iswide={false}
              />
              <MissionCards
                  cardImage={profile1}
                  title={"Essence of PYP"}
                  desc={[
                      "Early learning in the PYP is a holistic learning experience that integrates socio -emotional, physical and cognitive development. ",
                      <br></br>,
                      <br></br>,
                      "In the PYP classroom, it takes place in dynamic environments that promote play, discovery and exploration.",
                  ]}
                  iswide={false}
              />
              <MissionCards
                  cardImage={profile1}
                  title={"Essence of PYP"}
                  desc={[
                      "Early learning in the PYP is a holistic learning experience that integrates socio -emotional, physical and cognitive development. ",
                      <br></br>,
                      <br></br>,
                      "In the PYP classroom, it takes place in dynamic environments that promote play, discovery and exploration.",
                  ]}
                  iswide={false}
              />
              <MissionCards
                  cardImage={profile1}
                  title={"Essence of PYP"}
                  desc={[
                      "Early learning in the PYP is a holistic learning experience that integrates socio -emotional, physical and cognitive development. ",
                      <br></br>,
                      <br></br>,
                      "In the PYP classroom, it takes place in dynamic environments that promote play, discovery and exploration.",
                  ]}
                  iswide={false}
              />
          </div>
      </>
  );
}

export default Profile
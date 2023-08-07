import React from "react";
import TopicCard from "../../container/life@GGS/TopicCard";
import StudioCards from "../../container/life@GGS/StudioCards";
import Slide from "../../container/life@GGS/Slide";
import img1 from "../../assets/life@ggs1.png";
import img2 from "../../assets/life@ggs2.png";
import img3 from "../../assets/life@ggs3.png";
import img4 from "../../assets/life@ggs4.png";
import img5 from "../../assets/life@ggs5.png";
import img6 from "../../assets/life@ggs6.png";

// md:p-md lg:p-large xl:p-xl 2xl:p-2xl 3xl:p-3xl
function page() {
  return (
    <>
      <section >
        <div className="w-[100%] md:w-[95%]  ">
          <p className="md:pl-24 px-4 text-heading-4 uppercase ">
            Teach your child the art of learning through
            <span className="text-primary-maroon "> creativity and curiosity.
            </span>
          </p>
        </div>
      </section>

      {/* our facility */}
      <section >
        <div className="w-[100%] md:w-[95%] pt-3xl ">
          <p className="md:pl-24  px-4 text-primary-maroon text-heading-6">
            OUR FACILITIES
          </p>
          <p className="md:pl-24 px-4  pt-4 text-body">
            Good infrastructure and facilities encourage kids to feel warm and
            welcoming in the school. They also provide various Opportunities to
            explore and learn new skills.
          </p>
        </div>
      </section>

      {/* studio section  */}
      <section>
        <StudioCards
          img={img1}
          text1={"SPORTS"}
          text2={
            "We believe that sports is vital to build students personality. It helps develop values of sportsmanship, trust and cooperation."
          }
          text3={
            " We include a range of activities like swimming, gymnastics, basketball and adventure challenging activities. It develops their leadership, accountability, team work, social skills."
          }
          isReversed={true}
        />

        <StudioCards
          img={img2}
          text1={"PERFORMING ARTS"}
          text2={
            "We tap into the rich cultural experiences of our students’ creativity and performance through dance, music and drama. Students are given the opportunities to explore and express great themes and ideas and discover their inner self."
          }
          text3={
            "Learner’s are given agency to reflect themselves through different performance arts."
          }
        />
        <StudioCards
          img={img3}
          text1={"VISUAL ARTS "}
          text2={
            "We enrich the young minds with visual arts. We celebrate passion, creativity, knowledge and skills of students."
          }
          text3={
            "The visual arts studio makes it a place to explore, discover, and develop their own creative expressions. It is the place where they connect themselves to the real world through drawings and sketches. "
          }
          isReversed={true}
        />
        <StudioCards
          img={img4}
          text1={"STEM "}
          text2={
            "The science, technology, engineering and mathematics education prepares our students for future generations."
          }
          text3={
            "The hands - on experience and real - world application of their learning help them become able leaders, innovators, risk takers and problem solvers."
          }
        />
        <StudioCards
          img={img5}
          text1={"IPAD "}
          text2={
            "The future of education is the technology. Students use iPads ethically to enhance their research skills. It helps them to collaborate and reflect their learning."
          }
          text3={
            "The versatile teaching and learning apps make the students to embrace the digital age as a foundation of education. They also exhibit integrity in their learning."
          }
          isReversed={true}
        />
        <StudioCards
          img={img6}
          text1={"BOOKS "}
          text2={
            "Our library is an exciting and welcoming place that supplement the learning needs of all students."
          }
          text3={
            "We have a repository of books to help every member of the school community in order to gain new knowledge, skills and dispositions for learning and personal development that they will use throughout their lives. Students are encouraged to go beyond the school curriculum and read the books that they enjoy the most."
          }
        />
      </section>

      {/* FIELD TRIPS */}
      <div>
  <div className="w-[100%] md:w-[95%]">
    <p className="md:pl-24 px-4 py-2 text-primary-maroon text-heading-6">
      FIELD TRIPS
    </p>
    <p className="md:pl-24 px-4 py-2 text-body">
      Field trips provide opportunities for learner’s to understand the real life challenges and it’s solutions. It helps them to reflect their conceptual understandings and broaden their thinking.
    </p>
    <p className="md:pl-24 px-4 py-2 text-body">
      It provides hands-on experiential learning opportunity in a real world context. Field trips develop empathy, tolerance, critical thinking skills and perceiving things in different ways.
    </p>
    <p className="md:pl-24 px-4 py-2 text-body">
      They are able to engage with content in a variety of ways. Each experience solidifies the learning and support important academic concepts.
    </p>
  </div>
</div>

      {/* slider */}
<section className="pt-12">

      <Slide />
</section>

      {/* other topics */}
      <div>
        <p className="text-heading-4 uppercase mx-auto w-[90%] mt-10 text-primary-maroon-1">
          other topics to explore
        </p>
      </div>

      <div className="w-[90%] md:w-[95%] flex flex-col md:flex-row justify-center  mx-auto top-3  md:p-10 gap-5 md:gap-[30px]">
        <TopicCard text={"STUDENT AGENCY"} text1={"STUDENT AGENCY"} />
        <TopicCard text={"WHY US"} text1={"WHY US"} />
      </div>
    </>
  );
}

export default page;

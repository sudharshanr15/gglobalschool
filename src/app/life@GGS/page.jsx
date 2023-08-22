import React from "react";
import TopicCard from "@/component/topicsCard/TopicCard";
import StudioCards from "../../container/life@GGS/StudioCards";
import Slide from "../../container/life@GGS/Slide";
import img1 from "../../assets/life@ggs1.png";
import img2 from "../../assets/life@ggs2.png";
import img3 from "../../assets/life@ggs3.png";
import img4 from "../../assets/life@ggs4.png";
import img5 from "../../assets/life@ggs5.png";
import img6 from "../../assets/life@ggs6.png";
import Hero from "../../component/hero/Hero";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
// md:p-md lg:p-large xl:p-xl 2xl:p-2xl 3xl:p-3xl

function page() {
  const studios = [
    {
      image: img1,
      name: "SPORTS",
      text: [
        "We believe that sports is vital for students’ physical and social well-being.",
        "It helps develop values of sportsmanship, trust and cooperation.",
        "We include a range of activities like swimming, gymnastics, basketball and adventure challenging activities. It develops their leadership, accountability, team work, social skills.",
      ],
    },
    {
      image: img2,
      name: "PERFORMING ARTS",
      text: [
        "We tap into the rich cultural experiences of our students’ creativity and performance through dance, music and drama.",
        "Our agentic students are given opportunities to explore and express their ideas to discover their hidden talents in performing art.",
      ],
    },
    {
      image: img3,
      name: "VISUAL ARTS",
      text: [
        "We enrich the young minds with art and craft. We celebrate passion, creativity, knowledge and skills of students.",
        "The visual arts studio is a place to explore, discover and develop their own creative expressions.",
        "It is the place where they connect themselves to the real world through colours, shapes, patterns using the different art forms.",
      ],
    },
    {
      image: img5,
      name: "Design THINKING & TECHNOLOGY",
      text: [
        "The Science, Technology, Engineering and Mathematics education prepares our students for the future. The hands-on experience and real - world application help them become able leaders, innovators, risk-takers and problem solvers.",
        "Technology is a powerful tool in 21st century education. Students use iPads ethically to enhance their research skills. It helps them to collaborate and reflect their learning. The versatile teaching and learning apps make the students to embrace the digital age as a foundation for a sustainable education. This enables them to understand and follow integrity during their learning process.",
      ],
    },
    {
      image: img6,
      name: "BOOKS",
      text: [
        "Reading makes every person an independent capable learner by cultivating one’s imagination. Our library is an exciting and welcoming place that supplements the learning needs of all students. We have a repository of books to help every member of the school community to gain new knowledge, skills and dispositions.",
      ],
    },
  ];
  return (
    <>
      <Hero title={"LIFE @ GGS"} />
      <section className="relative section-container bg-primary-maroon-1 ">
        <div className="absolute top-0 left-0 z-0">
          <FormatQuoteIcon
            sx={{ fontSize: 150, opacity: 0.2, color: "#F05A22" }}
          />
        </div>
        <p className="text-heading-6 uppercase text-white z-10">
          Teach your child the art of learning through creativity and curiosity.
        </p>
      </section>

      {/* our facility */}
      <section className="section-container">
        <h2 className="text-heading-4 md:text-heading-3 uppercase lg:w-[90%] text-primary-maroon-1 mb-xl">
          OUR FACILITIES
        </h2>
        <p className="text-body">
          Good infrastructure and facilities encourage kids to feel warm and
          welcoming in the school. They also provide various Opportunities to
          explore and learn new skills.
        </p>
      </section>

      {/* studio section  */}
      <section className="">
        {studios.map((item, index) => (
          <StudioCards
            className={`section-container flex flex-col justify-between gap-5 md:gap-28 ${
              index % 2 == 1
                ? "bg-primary-yellow-2 md:flex-row-reverse"
                : "md:flex-row"
            }`}
            img={item.image}
            name={item.name}
            text={item.text}
            key={index}
          />
        ))}
      </section>

      {/* FIELD TRIPS */}
      <section className="section-container">
        <h2 className="text-heading-4 md:text-heading-3 uppercase lg:w-[90%] text-primary-maroon-1 mb-xl">
            FIELD TRIPS
        </h2>
        <p className="py-2 text-body">
          Field trips provide opportunities for learner’s to understand the real
          life challenges and it’s solutions. It helps them to reflect their
          conceptual understandings and broaden their thinking.
        </p>
        <p className="py-2 text-body">
          It provides hands-on experiential learning opportunity in a real world
          context. Field trips develop empathy, tolerance, critical thinking
          skills and perceiving things in different ways.
        </p>
        <p className="py-2 text-body">
          They are able to engage with content in a variety of ways. Each
          experience solidifies the learning and support important academic
          concepts.
        </p>
      </section>

      {/* slider */}
      <section className="pt-12">
        <Slide />
      </section>

      {/* other topics */}
      <section className="section-container">
        <h2 className="text-heading-4 md:text-heading-3 uppercase lg:w-[90%] text-primary-maroon-1 mb-xl">
          OTHER TOPICS TO EXPLORE
        </h2>
        <div className="flex flex-col md:flex-row gap-xl">
          <TopicCard text={"STUDENT COUNCIL"} link={""} />
          <TopicCard text={"STUDENT COUNCIL"} link={""} />
        </div>
      </section>
    </>
  );
}

export default page;

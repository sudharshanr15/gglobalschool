import Image from "next/image";
import contentimage from "../../assets/workwithus.png";
import benefitImage from "@/assets/student council benefits.png";

const Content = () => {
  return (
    <section className="section-container w-full">
      <div className="">
        <Image
          className="w-full"
          src={contentimage}
          unoptimized
          alt="why us image"
        />
      </div>
      <div className="flex flex-col gap-xl text-subheading-regular mt-3xl">
        <p>
          At GGS, we seek persons who have the love for learning, willing to
          explore and be a part of the dynamic and vibrant team.
        </p>
        <p>
          Our teaching faculty begin their journey at GGS with an Induction
          Programme. Also our teaching team continue to be engaged in
          professional learning programmes through facilitator-led and
          self-directed sessions, workshops and training programmes.
        </p>
        <p>
          This provides an opportunity for all our faculty members to explore
          the various teaching methodologies and pedagogical practices, which
          enhances their teaching skills in classrooms resulting in effective
          learning experiences for our learners.
        </p>
        <p>
          Our collaborative work environment encourages and ensures a lot of
          interaction and peer learning amidst the faculty. Each day teachers
          across the school collaborate to develop and design curriculum based
          on students' need. Sharing ideas, a supportive network, and positive
          environment are some of the benefits of G Global School culture.
        </p>
        <p>
          To apply, please click the below box and submit the duly filled form.
        </p>
        <button className="bg-primary-yellow hover:bg-primary-maroon hover:text-gray-100 font-bold py-md px-xl rounded-full w-fit">APPLY NOW</button>
      </div>
    </section>
  );
};

export default Content;

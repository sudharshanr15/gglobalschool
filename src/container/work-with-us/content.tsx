import Image from "next/image";
import {group2} from "@/assets/images/work-with-us";
import Link from 'next/link'

const Content = () => {
  return (
    <section className="section-container w-full">
      <div className="">
        <Image
          className="w-full"
          src={group2}
          unoptimized
          alt="work with us"
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
        <Link href="https://forms.gle/mni9KFx53Gks7bBu8" className="btn-slide text-center">APPLY NOW</Link>
      </div>
    </section>
  );
};

export default Content;

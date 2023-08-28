import React from "react";

import { Head } from "../../container/policies";
import Description from "../../container/policies/Description";
import PoliciesFlex from "../../container/policies/PoliciesFlex"
import OtherTopics from "../../container/policies/OtherTopics"

import Enquire from "../../component/Enquire/Enquire"
import Hero from "../../component/hero/Hero"
import ExploreTopics from "@/component/ExploreTopics";

function page() {

  const Headings = ["Admission Policy","Language Policy", "Assessment Policy","Inclusive Education Policy","Library and resource centre policy " ,"Academic Integrity Policy"]
  const Links = ["link1","link2","link4","link5","link6","link7"]

  return (
    <>
      <Hero title={"Policies"}/>
      <Head />
      <Description />
      <section className="section-container">
        <h2 className="text-heading-4 md:text-heading-3 uppercase lg:w-[90%] text-primary-maroon-1 mb-xl">
          list of policies
        </h2>
        <p className="text-body mb-xl">
          Every year, these policies will be reviewed along with the members of
          the school community to enhance for betterment.
        </p>
        <PoliciesFlex headings={Headings} links={Links} />

      </section>
      <ExploreTopics />
      <Enquire />
    </>
  );
}

export default page;

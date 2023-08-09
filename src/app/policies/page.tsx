import React from "react";

import { Head } from "../../container/policies";
import Description from "../../container/policies/Description";
import PoliciesFlex from "../../container/policies/PoliciesFlex"
import OtherTopics from "../../container/policies/OtherTopics"

function page() {

  const Headings = ["Admission Policy","Language Policy","Virtual Learning Policy","Assessment Policy","Inclusive Education Policy","Library and resource centre policy " ,"Academic Integrity Policy"]
  const Links = ["link1","link2","link3","link4","link5","link6","link7"]

  return (
    <>
      <Head />
      <Description />
      <section className="p-5 md:px-16 lg:px-16 section-container">
        <h1 className="text-heading-3 text-primary-maroon">LIST OF POLICIES</h1>
        <p className="text-body py-4">
          Every year, these policies will be reviewed along with the members of
          the school community to enhance for betterment.
        </p>
        <PoliciesFlex headings={Headings} links={Links} />

      </section>
      <OtherTopics />
    </>
  );
}

export default page;

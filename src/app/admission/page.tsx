import { Enquiry, Quotebox, Faq, Admissionpolicy } from "@/container/Admission";
import { Others } from "@/container/work-with-us";
import Hero from "../../component/hero/Hero";
import ExploreTopics from "@/component/ExploreTopics";

const Admission = () => {
    return (
        <div>
            <Hero title={"Admissions"} />
            <Quotebox />
            <Enquiry />
            <Admissionpolicy />
            <Faq />
            <ExploreTopics />
        </div>
    );
};

export default Admission;

import {Enquiry,Quotebox,Faq,Admissionpolicy} from "@/container/Admission"
import {Others} from "@/container/workwithus"
import Hero from "../../component/hero/Hero";

const Admission = () => {
  return (
    <div>
      <Hero title={"Admissions"} />
      <Quotebox/>
      <Enquiry/>
      <Admissionpolicy/>
      <Faq/>
      <Others/>
    </div>
  )
}

export default Admission
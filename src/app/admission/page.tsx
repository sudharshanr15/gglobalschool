import {Enquiry,Quotebox,Faq,Admissionpolicy} from "@/container/Admission"
import {Others} from "@/container/workwithus"

const Admission = () => {
  return (
    <div>
      <Quotebox/>
      <Enquiry/>
      <Admissionpolicy/>
      <Faq/>
      <Others/>
    </div>
  )
}

export default Admission

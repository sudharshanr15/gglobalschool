import Agency from "@/container/StudentAgency/Agency"
import Cards from "@/container/StudentAgency/Cards"
import Description from "@/container/StudentAgency/Description"
import Others from "@/container/StudentAgency/Others"
import Hero from "../../component/hero/Hero"


const StudentAgency = () => {
  return (
    <>
      <Hero title={"Student Agency"} />
      <Description />
      <Agency />
      <Cards />
      <Others />
    </>
  )
}

export default StudentAgency
import Agency from "@/container/student-agency/Agency"
import Cards from "@/container/student-agency/Cards"
import Description from "@/container/student-agency/Description"
import Others from "@/container/student-agency/Others"
import Hero from "../../component/hero/Hero"
import { ExploreTopics } from "@/component"


const StudentAgency = () => {
  return (
    <>
      <Hero title={"Student Agency"} />
      <Description />
      <Agency />
      <Cards />
      <ExploreTopics />
    </>
  )
}

export default StudentAgency
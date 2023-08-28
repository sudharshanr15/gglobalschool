import {DescriptionBox,Council,Teamcard,Content,Benefits, Others} from  "@/container/student-council"
import Hero from "../../component/hero/Hero"
import { ExploreTopics } from "@/component"

const StudentCouncil = () => {
  return (
    <div>
      <Hero title={"Student Leadership"}/>
      <DescriptionBox/>
      <Council/>
      <Teamcard/>
      <Content/>
      <Benefits/>
      <ExploreTopics />
    </div>
  )
}

export default StudentCouncil

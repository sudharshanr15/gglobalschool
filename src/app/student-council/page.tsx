import {DescriptionBox,Council,Teamcard,Content,Benefits, Others} from  "@/container/student-council"
import Hero from "../../component/hero/Hero"

const StudentCouncil = () => {
  return (
    <div>
      <Hero title={"Student Leadership"}/>
      <DescriptionBox/>
      <Council/>
      <Teamcard/>
      <Content/>
      <Benefits/>
      <Others/>
    </div>
  )
}

export default StudentCouncil
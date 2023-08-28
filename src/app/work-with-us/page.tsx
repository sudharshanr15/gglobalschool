import { DescriptionBox,Content, Others } from "@/container/work-with-us"
import Hero from "../../component/hero/Hero"
import { ExploreTopics } from "@/component"

const Works = () => {
  return (
    <div>
      <Hero title={"Work with us"}/>
      <DescriptionBox/>
      <Content/>
      <ExploreTopics />
    </div>
  )
}

export default Works

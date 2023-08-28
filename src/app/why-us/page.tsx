import {Cards, Description,Others} from "@/container/why-us"
import Hero from "../../component/hero/Hero"
import { ExploreTopics } from "@/component"

const Whyus = () => {
  return (
    <div>
      <Hero title={"WHY US"}/>
      <Description/>
      <Cards/>
      <ExploreTopics />
    </div>
  )
}

export default Whyus

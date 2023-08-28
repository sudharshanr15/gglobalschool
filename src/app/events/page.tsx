import {Description, Listofevents, Slideshow} from "@/container/events"
import {Others} from "@/container/work-with-us"
import Hero from "../../component/hero/Hero";
import ExploreTopics from "@/component/ExploreTopics";

const Page = () => {
  return (
    <div>
        <Hero title={"days and events"} />
        <Description/>
        <Listofevents/>
        <Slideshow/>
        <ExploreTopics />
    </div>
  )
}

export default Page

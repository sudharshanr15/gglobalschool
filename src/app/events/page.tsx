import {Description, Listofevents, Slideshow} from "@/container/events"
import {Others} from "@/container/work-with-us"
import Hero from "../../component/hero/Hero";

const Page = () => {
  return (
    <div>
        <Hero title={"days and events"} />
        <Description/>
        <Listofevents/>
        <Slideshow/>
        <Others/>
    </div>
  )
}

export default Page

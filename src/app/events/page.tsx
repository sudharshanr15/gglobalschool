import {Description, Listofevents} from "@/container/events"
import Hero from "../../component/hero/Hero";

const Page = () => {
  return (
    <div>
        <Hero title={"days and events"} />
        <Description/>
        <Listofevents/>
    </div>
  )
}

export default Page

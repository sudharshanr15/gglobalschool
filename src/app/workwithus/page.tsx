import { DescriptionBox,Content, Others } from "@/container/workwithus"
import Hero from "../../component/hero/Hero"

const Works = () => {
  return (
    <div>
      <Hero title={"Work with us"}/>
      <DescriptionBox/>
      <Content/>
      <button className="bg-primary-yellow hover:bg-primary-maroon hover:text-gray-100 font-bold mx-md md:mx-xl lg:mx-3xl py-md px-xl rounded-full">APPLY NOW</button>
      <Others/>
    </div>
  )
}

export default Works

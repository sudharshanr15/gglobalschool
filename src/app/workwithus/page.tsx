import { DescriptionBox,Content, Others } from "@/container/workwithus"

const Works = () => {
  return (
    <div>
      <DescriptionBox/>
      <Content/>
      <button className="bg-primary-yellow hover:bg-primary-maroon hover:text-gray-100 font-bold mx-5 md:mx-10 lg:mx-20 py-4 px-10 rounded-full">APPLY NOW</button>
      <Others/>
    </div>
  )
}

export default Works
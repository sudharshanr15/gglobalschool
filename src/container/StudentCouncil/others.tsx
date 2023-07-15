import Image from "next/image"
import rectangle from '@/assets/Rectangle 70.png'

const Others = () => {
  return (
    <div>
        <h2 className="text-heading-4 ml-5 md:ml-10 lg:ml-20 text-primary-maroon">OTHEER TOPICS TO EXPLORE</h2>
        <div className="lg:flex md:flex justify-between my-10">
            <div className="my-5 ml-5 md:ml-10 lg:ml-20 mr-5 md:w-1/2 lg:w-1/2">
                <div className="overflow-hidden"><Image src={rectangle} className="scale-125 translate-y-15 translate-x-10" alt="empty rectangle"/></div>
                <div className="text-heading-6 text-gray-100 text-center bg-primary-maroon p-5 md:p-10 lg:p-10">AWAKENING<br/>CREATIVITY</div>
            </div>
            <div className="my-5 ml-5 md:ml-10 lg:ml-20 mr-5 md:w-1/2 lg:w-1/2">
                <div className="overflow-hidden"><Image src={rectangle} className="scale-125 translate-y-15 translate-x-10" alt="empty rectangle"/></div>
                <div className="text-heading-6 text-gray-100 text-center bg-primary-maroon p-5 md:p-10 lg:p-10">STUDENT<br/>COUNCIL</div>
            </div>
        </div>
    </div>
  )
}

export default Others

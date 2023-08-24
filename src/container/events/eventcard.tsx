import Image from "next/image"

const Eventcard = ({title,setgallery}) => {
  return (
    <div className="w-full h-fit bg-gray-100">
        <div className="relative h-40">
        <Image src={'/eventsimg/'+title+'.png'} className="w-full h-full" width={200} height={200} alt={title}/>
        <div className="absolute flex flex-col justify-center items-center bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden opacity-0 transition duration-700 ease-in-out hover:opacity-100 text-center">
                    <div className="relative w-full h-full">
                    <Image src={'/eventsimg/DEAR WEEK.png'} className="z-1 absolute brightness-50 w-full h-full" width={200} height={200} alt={title}/>
                    <div className="absolute  inset-0 flex items-center justify-center">
                    <button onClick={()=>setgallery(true)} className=" w-fit h-fit bg-primary-yellow-1 z-2 hover:bg-white rounded-full text-xl font-bold lg:text-heading-6 py-4 px-md lg:px-large">
                      View Gallery
                    </button>
                    </div>
                    </div>
                    
          </div>
        </div>
        <p className="p-md font-bold">{title}</p>
    </div>
  )
}

export default Eventcard

import Image from "next/image"

const Eventcard = ({title}) => {
  return (
    <div className="w-fit bg-gray-100">
        <Image src={'/eventsimg/'+title+'.png'} width={300} height={100} alt={title}/>
        <p className="p-md font-bold">{title}</p>
    </div>
  )
}

export default Eventcard

import Eventcard from './eventcard'

const Listofevents = () => {

  const events=[
    "Fathers Day","International yoga day","International mud day","National doctors day","World chocolate day","Investiture ceremony","International friendship day and twins day","Independence Day",
    "Krishna Jayanthi and photography day","Vinayak Chaturthi","Teachers day and Onam","International literacy day","Grand parents day","Dot day","GGS Book fair","Navarathri begins","Vijayadashami","Sports day","Diwali","Halloween day",
    "GGS Art competition","Children’s day","World heritage week","Thanks giving day","Math expo","Christmas and new year celebration",
    "Pongal celebration","Republic Day","4th GGS kiddathon","DEAR WEEK","International mother language day","GGS SANGAMAM","International women’s day","Art exhibition","Annual day  graduation","PYP Exhibition"
  ]
  const content=events.map(val=>{
    return <Eventcard title={val}/>
  })

  return (
    <section className="section-container">
      <p className="text-heading-4 text-primary-maroon mb-large">LIST OF DAYS & EVENTS -2023</p>
      <div className='lg:my-xl grid gap-md lg:gap-2xl grid-cols-2 lg:grid-cols-4'>
      {content}
      </div>
    </section>
  )
}

export default Listofevents

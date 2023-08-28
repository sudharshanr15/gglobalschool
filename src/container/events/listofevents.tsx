"use client";
import Eventcard from './eventcard'
import {useState, useEffect} from 'react'
import Slide from "./slide";
import Image from "next/image";
import close from "../../assets/close.png"
import * as annual_day from "@/assets/images/gallery/annual-day"
import * as art_competiton from "@/assets/images/gallery/art-competition"

const Listofevents = () => {
  const gallery_images = {
    "Annual Day": [...Object.values(annual_day)],
    "Art Competition": [...Object.values(art_competiton)]
  }

  useEffect(() => {
    console.log(gallery_images['Annual Day'][1])
  }, [])
  const [gallery, setGallery] = useState(false);
  const events=[
    "Fathers Day","International yoga day","International mud day","National doctors day","World chocolate day","Investiture ceremony","International friendship day and twins day","Independence Day",
    "Krishna Jayanthi and photography day","Vinayak Chaturthi","Teachers day and Onam","International literacy day","Grand parents day","Dot day","GGS Book fair","Navarathri begins","Vijayadashami","Sports day","Diwali","Halloween day",
    "GGS Art competition","Children’s day","World heritage week","Thanks giving day","Math expo","Christmas and new year celebration",
    "Pongal celebration","Republic Day","4th GGS kiddathon","DEAR WEEK","International mother language day","GGS SANGAMAM","International women’s day","Art exhibition","Annual day  graduation","PYP Exhibition"
  ]

  return (
    <section className="section-container">
      <p className="text-heading-4 text-primary-maroon mb-large">LIST OF DAYS & EVENTS -2023</p>
      <div className='lg:my-xl grid gap-md lg:gap-2xl grid-cols-2 lg:grid-cols-4'>
      {Object.keys(gallery_images).map((val, index)=>{
        return <Eventcard title={val} setgallery={setGallery} key={index} image={gallery_images[val][0]} />
      })}
      </div>
      {gallery &&<Slide gallery_name={gallery} gallery_images={gallery_images[gallery]} setgallery={setGallery}/>}
    </section>
  )
}

export default Listofevents

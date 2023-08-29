"use client";
import Eventcard from './eventcard'
import {useState, useEffect} from 'react'
import Slide from "./slide";
import Image from "next/image";
import close from "../../assets/close.png"
import * as annual_day from "@/assets/images/gallery/annual-day"
import * as art_competiton from "@/assets/images/gallery/art-competition"
import * as art_expo from "@/assets/images/gallery/art-expo"
import * as doctors_day from "@/assets/images/gallery/doctors-day"
import * as independence_day from "@/assets/images/gallery/independence-day"
import * as investiture_ceremony from "@/assets/images/gallery/investiture-ceremony"
import * as math_expo from "@/assets/images/gallery/math-expo"
import * as navaratri from "@/assets/images/gallery/navaratri"
import * as parents_teachers_meeting from "@/assets/images/gallery/parents-teachers-meeting"
import * as pongal from "@/assets/images/gallery/pongal"
import * as republic_day from "@/assets/images/gallery/republic-day"
import * as sports_day from "@/assets/images/gallery/sports-day"
import * as yoga_day from "@/assets/images/gallery/yoga-day"

const Listofevents = () => {
  const gallery_images = {
    "Annual Day": [...Object.values(annual_day)],
    "Art Competition": [...Object.values(art_competiton)],
    "Art Expo": [...Object.values(art_expo)],
    "Doctors Day": [...Object.values(doctors_day)],
    "Independence Day": [...Object.values(independence_day)],
    "Investiture Ceremony": [...Object.values(investiture_ceremony)],
    "Math Expo": [...Object.values(math_expo)],
    "Navaratri": [...Object.values(navaratri)],
    "Parents Teachers Meeting": [...Object.values(parents_teachers_meeting)],
    "Pongal": [...Object.values(pongal)],
    "Republic Day": [...Object.values(republic_day)],
    "Sports Day": [...Object.values(sports_day)],
    "Yoga Day": [...Object.values(yoga_day)],
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

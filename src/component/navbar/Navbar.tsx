"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

import { gglobal_logo, icon_close } from "@/assets/index"

import styles from "./styles.module.css"

import { gsap } from "gsap"

function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMenuHover, setIsMenuHover] = useState(false)

    useEffect(() => {
        let t1 = gsap.timeline()
        t1.to(".menu-links", {
            opacity: 1
        })
        t1.fromTo(".menu-links", {
            xPercent: 200,
        }, {
            xPercent: 0,
            duration: 0.75,
            ease: "power4.out"
        }, "<")
    }, [isMenuOpen])

    function onMenuClick(){
        if(isMenuOpen){
            let t1 = gsap.timeline()
            t1.fromTo(".menu-links", {
                xPercent: 0,
            }, {
                xPercent: 200,
                duration: 0.75
            })
            t1.to(".menu-links", {
                opacity: 0
            })
            setTimeout(()=>{
                setIsMenuOpen((e) => (
                    !e
                ))
            }, 500)
        }else{
            setIsMenuOpen((e) => (
                !e
            ))
        }
    }

    function onMenuHover(){
        setIsMenuHover((e) => (
            !e
        ))
    }

    return (
        <nav className="bg-transparent absolute top-0 left-0 w-full z-50">
            <div className="ps-2 pt-7 md:ps-8 md:py-6 flex flex-row items-center">
                <div className="flex-1">
                    <div className="inline-block px-5 pt-1 pb-3 md:px-7 md:pb-4 md:pt-2 bg-white rounded-3xl">
                        <Image className="max-w-[8.5rem] md:max-w-[12rem]" src={gglobal_logo} unoptimized alt="Gglobal School Logo" />
                    </div>
                </div>
                <div className="inline-flex gap-x-16 items-center">
                    <Link href="" className="text-subheading-regular text-white hidden md:block">Admissions</Link>
                    <button className={`flex flex-row items-center bg-primary-yellow-1 hover:bg-primary-maroon-1 hover:text-white text-gray-900 px-5 py-3 md:px-7 md:py-6 rounded-l-full ${isMenuHover ? styles.open : ''}`}
                        onClick={onMenuClick}
                        onMouseEnter={onMenuHover}
                        onMouseLeave={onMenuHover}
                    >
                        <div className={`w-[1.76rem] md:w-[4rem] ${styles.menu_icon} gap-y-1 md:gap-y-2`}>
                            <span className={`border-[0.18rem] md:border-spacing-1 ${styles.line} ${styles.line_1}`}></span>
                            <span className={`border-[0.18rem] md:border-spacing-1 ${styles.line} ${styles.line_2}`}></span>
                            <span className={`border-[0.18rem] md:border-spacing-1 ${styles.line} ${styles.line_3}`}></span>
                        </div>
                        <h6 className="text-heading-6">Menu</h6>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="w-full bg-primary-maroon-1 absolute top-0 left-0 p-10 menu-links z-[100]">
                    <div className="flex flex-row justify-between items-center">
                        <div className="inline-block px-7 pb-4 pt-2 bg-white rounded-3xl">
                            <Image className="max-w-[12rem]" src={gglobal_logo} unoptimized alt="Gglobal School Logo" />
                        </div>
                        <button className="inline-flex items-center justify-center bg-primary-orange-1 w-20 aspect-square rounded-full"
                            onClick={onMenuClick}
                        >
                            <Image src={icon_close} unoptimized alt="Close Icon" />
                        </button>
                    </div>
                    <div className="mt-10">
                        <ul className="list-none">
                            <li className="text-heading-6 text-white mb-8">
                                <Link href="">G Global Universe</Link>
                            </li>
                            <li className="text-heading-6 text-white mb-8">
                                <Link href="">Curriculum</Link>
                            </li>
                            <li className="text-heading-6 text-white mb-8">
                                <Link href="">Community Wellness</Link>
                            </li>
                            <li className="text-heading-6 text-white mb-8">
                                <Link href="">Discovery Outside the wall</Link>
                            </li>
                            <li className="text-heading-6 text-white mb-8">
                                <Link href="">Days & Events</Link>
                            </li>
                            <li className="text-heading-6 text-white mb-8">
                                <Link href="">Become one of us</Link>
                            </li>
                        </ul>
                        <button className="mt-8 px-11 py-5 rounded-full bg-primary-yellow-1 text-heading-6 text-gray-900">Contact us</button>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar

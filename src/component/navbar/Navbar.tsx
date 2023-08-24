"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import WestIcon from '@mui/icons-material/West';
import { gglobal_logo, icon_close } from "@/assets/index"

import styles from "./styles.module.css"

import { gsap } from "gsap"

type NavbarLinkType = {
    [k: string]: {
        name: string,
        href: string,
        sub_menu: {
            name: string,
            href: string
        }[]
    }
}

function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
    const [isMenuHover, setIsMenuHover] = useState(false)
    const [activeSubmenu, setActiveSubmenu] = useState("")

    const links: NavbarLinkType = {
        "Our G Global Universe": {
            name: "Our G Global Universe",
            href: "",
            sub_menu: [
                {
                    name: "GGS Story",
                    href: "/our-story",
                },
                {
                    name: "Mission & Values",
                    href: "/mission",
                },
                {
                    name: "Why Us",
                    href: "/why-us",
                },
                {
                    name: "Student Agency",
                    href: "/student-agency",
                },
                {
                    name: "Pillars by which we abide",
                    href: "/policies",
                }
            ]
        },
        "Life @ GGS": {
            name: "Life @ GGS",
            href: "",
            sub_menu: [
                {
                    name: "Studios @ GGS",
                    href: "/life-at-ggs",
                },
                {
                    name: "Student Leadership",
                    href: "/student-council",
                },
                {
                    name: "Health & Well being",
                    href: "/awakening-creativity"
                }
            ]
        },
        "Curriculum & Learning": {
            name: "Curriculum & Learning",
            href: "",
            sub_menu: [
                {
                    name: "Curriculam",
                    href: "/eyp",
                },
                {
                    name: "Emotional & Ethical Support",
                    href: "/emotional",
                },
            ]
        },
        "Community Wellness": {
            name: "Community Wellness",
            href: "/community",
            sub_menu: [],
        },
        "Discovery outside the wall": {
            name: "Discovery outside the wall",
            href: "",
            sub_menu: [],
        },
        "Days & Events": {
            name: "Days & Events",
            href: "",
            sub_menu: [],
        },
        "Become one of us": {
            name: "Become one of us",
            href: "",
            sub_menu: [
                {
                    name: "Admissions",
                    href: "",
                },
                {
                    name: "Work with Us",
                    href: "/work-with-us"
                }
            ]
        }
    }

    useEffect(() => {
        if(isMenuOpen && document.querySelector("body")?.style.overflow != "hidden"){
            document.querySelector("body")!.style.overflow = "hidden"
        }else{
            document.querySelector("body")!.style.overflow = "auto"
        }
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
            onSubMenuClose()
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

    function onNavLinkClick(e: any){
        e.preventDefault()
        setActiveSubmenu(e.target.dataset.name)
        setIsSubMenuOpen(true)
    }

    function onSubMenuClose(){
        setActiveSubmenu("")
        setIsSubMenuOpen(false)
    }

    function onLink(){
        onMenuClick()
    }

    return (
        <nav className="bg-transparent absolute top-0 left-0 w-full z-50 h-[100px]">
            <div className="ps-md pt-7 pd:ps-3xl pd:my-6 flex flex-row items-center">
                <div className="flex-1 h-full">
                    <div className="h-full max-w-[18rem]">
                        <Link href="/">
                            <Image className="object-contain" src={gglobal_logo} unoptimized alt="Gglobal School Logo" />
                        </Link>
                    </div>
                </div>
                <div className="inline-flex gap-x-16 items-center">
                    <Link href="" className="text-subheading text-white hidden md:block">Admissions</Link>
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
                        <h6 className="text-heading-6 hidden md:block">Menu</h6>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="w-full bg-primary-maroon-1 fixed h-full overflow-auto top-0 left-0 menu-links z-[100]">
                    <div className="relative h-full">
                        <div className="p-5 flex flex-row justify-between items-center">
                            <div className="inline-block px-7 pb-4 pt-2 bg-white rounded-3xl">
                                <Image className="max-w-[10rem]" src={gglobal_logo} unoptimized alt="Gglobal School Logo" />
                            </div>
                            <button className="inline-flex items-center justify-center bg-primary-orange-1 w-14 aspect-square rounded-full"
                                onClick={onMenuClick}
                            >
                                <Image src={icon_close} unoptimized alt="Close Icon" />
                            </button>
                        </div>
                        <div className="p-5">
                            <ul className="list-none flex flex-col items-start">
                               {
                                    Object.values(links).map((item, index) => (
                                        <li className="text-subheading md:text-heading-6 text-white mb-2" key={index}>
                                            {
                                                (item.sub_menu.length > 0) ? (<button className="p-md hover:bg-primary-orange-1 inline-block rounded-lg" data-name={item.name} onClick={onNavLinkClick}>{item.name}</button>) : (<Link className="p-md hover:bg-primary-orange-1 inline-block rounded-lg" href={item.href || ""} onClick={onLink}>{item.name}</Link>)
                                            }
                                        </li>
                                    ))
                                }
                            </ul>
                            <button className="mt-8 px-11 py-5 rounded-full bg-primary-yellow-1 text-subheading md:text-heading-6 text-gray-900">Contact us</button>
                        </div>
                        {isSubMenuOpen && (
                            <div className="absolute flex justify-center p-5 top-0 w-full h-full bg-gray-900 bg-opacity-40">
                                <div className="justify-center items-center bg-primary-orange-1 p-xl nav-submenu">
                                    <button onClick={onSubMenuClose} className="uppercase text-heading-6 md:text-heading-5 text-white mb-8 block">
                                        <div className="animate-slide-in inline-block">
                                            <WestIcon fontSize="large" className="me-4" />
                                        </div>
                                        BACK
                                    </button>
                                    <ul className="list-none">
                                        {links[activeSubmenu].sub_menu.map((item, index) => (
                                            <li className="text-subheading md:text-heading-6 text-white mb-8" key={index}>
                                                <Link href={item.href} onClick={onLink}>G {item.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar

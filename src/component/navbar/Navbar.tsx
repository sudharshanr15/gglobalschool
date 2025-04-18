"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import WestIcon from '@mui/icons-material/West';
import {icon_close } from "@/assets/index"
import gglobal_logo from "@/assets/logo/gglogo.svg";
import ibLogo from '@/assets/logo/ib-logo.png'

import styles from "./styles.module.css"

import { gsap } from "gsap"
import EnquireLink from "../Enquire/EnquireLink";

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
        "Curriculum & Learning": {
            name: "Curriculum & Learning",
            href: "",
            sub_menu: [
                {
                    name: "Primary years programme",
                    href: "/eyp",
                },
                {
                    name: "Emotional & Ethical Support",
                    href: "/emotional",
                },
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
        "Discovery outside the wall": {
            name: "Discovery outside the wall",
            href: "/discovery",
            sub_menu: [],
        },
        "Community Wellness": {
            name: "Community Wellness",
            href: "/community",
            sub_menu: [],
        },
        "Days & Events": {
            name: "Days & Events",
            href: "/events",
            sub_menu: [],
        },
        "Become one of us": {
            name: "Become one of us",
            href: "",
            sub_menu: [
                {
                    name: "Admissions",
                    href: "/admission",
                },
                {
                    name: "Work with Us",
                    href: "/work-with-us"
                }
            ]
        },
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
        <>
            <nav className="bg-transparent absolute top-0 left-0 w-full z-50 h-[100px]">
                <div className="ps-md mt-3 lg:ps-3xl pd:my-6 flex flex-row items-center gap-2xl">
                    <div className="flex-1 h-full">
                        <div className="h-18 lg:h-36 overflow-hidden">
                            <div className="h-full flex items-center gap-2 lg:gap-4">
                                <div className="h-full">
                                    <Link href="/" >
                                        <Image className="h-full object-contain" src={gglobal_logo} unoptimized alt="G Global School Logo" />
                                    </Link>
                                </div>
                                <div className="h-20 lg:h-3/6">
                                    <Image className="h-full object-contain w-full" src={ibLogo} alt='IB Logo'></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="inline-flex gap-x-16 items-center">
                       {/* below comment code for open admission form ui section */}
                        <Link href='https://forms.gle/sTdV1tgyNgaFExiP8' target="__blank" className="text-subheading text-white hidden md:block">Admissions</Link>
                        {/* <button className="text-subheading text-white hidden md:block" onClick={() => setFormOpen(true)}>Admissions</button> */}
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
                                <a href="/" className="inline-block">
                                    <Image className="max-w-[13rem]" src={gglobal_logo} unoptimized alt="G Global School Logo" />
                                </a>
                                <div className="flex gap-xl items-center">
                                    <button className="btn-slide hidden md:inline-block text-subheading ">
                                        <EnquireLink>Contact us</EnquireLink>
                                    </button>
                                    <button className="flex items-center justify-center bg-primary-orange-1 w-14 h-14 aspect-square rounded-full"
                                        onClick={onMenuClick}
                                    >
                                        <Image src={icon_close} className="w-[1.5rem] h-auto" unoptimized alt="Close Icon" />
                                    </button>
                                </div>
                            </div>
                            <div className="p-5">
                                <ul className="list-none flex flex-col items-start">
                                {
                                        Object.values(links).map((item, index) => (
                                            <li className="text-subheading md:text-heading-6 text-white mb-2 hover:bg-primary-orange-1 transition-colors rounded-lg" key={index}>
                                                {
                                                    (item.sub_menu.length > 0) ? (<button className="p-md" data-name={item.name} onClick={onNavLinkClick}>{item.name}</button>) : (<Link className="p-md inline-block" href={item.href || ""} onClick={onLink}>{item.name}</Link>)
                                                }
                                            </li>
                                        ))
                                    }
                                </ul>
                                <button className="btn-slide mt-4 md:hidden text-subheading">
                                    <EnquireLink>Contact us</EnquireLink>
                                </button>
                            </div>
                            {isSubMenuOpen && (
                                <div className="absolute flex justify-center p-5 top-0 w-full h-full bg-gray-900 bg-opacity-40 z-50">
                                    <div className="justify-center items-center bg-primary-orange-1 p-large md:p-xl nav-submenu md:min-w-[32rem]">
                                        <button onClick={onSubMenuClose} className="uppercase text-heading-6 md:text-heading-5 text-white mb-8 block">
                                            <div className="animate-slide-in inline-block">
                                                <WestIcon fontSize="large" className="me-4" />
                                            </div>
                                            BACK
                                        </button>
                                        <ul className="list-none">
                                            {links[activeSubmenu].sub_menu.map((item, index) => (
                                                <li className="text-subheading md:text-heading-6 text-white mb-2 px-4 py-2 hover:bg-primary-yellow-1 hover:text-black w-fit rounded-lg transition-colors" key={index}>
                                                    <Link href={item.href} onClick={onLink}>{item.name}</Link>
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
        </>
    )
}

export default Navbar

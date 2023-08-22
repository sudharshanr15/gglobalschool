"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import WestIcon from '@mui/icons-material/West';
import { gglobal_logo, icon_close } from "@/assets/index"

import styles from "./styles.module.css"

import { gsap } from "gsap"

function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
    const [isMenuHover, setIsMenuHover] = useState(false)
    const [activeSubmenu, setActiveSubmenu] = useState("")

    const links = {
        "Our G Global Universe": {
            name: "Our G Global Universe",
            href: false,
            sub_menu: [
                {
                    name: "GGS Story",
                    href: "",
                },
                {
                    name: "Mission & Values",
                    href: "",
                },
                {
                    name: "Why Us",
                    href: "",
                },
                {
                    name: "Student Agency",
                    href: "",
                },
                {
                    name: "Pillars by which we abide",
                    href: "",
                }
            ]
        },
        "Life @ GGS": {
            name: "Life @ GGS",
            href: false,
            sub_menu: [
                {
                    name: "Studios @ GGS",
                    href: "",
                },
                {
                    name: "Student Leadership",
                    href: "",
                },
                {
                    name: "Health & Well being",
                    href: ""
                }
            ]
        },
        "Curriculum & Learning": {
            name: "Curriculum & Learning",
            href: false,
            sub_menu: [
                {
                    name: "Curriculam",
                    href: "",
                },
                {
                    name: "Emotional & Ethical Support",
                    href: "",
                },
            ]
        },
        "Community Wellness": {
            name: "Community Wellness",
            href: "",
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
            href: false,
            sub_menu: [
                {
                    name: "Admissions",
                    href: "",
                },
                {
                    name: "Work with Us",
                    href: ""
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

    function onNavLinkClick(e){
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
                <div className="w-full bg-primary-maroon-1 fixed h-full overflow-auto top-0 left-0 menu-links z-[100]">
                    <div className="relative">
                        <div className="p-10 flex flex-row justify-between items-center">
                            <div className="inline-block px-7 pb-4 pt-2 bg-white rounded-3xl">
                                <Image className="max-w-[12rem]" src={gglobal_logo} unoptimized alt="Gglobal School Logo" />
                            </div>
                            <button className="inline-flex items-center justify-center bg-primary-orange-1 w-20 aspect-square rounded-full"
                                onClick={onMenuClick}
                            >
                                <Image src={icon_close} unoptimized alt="Close Icon" />
                            </button>
                        </div>
                        <div className="p-10">
                            <ul className="list-none flex flex-col items-start">
                               {
                                    Object.values(links).map((item, index) => (
                                        <li className="text-heading-6 text-white mb-4" key={index}>
                                            {
                                                (item.sub_menu.length > 0) ? (<button className="p-md hover:bg-primary-orange-1 inline-block rounded-lg" data-name={item.name} onClick={onNavLinkClick}>{item.name}</button>) : (<Link className="p-md hover:bg-primary-orange-1 inline-block rounded-lg" href={item.href || ""} onClick={onLink}>{item.name}</Link>)
                                            }
                                        </li>
                                    ))
                                }
                            </ul>
                            <button className="mt-8 px-11 py-5 rounded-full bg-primary-yellow-1 text-heading-6 text-gray-900">Contact us</button>
                        </div>
                        {isSubMenuOpen && (
                            <div className="absolute flex justify-center items-center p-10 top-0 w-full h-full bg-gray-900 bg-opacity-40">
                                <div className="justify-center items-center bg-primary-orange-1 p-xl nav-submenu">
                                    <button onClick={onSubMenuClose} className="uppercase text-heading-5 text-white mb-8 block">
                                        <WestIcon fontSize="large" className="me-4" />
                                        BACK
                                    </button>
                                    <ul className="list-none">
                                        {links[activeSubmenu].sub_menu.map((item, index) => (
                                            <li className="text-heading-6 text-white mb-8" key={index}>
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

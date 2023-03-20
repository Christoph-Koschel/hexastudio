import Image from "next/image";
import React, {useState, useEffect} from "react";
import Link from "next/link";
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from "react-icons/ai";
import {FaGithub} from "react-icons/fa";
import {BsFillPersonFill} from "react-icons/bs"
import {useRouter} from "next/router";
import {links, load} from "@/components/cross/loader";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBG, setNavBG] = useState("#ECF0F3");
    const [linkColor, setLinkColor] = useState("#1F2937");

    const router = useRouter();

    useEffect(() => {
        if (router.pathname == "/" || router.pathname == "/timeline") {
            setNavBG("#ECF0F3");
            setLinkColor("#1F2937");
        } else {
            setNavBG("transparent");
            setLinkColor("#ECF0F3");
        }
    }, [router])

    const handleNav = () => {
        setNav(!nav);
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        }
        window.addEventListener("scroll", handleShadow);
    }, []);

    return (
        <div style={{backgroundColor: `${navBG}`, color: `${linkColor}`}}
             className={shadow ? "fixed w-full h-20 shadow-xl z-[100]" : "fixed w-full h-20 z-[100]"}>
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <Link href="/">
                    <Image src="/assets/navLogo.png" alt="/" width="125" height="50"/>
                </Link>
                <div>
                    <ul className="hidden md:flex">
                        <div onClick={() => load("/", "home")}>
                            <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
                        </div>
                        <div onClick={() => load("/", "about")}>
                            <li className="ml-10 text-sm uppercase hover:border-b">About</li>
                        </div>
                        <div onClick={() => load("/", "skills")}>
                            <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
                        </div>
                        <div onClick={() => load("/", "projects")}>
                            <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
                        </div>
                        <div onClick={() => load("/", "contact")}>
                            <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
                        </div>
                        <div onClick={() => load("/timeline", null)}>
                            <li className="ml-10 text-sm uppercase hover:border-b">Timeline</li>
                        </div>
                    </ul>
                    <div onClick={handleNav} className="md:hidden">
                        <AiOutlineMenu size={25}/>
                    </div>
                </div>
            </div>

            <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
                <div
                    className={
                        nav
                            ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ECF0F3] p-10 ease-in duration-500"
                            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
                    }>
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Link href="/">
                                <Image src="/assets/navLogo.png" alt="/" width="87" height="35"/>
                            </Link>
                            <div onClick={handleNav}
                                 className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                                <AiOutlineClose size={25}/>
                            </div>
                        </div>
                        <div className="border-b border-gray-300 my-4">
                            <p className="w-[85%] md:w-[90%] py-4">Lets build something legendary together</p>
                        </div>
                    </div>
                    <div className="py-4 flex flex-col">
                        <ul className="uppercase">
                            <div onClick={() => load("/", "home")}>
                                <li onClick={() => setNav(false)} className="py-4 text-sm">Home</li>
                            </div>
                            <div onClick={() => load("/", "about")}>
                                <li onClick={() => setNav(false)} className="py-4 text-sm">About</li>
                            </div>
                            <div onClick={() => load("/", "skills")}>
                                <li onClick={() => setNav(false)} className="py-4 text-sm">Skills</li>
                            </div>
                            <div onClick={() => load("/", "projects")}>
                                <li onClick={() => setNav(false)} className="py-4 text-sm">Project</li>
                            </div>
                            <div onClick={() => load("/", "contact")}>
                                <li onClick={() => setNav(false)} className="py-4 text-sm">Contact</li>
                            </div>
                            <div onClick={() => load("/timeline", null)}>
                                <li onClick={() => setNav(false)} className="py-4 text-sm">Timeline</li>
                            </div>
                        </ul>
                        <div className="pt-40">
                            <p className="uppercase tracking-widest text-[#5651E5]">Let&apos;s connect</p>
                            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                <div
                                    onClick={() => window.open(links.github, "__blank")}
                                    className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                                    <FaGithub size={20}/>
                                </div>
                                <div
                                    onClick={() => window.open(links.mail, "__blank")}
                                    className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                                    <AiOutlineMail size={20}/>
                                </div>
                                <div
                                    className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                                    <BsFillPersonFill size={20}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
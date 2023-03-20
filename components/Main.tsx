import React from "react";
import {FaGithub} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";
import {BsFillPersonFill} from "react-icons/bs";
import {links} from "@/components/cross/loader";

const Main = () => {
    return (
        <div id="home" className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className="uppercase text-sm tracking-widest text-gray-600">Let&apos;s build something
                        together</p>
                    <h1 className="py-4 text-gray-700">
                        Hi, I&apos;m <span className="text-[#5651E5]">Christoph</span>
                    </h1>
                    <h1 className="py-4 text-gray-700">
                        A Software Engineer
                    </h1>
                    <p className="py-4 text-gray-600 max-w-[70%] mx-auto">
                        I&apos;m a software engineer specializing in building application for the background of a PC.
                        Currently I&apos;m focused on create modular and easy extensible software while learning the
                        ground thinks of the programming world (ASM)
                    </p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <div
                            onClick={() => window.open(links.github, "__blank")}
                            className="rounded-full shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500">
                            <FaGithub size={20}/>
                        </div>
                        <div
                            onClick={() => window.open(links.mail, "__blank")}
                            className="rounded-full shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500">
                            <AiOutlineMail size={20}/>
                        </div>
                        <div
                            className="rounded-full shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500">
                            <BsFillPersonFill size={20}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
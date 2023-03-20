import React from "react";
import Image from "next/image";
import HexaStudioImage from "../public/assets/projects/hexastudio.png"
import {RiRadioButtonFill} from "react-icons/ri";
import Link from "next/link";
import {load} from "@/components/cross/loader";

const hexastudio = () => {
    return (
        <div className="w-full">
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10"/>
                <Image className="absolute z-1" layout="fill" objectFit="cover" src={HexaStudioImage} alt="/"/>
                <div
                    className="absolute top-[70%] max-w-[1240ox] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">HexaStudio</h2>
                    <h3>NextJS / Tailwind</h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                <div className="col-span-4">
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>HexaStudio should be the central hub for all of my projects. I spent a lot of time working and
                        planning to find the best method for publishing my work to the world. While GitHub is a great
                        platform, I found it too impersonal for my needs. I thought that a comprehensive website with a
                        studio-like system would be the best solution, but it turned out to be a lot of work. In the
                        end, I decided to create a simple portfolio website.</p>
                    <p className="py-3">
                        Lastly, I would like to mention that if creating your own publishing website seems like too much
                        work, you can <a onClick={() => load("/", "contact")}>contact</a> me using the form on my
                        website and I will conduct a fast review of your
                        project and publish it on your behalf. Your name and a link to your GitHub repository will be
                        clearly displayed on the page for the product.
                    </p>
                    <button onClick={() => load("/", null)} className="px-8 py-2 mt-4 mr-8">Demo</button>
                    <button
                        onClick={() => window.open("https://github.com/Christoph-Koschel/hexastudio.git", "__blank")}
                        className="px-8 py-2 mt-4">Code
                    </button>
                </div>
                <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
                    <div className="p-2">
                        <p className="text-center font-bold pb-2">Technologies</p>
                        <div className="grid grid-cols-3 md:grid-cols-1">
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1"/>
                                NextJS
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1"/>
                                React
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1"/>
                                Tailwind
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1"/>
                                TypeScript
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1"/>
                                MUI Core/Lab
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1"/>
                                React Icons
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1"/>
                                ESLint
                            </p>
                        </div>
                    </div>
                </div>
                <Link href="/#projects">
                    <p className="underline cursor-pointer">Back</p>
                </Link>
            </div>
        </div>
    );
}

export default hexastudio;

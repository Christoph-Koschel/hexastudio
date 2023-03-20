import React from "react";
import Image from "next/image";
import AboutImage from "../public/assets/about.jpg";
import {load} from "@/components/cross/loader";

const About = () => {
    return (
        <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-xl track-widest text-[#5651E5]">About</p>
                    <h2 className="py-4">Who I Am</h2>
                    <p className="font-mono text-[#268E67] py-2">&#47;&#47; Im not a normal developer</p>
                    <p className="py-2 text-gray-600">
                        Hello, and welcome to my profile! My name is Christoph Koschel, and I&apos;m excited to share a
                        little bit about myself with you.
                    </p>
                    <p className="py-2 text-gray-600">
                        I&apos;m
                        a {Math.floor((new Date().valueOf() - new Date('2005-10-17').valueOf()) / (365.25 * 24 * 60 * 60 * 1000))}-year-old
                        Student with a passion for Informatics. I currently live in southern Germany.
                        In my free time, I enjoy all thinks around computers from Websites over understanding how a
                        Operating System works to create my own Programing language. I also love spending time with my
                        Family and Frinds and
                        exploring new places, whether that&apos;s trying out a new restaurant in town or taking a
                        weekend trip somewhere nearby.
                    </p>
                    <p className="py-2 text-gray-600">
                        Thank you for taking the time to read a little bit about me. I&apos;m looking forward to
                        connecting
                        with you!
                    </p>
                    <p className="py-2 text-gray-600 underline cursor-pointer"
                       onClick={() => load("/", "projects")}>Check out some of my latest projects.</p>
                </div>
                <div
                    className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <Image className="rounded-xl" src={AboutImage} alt="/"/>
                </div>
            </div>
        </div>
    );
}

export default About;
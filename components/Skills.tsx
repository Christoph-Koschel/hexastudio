import React from "react";
import Image from "next/image";

export const Skills = () => {
    return (
        <div id="skills" className="w-full lg:h-screen p-2">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <p className="text-xl tracking-widest uppercase text-[#5651E5]">Skills</p>
                <h2 className="py-4">What I Can Do</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="mx-auto">
                                <Image src="/assets/skills/html.png" alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>HTML5</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="mx-auto">
                                <Image src="/assets/skills/css.png" alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>CSS3</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="mx-auto">
                                <Image src="/assets/skills/php.png" alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>PHP</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="mx-auto">
                                <Image src="/assets/skills/javascript.png" alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>JavaScript</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="mx-auto">
                                <Image src="/assets/skills/typescript.png" alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>TypeScript</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="mx-auto">
                                <Image src="/assets/skills/node.png" alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>NodeJS</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="mx-auto">
                                <Image src="/assets/skills/mongo.png" alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>MongoDB</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="mx-auto">
                                <Image src="/assets/skills/sqlite.png" alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>SQLite</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="mx-auto">
                                <Image src="/assets/skills/mysql.png" alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>MySQL</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="mx-auto">
                                <Image src="/assets/skills/csharp.png" alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>C#</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="mx-auto">
                                <Image src="/assets/skills/java.png" alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Java</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="mx-auto">
                                <Image src="/assets/skills/bootstrap.png" alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Bootstrap</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="mx-auto">
                                <Image src="/assets/skills/electron.png" alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>ElectronJS</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="mx-auto">
                                <Image src="/assets/skills/docker.png" alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Docker</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="mx-auto">
                                <Image src="/assets/skills/github.png" alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>GitHub</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="mx-auto">
                                <Image src="/assets/skills/git.png" alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Git</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="mx-auto">
                                <Image src="/assets/skills/android.png" alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Android</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="mx-auto">
                                <Image src="/assets/skills/linux.png" alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Linux</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
import ContactImage from "../public/assets/contact.jpg";
import React, {useState} from "react";
import Image from "next/image";
import {FaGithub} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";
import {BsFillPersonFill} from "react-icons/bs";
import {HiOutlineChevronDoubleUp} from "react-icons/hi";
import {links, load} from "@/components/cross/loader";
import EmailVerification from "@/components/cross/modal/EmailVerification";

const Contact = () => {
    const [showOkModal, setShowOKModal] = useState(false);
    const [showFailModal, setShowFailModal] = useState(false);

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // @ts-ignore
        let form = document.forms["contact-form"];
        let name: string = form[0].value;
        let phone: string = form[1].value;
        let email: string = form[2].value;
        let subject: string = form[3].value;
        let message: string = form[4].value;

        let data: FormData = new FormData();
        data.set("name", name);
        data.set("phone", phone);
        data.set("email", email);
        data.set("subject", subject);
        data.set("message", message);

        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                try {
                    let res = JSON.parse(xhr.responseText);
                    if (!res.ok) {
                        setShowFailModal(true);
                    } else {
                        setShowOKModal(true);
                    }
                } catch {
                    setShowFailModal(true);
                }
            }
        }
        xhr.open("POST", "https://hexa-studio.de/forward.php", true);
        xhr.send(data);
    }

    const OK_MESSAGE = "";
    const FAILURE_MESSAGE = ""

    return (
        <>
            <EmailVerification show={showFailModal} onClose={() => setShowFailModal(false)}>
                We apologize, but it seems that there was an error in submitting your message.
                <br/>Please try again later or contact us through our alternate channels.<br/>I appreciate your
                interest and look forward to hearing from you soon.
            </EmailVerification>
            <EmailVerification show={showOkModal} onClose={() => setShowOKModal(false)}>
                Thank you for reaching out to us.<br/><br/>We have received your message and will get back to you as
                soon as possible.<br/>Your feedback is important for me, and I appreciate you taking the time to contact
                us.
            </EmailVerification>
            <div id="contact" className="w-full lg:h-screen">
                <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
                    <p className="text-xl tracking-widest uppercase text-[#5651E5]">
                        Contact
                    </p>
                    <h2 className="py-4">Get In Touch</h2>
                    <div className="grid lg:grid-cols-5 gap-8">
                        <div
                            className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
                            <div className="lg:p-4 h-full">
                                <div>
                                    <Image className="rounded-xl hover:scale-105 ease-in duration-300"
                                           src={ContactImage}
                                           alt=""/>
                                </div>
                                <div>
                                    <h2 className="py-2">Christoph Koschel</h2>
                                    <p>Software Engineer</p>
                                    <p className="py-4">A student interested in computer science</p>
                                </div>
                                <div>
                                    <p className="uppercase pt-8">Connect With me</p>
                                    <div className="flex items-center justify-between py-4">
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

                        <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                            <div className="p-4">
                                <form id="contact-form" onSubmit={(e) => submit(e)}>
                                    <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                        <div className="flex flex-col">
                                            <label className="uppercase text-sm py-2">Name</label>
                                            <input name="name" required
                                                   className="border-2 rounded-lg p-3 flex border-gray-300"
                                                   type="text"/>
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="uppercase text-sm py-2">Phone Number</label>
                                            <input name="phone" required
                                                   className="border-2 rounded-lg p-3 flex border-gray-300"
                                                   type="tel"/>
                                        </div>
                                    </div>
                                    <div className="flex flex-col py-2">
                                        <label className="uppercase text-sm py-2">Email</label>
                                        <input name="email" required
                                               className="border-2 rounded-lg p-3 flex border-gray-300"
                                               type="email"/>
                                    </div>
                                    <div className="flex flex-col py-2">
                                        <label className="uppercase text-sm py-2">Subject</label>
                                        <input name="subject" required
                                               className="border-2 rounded-lg p-3 flex border-gray-300"
                                               type="text"/>
                                    </div>
                                    <div className="flex flex-col py-2">
                                        <label className="uppercase text-sm py-2">Message</label>
                                        <textarea name="message" required
                                                  className="border-2 rounded-lg p-3 border-gray-300" rows={10}>
                                    </textarea>
                                    </div>
                                    <button type="submit" className="w-full p-4 text-gray-100 mt-4">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center py-12">
                        <div onClick={() => load("/", "home")}>
                            <div
                                className="rounded-full shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500">
                                <HiOutlineChevronDoubleUp className="text-[#5651E5]" size={20}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Contact;
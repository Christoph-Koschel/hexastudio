import React, {useEffect, useState} from "react";
import {Timeline, timelineOppositeContentClasses} from "@mui/lab";
import CostumeTimelineItem from "@/components/CostumeTimelineItem";
import timeline_json from "@/mock/timeline.json";
import {RiRadioButtonFill} from "react-icons/ri";
import {load} from "@/components/cross/loader";
import {HiOutlineChevronDoubleUp} from "react-icons/hi";
import {scopedCssBaselineClasses} from "@mui/material";

const COLORS: string[] = [
    "#A058FF",
    "#9558FF",
    "#7F58FF",
    "#7458FF",
    "#5650E4",
    "#5D57FC",
    "#4F4AD6",
    "#413DB0",
    "#33308A",
    "#252364",
    "#393597"
];

type TimelineData = {
    "year": number,
    date: string;
    title: string;
    content: string;
}

const timelineData: TimelineData[] = timeline_json;

const timeline = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [scrollUp, setScrollUp] = useState(false);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 120) {
                setScrollUp(true);
            } else {
                setScrollUp(false);
            }
        }
        window.addEventListener("scroll", handleShadow);
    }, []);

    let rotator: number = -1;
    let last_year_counter: number = -1;
    let last_year_counter_list: number = -1;

    return (
        <>
            <div id="top-screen"></div>
            <div className="pt-40 ml-20 mr-20 xl:flex xl:mr-1 2xl:mr-96">
                <div className="col-span-4 min-[1500px]:col-span-1 2xl:pr-3">
                    <div
                        className="m-3 shadow-xl shadow-gray-400 rounded-xl p-2 flex xl:w-[250px]">
                        {
                            timelineData.map((v, i) => {
                                if (last_year_counter_list != v.year) {
                                    last_year_counter_list = v.year;

                                    return (
                                        <p key={i} onClick={() => load("/timeline", "year-" + v.year)}
                                           className="text-gray-600 py-2 flex items-center cursor-pointer">
                                            <RiRadioButtonFill className="pr-1"/>
                                            Year {v.year}
                                        </p>
                                    );
                                }
                            })
                        }


                    </div>
                    <div className={scrollUp ? "fixed left-5 bottom-5" : "hidden"}>
                        <div
                            onClick={() => load("/timeline", "top-screen")}
                            className="rounded-full shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500">
                            <HiOutlineChevronDoubleUp className="text-[#5651E5]" size={20}/>
                        </div>
                    </div>
                </div>
                <Timeline
                    position="left"
                    className=""
                    sx={{
                        [`& .${timelineOppositeContentClasses.root}`]: {
                            flex: 0.2,
                        },
                    }}>
                    {
                        timelineData.map((v, i, x) => {
                            let id: string = "";

                            if (last_year_counter != v.year) {
                                id = "year-" + v.year;
                                rotator = rotator > COLORS.length ? 0 : rotator + 1;
                                last_year_counter = v.year;
                            }

                            return (
                                <CostumeTimelineItem id={id}
                                                     key={i}
                                                     date={v.date}
                                                     title={v.title}
                                                     content={v.content}
                                                     color={COLORS[rotator]}
                                                     begin={i == 0}
                                                     end={i == x.length - 1}/>
                            );

                        })
                    }
                </Timeline>
            </div>
        </>
    );
}

export default timeline;
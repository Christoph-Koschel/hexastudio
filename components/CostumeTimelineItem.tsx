import {
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from "@mui/lab";
import {AiFillRead} from "react-icons/ai";
import {Typography} from "@mui/material";
import React from "react";

export type DataBoxConstructor = {
    content: string;
}

const DataBox = ({content}: DataBoxConstructor) => {
    return (
        <div className="border-2 p-2 rounded-lg break-words">
            <p>
                {content}
            </p>
        </div>
    );
}

export type CostumeTimelineItemConstructor = {
    id: string
    date: string;
    title: string;
    content: string;
    begin: boolean;
    end: boolean;
    color: string;
}

const CostumeTimelineItem = ({id, date, title, content, color, begin, end}: CostumeTimelineItemConstructor) => {
    const renderBegin = () => {
        if (!begin) {
            return <TimelineConnector/>
        }
    }

    const renderEnd = () => {
        if (!end) {
            return <TimelineConnector/>
        }
    }

    return (
        <TimelineItem id={id} className="cursor-default">
            <TimelineOppositeContent
                sx={{m: 'auto 0'}}
                align="right"
                variant="body2"
                color="text.secondary">
                {/* TIME */}
                {date}
            </TimelineOppositeContent>

            <TimelineSeparator>
                {renderBegin()}
                <TimelineDot
                    style={{background: `${color}`}}/>
                {renderEnd()}
            </TimelineSeparator>
            <TimelineContent
                sx={{py: '12px', px: 2}}
            >
                <Typography variant="h6" component="span">
                    {/* TITLE */}
                    <span>{title}</span>
                </Typography>

                {/* DESCRIPTION*/}
                <Typography>
                    {/*{content}*/}
                    <DataBox content={content}/>
                </Typography>
            </TimelineContent>
        </TimelineItem>
    );
}
export default CostumeTimelineItem;
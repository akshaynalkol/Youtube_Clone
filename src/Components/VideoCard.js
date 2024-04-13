import React, { useEffect, useState } from "react";
import { YOUTUBE_CHANNEL_API } from "../utils/Contants";

export default function VideoCard({ info }) {
    const { snippet, statistics } = info;
    const { title, channelTitle, thumbnails, publishedAt, channelId } = snippet;
    // const { viewCount } = statistics;

    const [channel, setChannel] = useState([]);
    const [days, setDays] = useState('');

    const getDays = () => {
        // console.log(publishedAt);
        let publishedTime = new Date(publishedAt)
        let currentTime = new Date();
        let d = Math.floor((currentTime.getTime() - publishedTime.getTime()) / (1000 * 60 * 60 * 24));
        setDays(d);
    }

    const getChannelData = async () => {
        const res = await fetch(YOUTUBE_CHANNEL_API + channelId);
        const data = await res.json();
        // console.log(data.items[0]);
        setChannel(data.items[0]);
    }

    useEffect(() => {
        getDays();
        getChannelData();
    }, []);


    return (
        <div className="card border-0">
            <img src={thumbnails.medium.url} alt="Thumbnails" className="rounded-3" />
            <div className="d-flex p-2 pb-4">
                <img src={channel?.snippet?.thumbnails.medium.url} alt="Channel Logo" height={45}
                    className="rounded-circle me-2" />
                <div>
                    <h6 className="card-title">{title}</h6>
                    <p className="card-subtitle text-secondary mt-1 small">
                        {channelTitle} <i className="fa-solid fa-circle-check fa-xs"></i>
                    </p>
                    <p className="card-text text-secondary small">
                        {statistics && statistics?.viewCount + " views"}  • {days} days ago
                    </p>
                </div>
            </div>
        </div>
    )
}
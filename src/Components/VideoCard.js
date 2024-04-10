import React, { useEffect, useState } from "react";

export default function VideoCard({ info }) {
    const [days, setDays] = useState('');
    useEffect(() => {
        // console.log(info.snippet.publishedAt);
        let publishedTime = new Date(info.snippet.publishedAt)
        let currentTime = new Date();
        let d = Math.floor((currentTime.getTime() - publishedTime.getTime()) / (1000 * 60 * 60 * 24));
        setDays(d);
    }, [info]);

    return (
        <div className="card border-0">
            <img src={info?.snippet.thumbnails.medium.url} alt="Thumbnails" className="rounded-4" />
            <div className="card-body ">
                <h6 className="card-title">{info?.snippet.title}</h6>
                <p className="card-subtitle text-secondary mt-1 small">
                    {info?.snippet.channelTitle} <i className="fa-solid fa-circle-check fa-xs"></i>
                </p>
                <p className="card-text text-secondary small">
                    {info?.statistics.viewCount} views • {days} days ago
                </p>
            </div>
        </div>
    )
}
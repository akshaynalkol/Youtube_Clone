import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/Contants.js';
import VideoCard from './VideoCard.js';
import { NavLink } from 'react-router-dom';

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const res = await fetch(YOUTUBE_VIDEO_API);
        const data = await res.json();
        // console.log(data.items);

        setVideos(data.items);
    }

    return (
        <>
            <div className='row gy-3 mt-5'>
                {
                    videos.map(val => {
                        return (
                            <div className='col-lg-4 col-sm-6' key={val.id}>
                                <NavLink to={"/watch?v=" + val.id} className="text-decoration-none">
                                    <VideoCard info={val} />
                                </NavLink>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default VideoContainer;
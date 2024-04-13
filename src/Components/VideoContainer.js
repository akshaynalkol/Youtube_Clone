import React, { useEffect, useState } from 'react'
import { YOUTUBE_SEARCH_VIDEO_API, YOUTUBE_VIDEO_API } from '../utils/Contants.js';
import VideoCard from './VideoCard.js';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setHomeVideo } from '../utils/searchVideoSlice.js';

const VideoContainer = () => {
    const { videos, category } = useSelector(state => state.searchVideo);
    const dispatch = useDispatch();
    // const [videos, setVideos] = useState([]);

    const getVideoData = async () => {
        const res = await fetch(YOUTUBE_VIDEO_API);
        const data = await res.json();
        // console.log(data);
        dispatch(setHomeVideo(data.items));
    }

    const getCategoryData = async (category) => {
        const res = await fetch(YOUTUBE_SEARCH_VIDEO_API + category);
        const data = await res.json();
        // console.log(data.items);
        dispatch(setHomeVideo(data.items));
    }

    useEffect(() => {
        if (category === 'All') {
            getVideoData();
        }
        else {
            getCategoryData(category);
        }
    }, [category]);

    return (
        <>
            <div className='row gy-3 mt-5'>
                {
                    videos &&
                    videos.map(val => {
                        return (
                            <div className='col-lg-4 col-sm-6' key={typeof val.id === 'object' ? val.id.videoId : val.id}>
                                <NavLink to={`/watch?v=${typeof val.id === 'object' ? val.id.videoId : val.id}`}
                                    className="text-decoration-none">
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
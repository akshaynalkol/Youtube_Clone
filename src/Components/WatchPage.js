import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import { YOUTUBE_SINGLE_VIDEO_API, YOUTUBE_VIDEO_API } from '../utils/Contants';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import VideoDescription from './VideoDescription';

const WatchPage = () => {
    const [video, setVideo] = useState();
    const [searchParams, setSearchParams] = useSearchParams();
    // console.log(searchParams);
    // console.log(searchParams.get("v"));

    const dispatch = useDispatch();

    const getData = async () => {
        let res = await fetch(YOUTUBE_SINGLE_VIDEO_API + searchParams.get("v"));
        let data = await res.json();
        // console.log(data.items[0]);
        setVideo(data.items[0])
    }

    useEffect(() => {
        dispatch(closeMenu());

        getData();
    }, []);

    return (
        <>
            <div className='col-xl-8 pt-3 ps-lg-4 position-relative z-1'>
                <iframe
                    width="560"
                    height="460"
                    src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className='w-100 rounded-3'
                ></iframe>
                <div className='mt-3 mb-4 d-block d-xl-none'>
                    <LiveChat />
                </div>
                {/* <LiveChat /> */}
                {
                    video &&
                    <>
                        <h4 className='fw-bold my-3'>{video.snippet.title}</h4>
                        <div className='d-flex justify-content-between align-items-center mb-3'>
                            <div className='d-flex align-items-center'>
                                <img src='/Images/UserLogo.svg' alt="User" height={40} />
                                <div className='ps-2'>
                                    <p className='mb-0 fw-bold'>
                                        {video.snippet.channelTitle} <i className="fa-solid fa-circle-check fa-xs align-middle"></i>
                                    </p>
                                    <p className='mb-0 small'>{video.statistics.viewCount} views</p>
                                </div>
                            </div>
                            <div>
                                <button className='btn btn-bg rounded-pill me-2 d-none d-sm-inline'>
                                    <i class="fa-solid fa-share"></i> &nbsp;Share
                                </button>
                                <button className='btn btn-bg rounded-pill me-2 d-none d-sm-inline' download>
                                    <i class="fa-solid fa-download"></i> &nbsp;Download
                                </button>
                                <button className='btn btn-bg rounded-pill'>
                                    <i class="fa-solid fa-ellipsis"></i>
                                </button>
                            </div>
                        </div>
                        <VideoDescription data={video} />
                    </>
                }
                <CommentsContainer />
            </div >
            <div className='col-4 pt-3 position-relative z-1 d-xl-inline d-none'>
                <LiveChat />
            </div>
        </>
    )
}

export default WatchPage;

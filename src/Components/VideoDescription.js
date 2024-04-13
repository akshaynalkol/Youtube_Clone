import React, { useState } from 'react';

const VideoDescription = ({ data }) => {
    const { snippet, statistics } = data;
    const { channelTitle, description } = snippet;
    const { viewCount } = statistics;

    const [showHide, setShowHide] = useState(false);
    

    return (
        <div div className='btn-bg border rounded-3 p-3 mb-3 overflow-hidden position-relative'
            style={{ height: showHide ? 'auto' : '112px' }}
        >
            <p className='mb-0 fw-bold'>
                {viewCount} views &nbsp;&nbsp;
                {channelTitle} <i className="fa-solid fa-circle-check fa-xs align-middle"></i>
            </p>
            {
                description.split('\n\n')
                    .map((val, index) => {
                        return (
                            <p key={index}>{val}</p>
                        )
                    })
            }
            <button className='p-0 border-0' onClick={() => setShowHide(false)}>Show Less</button>
            {
                !showHide &&
                <button className='p-0 border-0 position-absolute p-2' style={{top:'81px',right:'10px'}}
                    onClick={() => setShowHide(true)} >
                    ...more
                </button>
            }
        </div>
    )
}

export default VideoDescription;
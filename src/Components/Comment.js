import React from 'react'

const Comment = ({ comment }) => {
    const { name, text} = comment;
    return (
        <div className='d-flex align-items-center mb-2'>
            <img src='/Images/UserLogo.svg' alt="User" height={35}/>
            <div className='ps-2'>
                <p className='fw-bold mb-0 small'>{name}</p>
                <p className='mb-0 small'>{text}</p>
            </div>
        </div>
    )
}

export default Comment;
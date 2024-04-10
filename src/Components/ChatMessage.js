import React from 'react'

const ChatMessage = ({ name, message }) => {
    return (
        <div className='d-flex align-itms-center px-4 py-2'>
            <img src='/Images/UserLogo.svg' alt='User Logo' height={25} />
            <span className='small ps-2 align-self-center fw-bold'>{name}</span>
            <span className='small ps-2 align-self-center'>{message}</span>
        </div>
    )
}

export default ChatMessage;

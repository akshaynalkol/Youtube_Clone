import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import generateRandomName, { makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState('');
    const dispatch = useDispatch();
    const chatMessages = useSelector(store => store.chat.messages);

    useEffect(() => {
        const interval = setInterval(() => {
            // API Polling
            // console.log('API Polling');
            // console.log(chatMessages);

            dispatch(
                addMessage({
                    name: generateRandomName(),
                    message: makeRandomMessage(30)
                })
            )
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className='d-flex justify-content-between border rounded-top-3 px-4 py-3'>
                <h5 className='fw-bold mb-0'>Top Chat</h5>
                <button className='btn-close text-reset'></button>
            </div>
            <div className='d-flex flex-column-reverse border overflow-y-auto custom-scroll'
                style={{ height: '465px' }} >
                {
                    chatMessages &&
                    chatMessages.map((val, index) => {
                        return (
                            <ChatMessage name={val.name} message={val.message} key={index} />
                        )
                    })
                }
            </div>
            <form className='d-flex border rounded-bottom-3 px-4 py-3 '
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(addMessage({
                        name: "Akshay Nalkol",
                        message: liveMessage
                    }))
                    setLiveMessage('');
                }}
            >
                <input type='text' className='form-control me-2' value={liveMessage} placeholder='Enter Message'
                    onChange={(e) => setLiveMessage(e.target.value)} />
                <button className='btn btn-success'>Send</button>
            </form>
        </>
    )
}

export default LiveChat;
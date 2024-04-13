import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import Buttton from './Buttton';

const list = ["All", "Game Shows", "Music", "Live", "JavaScript", "News", "Gaming", "Movies", "IPL",
    "Arjit Singh", "Thrillers", "Comedy Show", "Rohit Sharma", "Drama", "Funny Video", "New To You"];

const ButtonList = () => {
    const [active, setActive] = useState('All');
    const dispatch = useDispatch();

    return (

        <div className='d-flex position-fixed z-2 bg-white pb-2 text-nowrap overflow-x-scroll no-scroll'
            style={{ width: '91.5%' }}>
            {
                list.map((val, index) => {
                    return (
                        <Buttton key={index} name={val} active={active} setActive={setActive} dispatch={dispatch} />
                    )

                })
            }
        </div >
    )
}

export default ButtonList;
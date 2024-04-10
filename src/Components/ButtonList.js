import React from 'react'
import Buttton from './Buttton';

const list = ["All", "Game Shows", "Music", "Live", "JavaScript", "News", "Gaming", "Movies", "IPL", "Arjit Singh",
    "Thrillers", "Comedy Show"/*, "New To You"*/];

const ButtonList = () => {
    return (
        <div className='position-fixed z-2 bg-white pb-2 d-block overflow-x-auto text-nowrap'
        style={{width:'94.8%'}}>
            {
                list.map((val, index) => {
                    return (
                        <Buttton key={index} name={val} />
                    )

                })
            }
        </div>
    )
}

export default ButtonList;
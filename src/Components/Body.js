import React from 'react'
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';
import { Outlet } from 'react-router-dom';

const Body = () => {

    return (
        <div className='container-fluid bg-white'>
            <div className='row'>
                <Sidebar />
                <Outlet />
                {/* <MainContainer /> */}
            </div>
        </div>
    )
}

export default Body;

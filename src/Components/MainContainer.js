import React, { useEffect } from 'react'
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';
import { useMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleHomePage } from '../utils/appSlice';

const MainContainer = () => {
    const dispatch = useDispatch();
    const match = useMatch('/');

    useEffect(() => {
        if (match) {
            dispatch(toggleHomePage());
        }
        return () => dispatch(toggleHomePage());;
    }, []);

    return (
        <div className='col'>
            <ButtonList />
            <VideoContainer />
        </div>
    )
}

export default MainContainer;  

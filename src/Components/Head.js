import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { YOUTUBE_SEARCH_API } from '../utils/Contants';
import { cacheResults } from '../utils/searchSlice';
import { toggleMenu } from '../utils/appSlice';
import { setCategory } from '../utils/searchVideoSlice';
import './Head.css';


const Head = () => {
    const nav = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestion, setSuggestion] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const searchCache = useSelector(store => store.search);
    const dispatch = useDispatch();

    const getSearchSuggestions = async () => {
        const res = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const data = await res.json();
        // console.log(data[1]);
        setSuggestion(data[1]);

        // Update Cache
        dispatch(cacheResults({
            [searchQuery]: data[1],
        }));
    }

    useEffect(() => {
        const interval = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestion(searchCache[searchQuery]);
            }
            else {
                getSearchSuggestions();
            }
        }, 200);
        return () => clearInterval(interval);
    }, [searchQuery]);

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    const handleSearchBtn = () => {
        dispatch(setCategory(searchQuery));
        nav('/');
    }

    const handleSearch = (text) => {
        setSearchQuery(text);
        dispatch(setCategory(text));
        setShowSuggestions(false)
        nav('/');
    }

    return (
        <div className='container-fluid sticky-top bg-white'>
            <div className='row align-items-center gx-sm-3 gx-0 px-sm-3 py-3'>
                <div className='col-lg-2 col-sm-3 col-5'>
                    <i className="fa-solid fa-bars fa-lg align-middle" onClick={() => toggleMenuHandler()}></i>
                    <NavLink to={'/'}>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg'
                            alt='Youtube Logo' className='ps-md-3 ps-2' height={23} />
                    </NavLink>
                </div>
                <div className='col-sm-8 col-sm-5 col-7 position-relative searchDiv'>
                    <div className='input-group'>
                        <input type='search' className='form-control rounded-start-pill'
                            value={searchQuery} placeholder='Search'
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={() => setShowSuggestions(true)}
                        // onBlur={() => setShowSuggestions(false)}
                        />
                        <span className='input-group-text rounded-end-pill' onClick={() => handleSearchBtn()}>
                            <i className="fa-solid fa-magnifying-glass fa-lg px-1"></i>
                        </span>
                    </div>
                    {
                        showSuggestions &&
                        <div className='suggestion'>
                            <ul className='list-group'>
                                {
                                    suggestion.map((val, index) => {
                                        return (
                                            <li className='list-group-item border-0 shadow cursor-pointer'
                                                key={index} onClick={() => handleSearch(val)}
                                            >
                                                <i className="fa-solid fa-magnifying-glass pe-3"></i>
                                                {val}  
                                            </li>
                                        )
                                    })
                                }
                                {/* {
                                    !serachQuery &&
                                    <>
                                        <li className='list-group-item border-0 shadow cursor-pointer'
                                            onClick={() => {
                                                // setSearchQuery('Iphone');
                                                // disptch(setCategory(serachQuery));
                                                // setShowSuggestions(false)
                                                alert('sss')
                                            }}>
                                            <i className="fa-solid fa-magnifying-glass pe-3"></i>Iphone
                                        </li>
                                        <li className='list-group-item border-0 shadow cursor-pointer'
                                            onClick={() => setSearchQuery('ReactJS')}>
                                            <i className="fa-solid fa-magnifying-glass pe-3"></i>ReactJS
                                        </li>
                                        <li className='list-group-item border-0 shadow cursor-pointer'
                                            onClick={() => setSearchQuery('KGF')}>
                                            <i className="fa-solid fa-magnifying-glass pe-3"></i>KGF
                                        </li>
                                        <li className='list-group-item border-0 shadow cursor-pointer'
                                            onClick={() => setSearchQuery('Arjit Singh')}>
                                            <i className="fa-solid fa-magnifying-glass pe-3"></i>Arjit Singh
                                        </li>
                                        <li className='list-group-item border-0 shadow cursor-pointer'
                                            onClick={() => setSearchQuery('Rohit Sharma')}>
                                            <i className="fa-solid fa-magnifying-glass pe-3"></i>Rohit Sharma
                                        </li>
                                        <li className='list-group-item border-0 shadow cursor-pointer'
                                            onClick={() => setSearchQuery('Cricket')}>
                                            <i className="fa-solid fa-magnifying-glass pe-3"></i>Cricket
                                        </li>
                                        <li className='list-group-item border-0 shadow cursor-pointer'
                                            onClick={() => setSearchQuery('JavaScript')}>
                                            <i className="fa-solid fa-magnifying-glass pe-3"></i>JavaScript
                                        </li>
                                        <li className='list-group-item border-0 shadow cursor-pointer'
                                            onClick={() => setSearchQuery('Mararhi')}>
                                            <i className="fa-solid fa-magnifying-glass pe-3"></i>Mararhi
                                        </li>
                                        <li className='list-group-item border-0 shadow cursor-pointer'
                                            onClick={() => setSearchQuery('Drama')}>
                                            <i className="fa-solid fa-magnifying-glass pe-3"></i>Drama
                                        </li>
                                    </>
                                } */}
                            </ul>
                        </div>
                    }
                </div>
                <div className='col-lg-2 col-1 d-none d-sm-inline text-end'>
                    <img src='/Images/UserLogo.svg' alt='User Logo' height={28} />
                </div>
            </div >
        </div >
    )
}

export default Head;


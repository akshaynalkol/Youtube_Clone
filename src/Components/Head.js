import React, { useEffect, useState } from 'react'
import { YOUTUBE_SEARCH_API } from '../utils/Contants';
import { cacheResults } from '../utils/searchSlice';
import { toggleMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Head.css';


const Head = () => {
    const [serachQuery, setSearchQuery] = useState('');
    const [suggestion, setSuggestion] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const serachCache = useSelector(store => store.search);
    const disptch = useDispatch();

    useEffect(() => {
        console.log(serachQuery);
        let interval = setTimeout(() => {
            if (serachCache[serachQuery]) {
                setSuggestion(serachCache[serachQuery]);
            }
            else {
                getSearchSuggestions();
            }
        }, 200);
        return () => clearInterval(interval);
    }, [serachQuery]);

    const getSearchSuggestions = async () => {
        const res = await fetch(YOUTUBE_SEARCH_API + serachQuery);
        const data = await res.json();
        // console.log(data[1]);
        setSuggestion(data[1]);

        // Update Cache
        disptch(cacheResults({
            [serachQuery]: data[1],
        }));
    }

    const toggleMenyHandler = () => {
        disptch(toggleMenu());
    }

    return (
        <div className='container-fluid sticky-top bg-white'>
            <div className='row align-items-center gx-sm-3 gx-0 px-sm-3 py-3'>
                <div className='col-lg-2 col-sm-3 col-5'>
                    <i className="fa-solid fa-bars fa-lg align-middle" onClick={() => toggleMenyHandler()}></i>
                    <NavLink to={'/'}>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg'
                            alt='Youtube Logo' className='ps-md-3 ps-2' height={23} />
                    </NavLink>
                </div>
                <div className='col-sm-8 col-sm-5 col-7 position-relative searchDiv'>
                    <div className='input-group'>
                        <input type='search' className='form-control rounded-start-pill'
                            value={serachQuery} placeholder='Search'
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={() => setShowSuggestions(true)}
                            onBlur={() => setShowSuggestions(false)}
                        />
                        <span className='input-group-text rounded-end-pill'>
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
                                            <li className='list-group-item border-0 shadow cursor'
                                                key={index} onClick={() => setSearchQuery(val)}
                                            >
                                                <i className="fa-solid fa-magnifying-glass pe-3"></i>
                                                {val}
                                            </li>
                                        )
                                    })
                                }
                                {
                                    !serachQuery &&
                                    <>
                                        <li className='list-group-item border-0 shadow cursor'
                                            onClick={() => setSearchQuery('Iphone')}>
                                            <i className="fa-solid fa-magnifying-glass pe-3"></i>Iphone
                                        </li>
                                        <li className='list-group-item border-0 shadow cursor'
                                            onClick={() => setSearchQuery('ReactJS')}>
                                            <i className="fa-solid fa-magnifying-glass pe-3"></i>ReactJS
                                        </li>
                                        <li className='list-group-item border-0 shadow cursor'
                                            onClick={() => setSearchQuery('KGF')}>
                                            <i className="fa-solid fa-magnifying-glass pe-3"></i>KGF
                                        </li>
                                        <li className='list-group-item border-0 shadow cursor'
                                            onClick={() => setSearchQuery('Arjit Singh')}>
                                            <i className="fa-solid fa-magnifying-glass pe-3"></i>Arjit Singh
                                        </li>
                                        <li className='list-group-item border-0 shadow cursor'
                                            onClick={() => setSearchQuery('Rohit Sharma')}>
                                            <i className="fa-solid fa-magnifying-glass pe-3"></i>Rohit Sharma
                                        </li>
                                        <li className='list-group-item border-0 shadow cursor'
                                            onClick={() => setSearchQuery('Cricket')}>
                                            <i className="fa-solid fa-magnifying-glass pe-3"></i>Cricket
                                        </li>
                                        <li className='list-group-item border-0 shadow cursor'
                                            onClick={() => setSearchQuery('JavaScript')}>
                                            <i className="fa-solid fa-magnifying-glass pe-3"></i>JavaScript
                                        </li>
                                        <li className='list-group-item border-0 shadow cursor'
                                            onClick={() => setSearchQuery('Mararhi')}>
                                            <i className="fa-solid fa-magnifying-glass pe-3"></i>Mararhi
                                        </li>
                                        <li className='list-group-item border-0 shadow cursor'
                                            onClick={() => setSearchQuery('Drama')}>
                                            <i className="fa-solid fa-magnifying-glass pe-3"></i>Drama
                                        </li>
                                    </>
                                }
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


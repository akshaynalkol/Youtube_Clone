import React, { useState } from 'react';
import { setCategory } from '../utils/searchVideoSlice';

const Buttton = ({ name, active, setActive, dispatch }) => {
    return (
        <>
            <button className={`btn me-2 ${active === name ? "bg-dark text-white" : "btn-bg"}`}
                onClick={() => {
                    setActive(name);
                    dispatch(setCategory(name))
                }}
            >
                {name}
            </button>
        </>
    )
}

export default Buttton;

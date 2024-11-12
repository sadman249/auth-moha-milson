import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Root = () => {
    return (
        <div className='max-w-5xl mx-auto'>
            <div className='sticky top-0 z-10'>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
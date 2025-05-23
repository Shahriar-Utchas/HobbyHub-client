import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Root = () => {
    return (
        <>
            {/* <div className='px-4 lg:px-8 rounded-2xl'> */}
                <div className='rounded-2xl'>
                <Navbar></Navbar>
                </div>
                <Outlet></Outlet>
                <Footer></Footer>
            {/* </div> */}
        </>
    );
};

export default Root;
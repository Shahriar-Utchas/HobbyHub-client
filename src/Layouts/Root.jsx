import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Loading from '../Components/Loading/Loading';

const Root = () => {
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);
        return () => clearTimeout(timer);
    }, [location]);

    return (
        <>
            <Navbar />
            {loading ? <Loading /> : <Outlet />}
            <Footer />
        </>
    );
};

export default Root;

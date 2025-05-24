import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../../Components/Hero/Hero';
import HobbyHubWorks from '../../Components/HobbyHubWorks/HobbyHubWorks';
import PopularCategories from '../../Components/PopularCategories/PopularCategories';
import AllGroups from '../AllGroups/AllGroups';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';
import FeaturedGroups from '../FeaturedGroups/FeaturedGroups';

const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
};

const Home = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        AOS.init({
            duration: 800,
            offset: 100,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <>
            <Helmet>
                <title>HobbyHub | Home</title>
            </Helmet>
            <motion.div {...fadeInUp}>
                <Hero />
            </motion.div>

            <div data-aos="fade-up">
                <FeaturedGroups />
            </div>

            <div data-aos="fade-up">
                <HobbyHubWorks />
            </div>

            <div data-aos="fade-up">
                <PopularCategories />
            </div>
        </>
    );
};

export default Home;

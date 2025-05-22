import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../../Components/Hero/Hero';
import HobbyHubWorks from '../../Components/HobbyHubWorks/HobbyHubWorks';
import PopularCategories from '../../Components/PopularCategories/PopularCategories';
import AllGroups from '../AllGroups/AllGroups';

const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
};

const Home = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <motion.div {...fadeInUp}>
                <Hero />
            </motion.div>

            {/* <FeaturedGroup /> */}
            <AllGroups></AllGroups>
            <PopularCategories />
        </>
    );
};

export default Home;

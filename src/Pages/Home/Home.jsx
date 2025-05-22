import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../../Components/Hero/Hero';
import FeaturedGroup from '../../Components/FeaturedGroup/FeaturedGroup';
import HobbyHubWorks from '../../Components/HobbyHubWorks/HobbyHubWorks';
import PopularCategories from '../../Components/PopularCategories/PopularCategories';

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

            <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }}>
                <FeaturedGroup />
            </motion.div>

            <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.4 }}>
                <HobbyHubWorks />
            </motion.div>

            <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.6 }}>
                <PopularCategories />
            </motion.div>
        </>
    );
};

export default Home;

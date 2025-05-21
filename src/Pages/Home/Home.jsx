import React from 'react';
import Hero from '../../Components/Hero/Hero';
import FeaturedGroup from '../../Components/FeaturedGroup/FeaturedGroup';
import HobbyHubWorks from '../../Components/HobbyHubWorks/HobbyHubWorks';
import PopularCategories from '../../Components/PopularCategories/PopularCategories';

const Home = () => {
    return (
        <>
            <Hero></Hero>
            <FeaturedGroup></FeaturedGroup>
            <HobbyHubWorks></HobbyHubWorks>
            <PopularCategories></PopularCategories>
        </>
    );
};

export default Home;

import React, { use } from 'react';
import Hero from '../../Components/Hero/Hero';
import FeaturedGroup from '../../Components/FeaturedGroup/FeaturedGroup';
import HobbyHubWorks from '../../Components/HobbyHubWorks/HobbyHubWorks';
import PopularCategories from '../../Components/PopularCategories/PopularCategories';
import { AuthContext } from '../../Provider/AuthContext';

const Home = () => {
    // const name  = use(AuthContext)

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

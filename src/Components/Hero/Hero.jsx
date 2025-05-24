import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { useNavigate } from 'react-router'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react';
import slide1Animation from '../../../public/lotties/slide1.json'
import slide2Animation from '../../../public/lotties/slide2.json'
import slide3Animation from '../../../public/lotties/slide3.json'


const slides = [
    {
        animationData: slide1Animation,
        title: 'Discover Local Hobby Groups',
        subtitle: 'Connect with like-minded individuals in your area who share your passions.',
        button: 'Browse Group',
        path: '/my-groups',
    },
    {
        animationData: slide2Animation,
        title: 'Start Your Own Group',
        subtitle: 'Create a community around your favorite hobby and invite others to join.',
        button: 'Create Group',
        path: '/create-group',
    },
    {
        animationData: slide3Animation,
        title: 'Discover New Interests',
        subtitle: 'Explore a variety of hobbies and discover new passions with HobbyHub.',
        button: 'Browse Hobbies',
        path: '/groups',
    },
]

const Hero = () => {
    const navigate = useNavigate()

    return (
        <div className="relative">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{ delay: 5000 }}
                loop
                pagination={{ clickable: true }}
                navigation
                className="w-full h-[450px] md:h-[550px]"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="h-full flex items-center justify-center">
                        <div className="relative w-full h-full">
                            {/* Lottie animation */}
                            <Lottie
                                animationData={slide.animationData}
                                loop={true}
                                className="w-full h-full object-contain"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent z-10"></div>


                            {/* Text content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                        {slide.title}
                                    </h1>

                                    <p className="text-white text-base sm:text-lg md:text-xl mb-4 sm:mb-6 max-w-md sm:max-w-xl mx-auto px-6 sm:px-8 drop-shadow-[0_2px_3px_rgba(0,0,0,0.7)]">
                                        {slide.subtitle}
                                    </p>
                                    {slide.path && (
                                        <button
                                            onClick={() => navigate(slide.path)}
                                            className="bg-slate-900 text-white py-2 px-5 sm:px-6 rounded-lg hover:bg-slate-800 transition duration-300 ease-in-out text-sm sm:text-base cursor-pointer"
                                        >
                                            {slide.button}
                                        </button>
                                    )}
                                </motion.div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <style jsx>{`
                .swiper-button-prev,
                .swiper-button-next {
                    color: #1e3a8a;
                    z-index: 30;
                }
            `}</style>
        </div>
    )
}

export default Hero

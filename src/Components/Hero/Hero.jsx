import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { useNavigate } from 'react-router'
import { motion } from 'framer-motion'

const slides = [
    {
        image: '/images/hero-bg-1.jpg',
        title: 'Discover Local Hobby Groups',
        subtitle: 'Connect with like-minded individuals in your area who share your passions.',
        button: 'Browse Group',
        path: '/my-groups',
    },
    {
        image: '/images/hero-bg-2.jpg',
        title: 'Start Your Own Group',
        subtitle: 'Create a community around your favorite hobby and invite others to join.',
        button: 'Create Group',
        path: '/create-group',
    },
    {
        image: '/images/hero-bg-3.jpg',
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
                autoplay={{ delay: 3000 }}
                loop
                pagination={{ clickable: true }}
                navigation
                className="w-full h-[550px]"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="h-full">
                        <div
                            className="relative w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/50 z-10"></div>

                            {/* Text content */}
                            <div className="absolute inset-0 flex items-center justify-center text-center px-4 z-20">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                    <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                                    <p className="text-white text-base md:text-lg mb-6 max-w-xl mx-auto">
                                        {slide.subtitle}
                                    </p>

                                    {slide.path && (
                                        <button
                                            onClick={() => navigate(slide.path)}
                                            className="bg-slate-900 text-white py-2 px-6 rounded-lg hover:bg-slate-800 transition duration-300 ease-in-out"
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
                    color: #1e3a8a; /* Tailwind's blue-800 hex */
                    z-index: 30;
                }
            `}</style>
        </div>
    )
}

export default Hero

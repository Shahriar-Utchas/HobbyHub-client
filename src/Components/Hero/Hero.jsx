import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { useNavigate } from 'react-router'

const slides = [
    {
        image: '/images/hero-bg-1.jpg',
        title: 'Discover Local Hobby Groups',
        subtitle: 'Connect with like-minded individuals in your area who share your passions.',
        button: 'Browse Group',
        path: '/groups',
    },
    {
        image: '/images/hero-bg-2.jpg',
        title: 'Start Your Own Group',
        subtitle: 'Create a community around your favorite hobby and invite others to join.',
        button: 'Create Group',
        path: '/create',
    },
    {
        image: '/images/hero-bg-3.jpg',
        title: 'Discover New Interests',
        subtitle: 'Explore a variety of hobbies and discover new passions with HobbyHub.',
        button: 'Browse Hobbies',
        path: '/hobbies',
    },
]

const Hero = () => {
    const navigate = useNavigate();

    return (
        <div className="relative">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{ delay: 7000 }}
                loop
                pagination={{ clickable: true }}
                navigation
                className="w-full h-[400px]"
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
                                <div>
                                    <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                                    <p className="text-white text-lg mb-6">{slide.subtitle}</p>
                                    {slide.path && (
                                        <button
                                            onClick={() => navigate(slide.path)}
                                            className="bg-slate-900 text-white py-2 px-4 rounded hover:bg-slate-800 btn"
                                        >
                                            {slide.button}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Optional: fix navigation arrow color */}
            <style jsx>{`
                .swiper-button-prev,
                .swiper-button-next {
                    color: blue-800;
                    z-index: 30;
                }
            `}</style>
        </div>
    )
}

export default Hero

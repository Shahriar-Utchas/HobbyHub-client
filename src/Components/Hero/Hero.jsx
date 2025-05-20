import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const slides = [
    {
        image: '/images/hero-bg-1.jpg',
        title: 'Discover Local Hobby Groups',
        subtitle: 'Connect with like-minded individuals in your area who share your passions.',
        button: 'Browse Group',
    },
    {
        image: '/images/hero-bg-2.jpg',
        title: 'Start Your Own Group',
        subtitle: 'Create a community around your favorite hobby and invite others to join.',
        button: 'Create Group',
    },
    {
        image: '/images/hero-bg-3.jpg',
        title: 'Discover New Interests',
        subtitle: 'Explore a variety of hobbies and discover new passions with HobbyHub.',
        button: 'Browse Hobbies',
    },
]

const Hero = () => {
    return (
        <div>
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 7000 }}
                loop
                pagination={{ clickable: true }}
                className="h-[400px]"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="h-full">
                        <div
                            className="relative w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="absolute inset-0 bg-black/50 z-10"></div>

                            {/* Text container */}
                            <div className="absolute inset-0 flex items-center justify-center text-center px-4 z-20">
                                <div>
                                    <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                                    <p className="text-white text-lg mb-6">{slide.subtitle}</p>
                                    <button className="bg-slate-900 text-white py-2 px-4 rounded hover:bg-slate-800 btn">
                                        {slide.button}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Hero

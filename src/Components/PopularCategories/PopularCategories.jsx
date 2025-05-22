import React from 'react';

const categories = [
    'Drawing & Painting',
    'Photography',
    'Video Gaming',
    'Fishing',
    'Running',
    'Cooking',
    'Reading',
    'Writing',
    'Hiking',
    'Board Games',
];

const PopularCategories = () => {
    return (
        <section className="bg-gray-100 py-10 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">
                    Popular Categories
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-12">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white text-gray-700 font-semibold text-sm sm:text-base py-3 px-3 rounded-lg shadow-sm 
                                       hover:shadow-md hover:bg-blue-50 hover:text-blue-800 transform hover:scale-105 
                                       transition-all duration-300 ease-in-out h-[60px] flex items-center justify-center text-center"
                        >
                            {category}
                        </div>
                    ))}
                </div>

                <button className="bg-blue-700 hover:bg-blue-900 text-white font-semibold text-sm sm:text-base px-8 py-3 rounded-lg shadow-md transition duration-300 ease-in-out">
                    Explore All Categories
                </button>
            </div>
        </section>
    );
};

export default PopularCategories;

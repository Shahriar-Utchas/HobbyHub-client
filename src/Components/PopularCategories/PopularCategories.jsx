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
        <div className="bg-gray-100 py-16 px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
                Popular Categories
            </h2>

            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="bg-white text-gray-800 font-medium py-4 px-6 rounded-lg shadow-sm border 
                                   hover:shadow-lg hover:bg-blue-50 transform hover:scale-105 
                                   transition-all duration-300 ease-in-out"
                    >
                        {category}
                    </div>
                ))}
            </div>

            <button className="bg-blue-600 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-md shadow transition duration-300 ease-in-out cursor-pointer">
                Explore All Categories
            </button>
        </div>
    );
};

export default PopularCategories;

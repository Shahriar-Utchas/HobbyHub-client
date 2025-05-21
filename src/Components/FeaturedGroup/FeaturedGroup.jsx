import React from 'react';

const FeaturedGroup = () => {
    const groups = [
        {
            title: 'Urban Sketchers',
            location: 'Central Park, New York',
            date: 'June 15, 2023',
            description:
                'A group of artists who meet weekly to sketch urban landscapes and architecture. All skill levels welcome.',
            category: 'Drawing & Painting',
            spotsLeft: 7,
            image:
                'https://images.unsplash.com/photo-1582578656067-c6c2a1bdfb81?auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Bookworms Club',
            location: 'City Library, Boston',
            date: 'May 20, 2023',
            description:
                'Monthly book club where we discuss contemporary fiction and classics. Join us for engaging conversations.',
            category: 'Reading',
            spotsLeft: 2,
            image:
                'https://images.unsplash.com/photo-1581091012184-5c65c1a17a5e?auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Weekend Hikers',
            location: 'Blue Ridge Mountains',
            date: 'July 1, 2023',
            description:
                'Explore beautiful trails every weekend. Suitable for intermediate hikers who can handle 5-10 mile hikes.',
            category: 'Hiking',
            spotsLeft: 6,
            image:
                'https://images.unsplash.com/photo-1547045662-3f3c1c80e0b1?auto=format&fit=crop&w=800&q=80',
        },
    ];

    return (
        <>
            <div>
                <h2 className="text-4xl font-bold text-center my-6">Featured Groups</h2>
                <p className="text-center text-gray-600 mb-2">
                    Join our community and explore new interests with like-minded individuals.
                </p>
            </div>
            <div className="bg-slate-50 py-10 px-4 grid md:grid-cols-3 gap-6">
                {groups.map((group, index) => (
                    <div
                        key={index}
                        className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 bg-white"
                    >
                        <div className="relative">
                            <img src={group.image} alt={group.title} className="w-full h-48 object-cover" />
                            <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                                {group.category}
                            </span>
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-1">{group.title}</h3>
                            <p className="text-sm text-gray-600 mb-1">
                                <span className="mr-1">📍</span>
                                {group.location}
                            </p>
                            <p className="text-sm text-gray-600 mb-2">
                                <span className="mr-1">📅</span>
                                {group.date}
                            </p>
                            <p className="text-sm text-gray-700 mb-4 line-clamp-2">{group.description}</p>
                            <div className="mb-4">
                                <div className="h-2 w-full bg-gray-200 rounded-full">
                                    <div
                                        className="h-2 bg-blue-600 rounded-full"
                                        style={{ width: `${(10 - group.spotsLeft) * 10}%` }}
                                    ></div>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">{group.spotsLeft} spots left</p>
                            </div>
                            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 cursor-pointer transition">
                                See Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center my-6">
                <button className="bg-slate-900 text-white py-2 px-4 rounded-md hover:bg-slate-700 cursor-pointer transition">
                    View All Groups
                </button>
            </div>
        </>
    );
};

export default FeaturedGroup;

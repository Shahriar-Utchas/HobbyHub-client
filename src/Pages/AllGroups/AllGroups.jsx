import React from 'react';
import { Link, useLoaderData } from 'react-router';

const AllGroups = () => {
    const groupsData = useLoaderData();
    return (
        <>
            <div>
                <h2 className="text-4xl font-bold text-center my-6">Featured Groups</h2>
                <p className="text-center text-gray-600 mb-2">
                    Join our community and explore new interests with like-minded individuals.
                </p>
            </div>
            <div className="bg-slate-50 py-10 px-4 grid md:grid-cols-3 gap-6">
                {groupsData.map((group, index) => (
                    <div
                        key={index}
                        className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 bg-white"
                    >
                        <div className="relative">
                            <img src={group.imageUrl} alt={group.groupName} className="w-full h-48 object-cover" />
                            <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                                {group.hobbyCategory}
                            </span>
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-1">{group.groupName}</h3>
                            <p className="text-sm text-gray-600 mb-1">
                                <span className="mr-1">📍</span>
                                {group.meetingLocation}
                            </p>
                            <p className="text-sm text-gray-600 mb-2">
                                <span className="mr-1">📅</span>
                                {group.startDate}
                            </p>
                            <p className="text-sm text-gray-700 mb-4 line-clamp-2">{group.description}</p>
                            <div className="mb-4">
                                <div className="h-2 w-full bg-gray-200 rounded-full">
                                    <div
                                        className="h-2 bg-blue-600 rounded-full"
                                        style={{ width: `${(group.spot_taken / group.maxMembers) * 100}%` }}
                                    ></div>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">{(group.maxMembers - group.spot_taken)} spots left</p>
                            </div>
                            <Link to={`/GroupDetails/${group._id}`}>
                                <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-800 cursor-pointer transition">
                                    See Details
                                </button>
                            </Link>
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

export default AllGroups;
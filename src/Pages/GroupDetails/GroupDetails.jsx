import React, { useEffect, useContext } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Provider/AuthContext';

const GroupDetails = () => {
    const { user } = useContext(AuthContext);
    const groupData = useLoaderData();

    const {
        groupCreatorName,
        groupCreatorEmail,
        groupName,
        hobbyCategory,
        description,
        meetingLocation,
        maxMembers,
        startDate,
        imageUrl,
        spot_taken
    } = groupData;

    const progress = (spot_taken / maxMembers) * 100;

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="max-w-5xl mx-auto px-6 py-10">
            {/* Banner Image */}
            <div className="relative w-full h-64 rounded-xl overflow-hidden mb-10">
                <img src={imageUrl} alt={groupName} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                    <span className="text-white text-sm bg-black/60 px-3 py-1 rounded-full w-fit mb-2">
                        {hobbyCategory}
                    </span>
                    <h1 className="text-3xl md:text-4xl font-bold text-white">{groupName}</h1>
                </div>
            </div>

            {/* Main content */}
            <div className="grid md:grid-cols-3 gap-8">
                {/* Left side */}
                <div className="md:col-span-2 space-y-10">
                    {/* About */}
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">About this group</h2>
                        <p className="text-gray-700 text-base break-words">
                            {description}
                        </p>
                    </div>

                    {/* Meeting Details Card */}
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Meeting Details</h2>
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 grid sm:grid-cols-2 gap-4 text-gray-800">
                            <div>
                                <div className="text-sm text-gray-500">Location</div>
                                <div className="font-semibold">{meetingLocation}</div>
                            </div>
                            <div>
                                <div className="text-sm text-gray-500">Starting Date</div>
                                <div className="font-semibold">
                                    {new Date(startDate).toLocaleDateString()}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Organizer Info */}
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Organized by</h2>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-medium text-lg">
                                {groupCreatorName?.charAt(0)}
                            </div>

                            <div>
                                <div className="font-semibold">{groupCreatorName}</div>
                                <div className="text-sm text-gray-500">
                                    {groupCreatorEmail || "organizer@email.com"}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Right side: Status box */}
                <div className="bg-white rounded-xl border border-gray-200 shadow p-6 space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Group Status</h3>
                    <div className="text-sm text-gray-700">
                        <p>Members: <span className="font-bold">{spot_taken} / {maxMembers}</span></p>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                            className="bg-gray-800 h-3 rounded-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>

                    {/* Join Button */}
                    <button className="w-full bg-gray-900 hover:bg-black text-white py-2 rounded-md transition duration-300">
                        Join Group
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GroupDetails;

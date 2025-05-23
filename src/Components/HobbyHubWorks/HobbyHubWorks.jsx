import React from 'react';
import { Smile, Users, Info } from 'lucide-react';

const HobbyHubWorks = () => {
    return (
        <div className="bg-base py-16 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center  mb-12">
                How HobbyHub Works
            </h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Discover Card */}
                <div className="bg-base p-8 rounded-xl shadow-md text-center 
                                transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg border border-gray-300">
                    <div className="flex justify-center mb-6">
                        <div className="bg-blue-500 p-4 rounded-full">
                            <Smile className="text-base w-8 h-8" />
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold  mb-2">Discover</h3>
                    <p className="">
                        Browse through a variety of hobby groups in your area and find the ones that match your interests.
                    </p>
                </div>

                {/* Connect Card */}
                <div className="bg-base p-8 rounded-xl shadow-md text-center 
                                transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg border border-gray-300">
                    <div className="flex justify-center mb-6">
                        <div className="bg-orange-500 p-4 rounded-full">
                            <Users className="text-base w-8 h-8" />
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold  mb-2">Connect</h3>
                    <p className="">
                        Join groups and connect with people who share your passion. Make new friends and expand your network.
                    </p>
                </div>

                {/* Create Card */}
                <div className="bg-base p-8 rounded-xl shadow-md text-center 
                                transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg border border-gray-300">
                    <div className="flex justify-center mb-6">
                        <div className="bg-yellow-500 p-4 rounded-full">
                            <Info className="text-base w-8 h-8" />
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold  mb-2">Create</h3>
                    <p className="">
                        Start your own hobby group and invite others to join. Share your expertise and create a community around your passion.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HobbyHubWorks;

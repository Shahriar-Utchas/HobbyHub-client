import React from 'react';

const MyGroups = () => {
    return (
        <div className="min-h-screen bg-white p-8">
            {/* Top Bar */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-4xl font-bold text-gray-900">My Groups</h1>
                    <p className="text-gray-500 mt-1">Manage the hobby groups you've created</p>
                </div>
                <button className="bg-[#0F172A] text-white font-semibold px-6 py-2 rounded-md hover:opacity-90">
                    Create New Group
                </button>
            </div>

            {/* Empty State */}
            <div className="flex flex-col items-center justify-center mt-40 text-center">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">You haven't created any groups yet</h2>
                <p className="text-gray-500 mb-6">
                    Start by creating a new hobby group to connect with like-minded people
                </p>
                <button className="bg-[#0F172A] text-white font-semibold px-6 py-3 rounded-md hover:opacity-90">
                    Create Your First Group
                </button>
            </div>
        </div>
    );
};

export default MyGroups;

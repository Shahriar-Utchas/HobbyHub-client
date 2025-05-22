import React from 'react';

const CreateGroups = () => {
    return (
        <div className="max-w-3xl mx-auto py-14 px-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Create a New Group</h1>
            <p className="text-gray-600 mb-8 text-lg">
                Start a community around your hobby or passion.
            </p>

            <form className="space-y-6">
                {/* Group Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Group Name</label>
                    <input
                        type="text"
                        placeholder="Enter group name"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                </div>

                {/* Hobby Category */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Hobby Category</label>
                    <select
                        className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    >
                        <option>Select a category</option>
                        <option>Sports</option>
                        <option>Music</option>
                        <option>Art</option>
                        {/* Add more options as needed */}
                    </select>
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                        rows="4"
                        placeholder="Describe your group"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    ></textarea>
                </div>

                {/* Meeting Location */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Meeting Location</label>
                    <input
                        type="text"
                        placeholder="Where will you meet?"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                </div>

                {/* Maximum Members */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Maximum Members</label>
                    <input
                        type="number"
                        defaultValue="10"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                        Maximum number of people who can join your group
                    </p>
                </div>

                {/* Start Date */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                    <input
                        type="date"
                        defaultValue="2025-05-21"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                </div>

                {/* Image URL */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                    <input
                        type="text"
                        placeholder="Enter an image URL for your group"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                        Provide a URL to an image that represents your group
                    </p>
                </div>

                {/* Group Creator (Static Info Box) */}
                <div className="border border-gray-300 rounded-md p-4 bg-gray-50 shadow-sm">
                    <p className="font-medium text-gray-700 mb-2">Group Creator</p>
                    <div className="flex justify-between text-sm">
                        <div>
                            <p className="text-gray-500">Name:</p>
                            <p className="font-semibold text-gray-800">Name</p>
                        </div>
                        <div className="text-right">
                            <p className="text-gray-500">Email:</p>
                            <p className="font-semibold text-gray-800">mail</p>
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-700 text-white font-semibold py-3 rounded-md hover:bg-blue-800 transition duration-300"
                >
                    Create Group
                </button>
            </form>
        </div>
    );
};

export default CreateGroups;

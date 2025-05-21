import React from 'react';

const CreateGroups = () => {
    return (
        <div className="max-w-2xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Create a New Group</h1>
            <p className="text-gray-500 mb-6">Start a community around your hobby or passion</p>

            <form className="space-y-5">
                {/* Group Name */}
                <div>
                    <label className="block font-medium text-gray-700 mb-1">Group Name</label>
                    <input
                        type="text"
                        placeholder="Enter group name"
                        className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Hobby Category */}
                <div>
                    <label className="block font-medium text-gray-700 mb-1">Hobby Category</label>
                    <select
                        className="w-full border rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    <label className="block font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                        rows="4"
                        placeholder="Describe your group"
                        className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>

                {/* Meeting Location */}
                <div>
                    <label className="block font-medium text-gray-700 mb-1">Meeting Location</label>
                    <input
                        type="text"
                        placeholder="Where will you meet?"
                        className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Maximum Members */}
                <div>
                    <label className="block font-medium text-gray-700 mb-1">Maximum Members</label>
                    <input
                        type="number"
                        defaultValue="10"
                        className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                        Maximum number of people who can join your group
                    </p>
                </div>

                {/* Start Date */}
                <div>
                    <label className="block font-medium text-gray-700 mb-1">Start Date</label>
                    <input
                        type="date"
                        defaultValue="2025-05-21"
                        className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Image URL */}
                <div>
                    <label className="block font-medium text-gray-700 mb-1">Image URL</label>
                    <input
                        type="text"
                        placeholder="Enter an image URL for your group"
                        className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                        Provide a URL to an image that represents your group
                    </p>
                </div>

                {/* Group Creator */}
                <div className="border rounded-md p-4 bg-gray-50">
                    <p className="font-medium text-gray-700 mb-1">Group Creator</p>
                    <div className="flex justify-between">
                        <div>
                            <p className="text-sm text-gray-600">Name:</p>
                            <p className="font-semibold text-sm text-gray-800">Name</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-gray-600">Email:</p>
                            <p className="font-semibold text-sm text-gray-800">mail</p>
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-[#0F172A] text-white font-semibold py-2 rounded-md hover:opacity-90"
                >
                    Create Group
                </button>
            </form>
        </div>
    );
};

export default CreateGroups;

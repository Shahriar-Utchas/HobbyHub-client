import React, { useState, useContext, useEffect } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthContext';

const CreateGroups = () => {
    const { user } = useContext(AuthContext);
    const [isCreating, setIsCreating] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsCreating(true);

        const form = e.target;
        const formData = new FormData(form);
        const initial_groupData = Object.fromEntries(formData.entries());
        const groupData = {
            groupCreatorName: user.displayName,
            groupCreatorEmail: user.email,
            ...initial_groupData,
            spot_taken: 1,
        };

        fetch('https://hobby-hub-server-side.vercel.app/createGroup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(groupData),
        })
            .then((response) => response.json())
            .then((data) => {
                setIsCreating(false);
                Swal.fire({
                    icon: 'success',
                    title: 'Group Created!',
                    text: 'Your group has been created successfully.',
                    confirmButtonColor: '#2563eb',
                });
                form.reset();
            })
            .catch((error) => {
                setIsCreating(false);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong! Please try again.',
                    confirmButtonColor: '#dc2626',
                });
                console.error('Error:', error);
            });
    };

    return (
        <div className="max-w-3xl mx-auto py-14 px-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Create a New Group</h1>
            <p className=" mb-8 text-lg">
                Start a community around your hobby or passion.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-sm font-medium  mb-1">Group Name</label>
                    <input
                        type="text"
                        placeholder="Enter group name"
                        name="groupName"
                        required
                        className="w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Hobby Category</label>
                    <select
                        name="hobbyCategory"
                        required
                        defaultValue=""
                        className="w-full border border-gray-300 rounded-md px-4 py-2 bg-base-100 text-base-content shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    >
                        <option value="" disabled hidden>
                            Select a category
                        </option>

                        <option value="Sports" className="text-base-content bg-base-100">Sports</option>

                        <option value="Movies" className="text-base-content bg-base-100">Movies</option>

                        <option value="Music" className="text-base-content bg-base-100">Music</option>

                        <option value="Video Gaming" className="text-base-content bg-base-100">Video Gaming</option>

                        <option value="Photography" className="text-base-content bg-base-100">Photography</option>

                        <option value="Art" className="text-base-content bg-base-100">Art</option>

                        <option value="Reading" className="text-base-content bg-base-100">Reading</option>

                        <option value="Writing " className="text-base-content bg-base-100">Writing </option>

                        <option value="Cooking" className="text-base-content bg-base-100">Cooking</option>

                    </select>
                </div>


                <div>
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <textarea
                        rows="4"
                        placeholder="Describe your group"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        name="description"
                        required
                    ></textarea>
                </div>

                <div>
                    <label className="block text-sm font-medium  mb-1">Meeting Location</label>
                    <input
                        type="text"
                        placeholder="Where will you meet?"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        name="meetingLocation"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium  mb-1">Maximum Members</label>
                    <input
                        type="number"
                        defaultValue="10"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        name="maxMembers"
                        required
                    />
                    <p className="text-xs  mt-1">
                        Maximum number of people who can join your group
                    </p>
                </div>

                <div>
                    <label className="block text-sm font-medium  mb-1">Start Date</label>
                    <input
                        type="date"
                        defaultValue={new Date().toISOString().split('T')[0]}
                        className="w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        name="startDate"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium  mb-1">Image URL</label>
                    <input
                        type="text"
                        placeholder="Enter an image URL for your group"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        name="imageUrl"
                        required
                    />
                    <p className="text-xs  mt-1">
                        Provide a URL to an image that represents your group
                    </p>
                </div>

                <div className="border border-gray-300 rounded-md p-4 bg-base shadow-sm  cursor-not-allowed">
                    <p className="font-medium text-base mb-2">Group Creator</p>
                    <div className="flex justify-between text-sm">
                        <p className="text-gray-500">{user.displayName}</p>
                        <p className="text-gray-500 text-right">{user.email}</p>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isCreating}
                    className={`w-full font-semibold py-3 rounded-md transition duration-300 ${isCreating
                        ? 'bg-blue-400 cursor-not-allowed'
                        : 'bg-blue-700 hover:bg-blue-800 text-white'
                        }`}
                >
                    {isCreating ? 'Creating...' : 'Create Group'}
                </button>
            </form>
        </div>
    );
};

export default CreateGroups;

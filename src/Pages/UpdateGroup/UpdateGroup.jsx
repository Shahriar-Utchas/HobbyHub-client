import React, { use, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { AuthContext } from '../../Provider/AuthContext';
import { nav } from 'framer-motion/client';
import Swal from 'sweetalert2';

const UpdateGroup = () => {
    const { user } = useContext(AuthContext);
    const id = useParams();
    const [groups, setGroups] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/group/${id.id}`)
            .then(res => res.json())
            .then(data => setGroups(data));
    }, [id]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

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
        spot_taken,
    } = groups;

    const navigate = useNavigate();

    if (groupCreatorEmail != user?.email) {
        navigate('/');
    }
    const [isUpdating, setIsUpdating] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsUpdating(true);

        const form = e.target;
        const formData = new FormData(form);
        const initial_groupData = Object.fromEntries(formData.entries());
        const UpdatedGroupData = {
            groupCreatorName,
            groupCreatorEmail,
            ...initial_groupData,
            spot_taken,
        };

        //Update the group data
        fetch(`http://localhost:3000/updateGroup/${id.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(UpdatedGroupData),
        })
            .then((response) => response.json())
            .then((data) => {
                setIsUpdating(false);
                Swal.fire({
                    icon: 'success',
                    title: 'Group Updated!',
                    text: 'Your group has been Updated successfully.',
                    confirmButtonColor: '#2563eb',
                });
                navigate('/my-groups');
            })
            .catch((error) => {
                setIsCreating(false);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong! Please try again.',
                    confirmButtonColor: '#dc2626',
                });
            });
    };

    return (
        <div>
            <div className="max-w-3xl mx-auto py-14 px-6">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Update Group Information</h1>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Group Name</label>
                        <input
                            type="text"
                            placeholder="Enter group name"
                            name="groupName"
                            required
                            defaultValue={groupName}
                            className="w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Hobby Category</label>
                        <select
                            name="hobbyCategory"
                            required
                            defaultValue={hobbyCategory}
                            className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        >
                            <option value="" disabled hidden>
                                Select a category
                            </option>
                            <option value="Sports">Sports</option>
                            <option value="Music">Music</option>
                            <option value="Art">Art</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea
                            rows="4"
                            placeholder="Describe your group"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            name="description"
                            required
                            defaultValue={description}
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Meeting Location</label>
                        <input
                            type="text"
                            placeholder="Where will you meet?"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            name="meetingLocation"
                            required
                            defaultValue={meetingLocation}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Maximum Members</label>
                        <input
                            type="number"
                            defaultValue={maxMembers}
                            className="w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            name="maxMembers"
                            required
                        />
                        <p className="text-xs text-gray-500 mt-1">
                            Maximum number of people who can join your group
                        </p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                        <input
                            type="date"
                            defaultValue={startDate}
                            className="w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            name="startDate"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                        <input
                            type="text"
                            placeholder="Enter an image URL for your group"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            name="imageUrl"
                            required
                            defaultValue={imageUrl}
                        />
                        <p className="text-xs text-gray-500 mt-1">
                            Provide a URL to an image that represents your group
                        </p>
                    </div>

                    <div className="border border-gray-300 rounded-md p-4 bg-gray-50 shadow-sm  cursor-not-allowed">
                        <p className="font-medium text-gray-700 mb-2">Group Creator</p>
                        <div className="flex justify-between text-sm">
                            <p className="text-gray-500">{groupCreatorName}</p>
                            <p className="text-gray-500 text-right">{groupCreatorEmail}</p>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isUpdating}
                        className={`w-full font-semibold py-3 rounded-md transition duration-300 ${isUpdating
                            ? 'bg-blue-400 cursor-not-allowed'
                            : 'bg-blue-700 hover:bg-blue-800 text-white'
                            }`}
                    >
                        {isUpdating ? 'Updating...' : 'Update Group'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateGroup;
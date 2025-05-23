import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Provider/AuthContext';
import Swal from 'sweetalert2';

const MyGroups = () => {
    const { user } = useContext(AuthContext);
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://hobby-hub-server-side.vercel.app/groupByEmail/${user.email}`)
                .then(res => res.json())
                .then(data => setGroups(data));
        }
    }, [user]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const handleDelete = async (groupId) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        });

        if (result.isConfirmed) {
            fetch(`https://hobby-hub-server-side.vercel.app/deleteGroup/${groupId}`, {
                method: 'DELETE',
            })
                .then(res => {
                    if (res.ok) {
                        setGroups(prevGroups => prevGroups.filter(g => g._id !== groupId));
                        Swal.fire('Deleted!', 'Your group has been deleted.', 'success');
                    } else {
                        Swal.fire('Failed!', 'Failed to delete the group.', 'error');
                    }
                })
                .catch(() => Swal.fire('Error!', 'Error deleting the group.', 'error'));
        }
    };

    return (
        <div className="min-h-screen bg-base p-8">
            {/* Top Bar */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-4xl font-bold">My Groups</h1>
                    <p className="text-gray-500 mt-1">Manage the hobby groups you've created</p>
                </div>
                <Link to="/create-group">
                    <button className="bg-[#0F172A] text-white font-semibold px-6 py-2 rounded-md hover:opacity-90">
                        Create New Group
                    </button>
                </Link>
            </div>

            {/* Check if groups exist */}
            {groups.length === 0 ? (
                <div className="flex flex-col items-center justify-center mt-40 text-center">
                    <h2 className="text-xl font-semibold mb-2">You haven't created any groups yet</h2>
                    <p className="text-gray-500 mb-6">
                        Start by creating a new hobby group to connect with like-minded people
                    </p>
                    <Link to="/create-group">
                        <button className="bg-[#0F172A] text-white font-semibold px-6 py-3 rounded-md hover:opacity-90">
                            Create Your First Group
                        </button>
                    </Link>
                </div>
            ) : (
                <div className="grid md:grid-cols-3 gap-6">
                    {groups.map(group => (
                        <div
                            key={group._id}
                            className="border border-gray-300 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 bg-base"
                        >
                            <div className="relative">
                                <img src={group.imageUrl} alt={group.groupName} className="w-full h-48 object-cover" />
                                <span className="absolute top-2 right-2 bg-orange-500 text-xs px-2 py-1 rounded-full">
                                    {group.hobbyCategory}
                                </span>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-1">{group.groupName}</h3>
                                <p className="text-sm mb-1">
                                    <span className="mr-1">📍</span>
                                    {group.meetingLocation}
                                </p>
                                <p className="text-sm mb-2">
                                    <span className="mr-1">📅</span>
                                    {new Date(group.startDate).toLocaleDateString()}
                                </p>
                                <p className="text-sm mb-4 line-clamp-2">{group.description}</p>
                                <div className="mb-4">
                                    <div className="h-2 w-full bg-gray-200 rounded-full">
                                        <div
                                            className="h-2 bg-blue-600 rounded-full"
                                            style={{ width: `${(group.spot_taken / group.maxMembers) * 100}%` }}
                                        ></div>
                                    </div>
                                    <p className="text-xs mt-1">{group.maxMembers - group.spot_taken} spots left</p>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-2">
                                    <Link to={`/groupDetails/${group._id}`} className="w-full">
                                        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-800 transition">
                                            See Details
                                        </button>
                                    </Link>
                                    <Link to={`/updateGroup/${group._id}`} className="w-full">
                                        <button className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition">
                                            Update
                                        </button>
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(group._id)}
                                        className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyGroups;

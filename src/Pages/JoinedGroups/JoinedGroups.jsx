import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../Provider/AuthContext';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { LogOut, Info } from 'lucide-react';

const JoinedGroups = () => {
    const { user } = useContext(AuthContext);
    const [joinedGroups, setJoinedGroups] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/checkUserGroup/${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                    setJoinedGroups(data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error('Failed to load groups:', err);
                    setLoading(false);
                });
        }
    }, [user]);

    const handleLeaveGroup = (groupId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will leave this group.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, leave it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/leaveGroup/${groupId}/${user.email}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire('Left!', 'You have left the group.', 'success');
                            setJoinedGroups((prev) =>
                                prev.filter((group) => group.groupId !== groupId)
                            );
                        }
                    })
                    .catch((err) => console.error('Leave group failed:', err));
            }
        });
    };

    if (loading) {
        return <div className="text-center py-10 font-medium">Loading groups...</div>;
    }

    if (joinedGroups.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center mt-40 text-center my-30">
                <h2 className="text-xl font-semibold mb-2">You haven't Joined any groups yet</h2>
                <p className="text-gray-500 mb-6">
                    Start by joining a new hobby group to connect with like-minded people
                </p>
                <Link to="/groups">
                    <button className="bg-[#0F172A] text-white font-semibold px-6 py-3 rounded-md hover:opacity-90">
                        Explore Group
                    </button>
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-5xl mx-auto px-4 py-10">
            <h1 className="text-2xl font-bold mb-6">Groups You've Joined</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {joinedGroups.map((group) => (
                    <div
                        key={group.groupId}
                        className="border border-gray-300 p-6 rounded-lg shadow hover:shadow-md transition"
                    >
                        <h2 className="text-xl font-semibold mb-2">{group.groupName}</h2>
                        <p className="text-gray-600 mb-4">Category: {group.hobbyCategory}</p>
                        <div className="flex gap-4">
                            <button
                                onClick={() => navigate(`/GroupDetails/${group.groupId}`)}
                                className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded"
                            >
                                <Info size={16} /> Details
                            </button>
                            <button
                                onClick={() => handleLeaveGroup(group.groupId)}
                                className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-red-600 hover:bg-red-700 rounded"
                            >
                                <LogOut size={16} /> Leave
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JoinedGroups;

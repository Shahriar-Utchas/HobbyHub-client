import React, { useEffect, useContext, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Provider/AuthContext';
import Swal from 'sweetalert2';

const GroupDetails = () => {
    const { user } = useContext(AuthContext);
    const groupData = useLoaderData();

    const [joined, setJoined] = useState(false);
    const [loading, setLoading] = useState(false);
    const [spotTaken, setSpotTaken] = useState(groupData.spot_taken);

    const {
        _id,
        groupCreatorName,
        groupCreatorEmail,
        groupName,
        hobbyCategory,
        description,
        meetingLocation,
        maxMembers,
        startDate,
        imageUrl
    } = groupData;

    const progress = (spotTaken / maxMembers) * 100;

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Check if user has already joined the group
        if (user?.email) {
            fetch(`https://hobby-hub-server-side.vercel.app/checkUserJoined/${user.email}/${_id}`)
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        setJoined(true);
                    }
                })
                .catch(err => {
                    console.error('Check join error:', err);
                });
        }
    }, [user, _id]);

    const handleJoinGroup = () => {
        setLoading(true);
        const userData = {
            userName: user.displayName,
            userEmail: user.email,
            groupId: _id,
            groupName,
            hobbyCategory,
        };

        fetch('https://hobby-hub-server-side.vercel.app/joinGroup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then((res) => res.json())
            .then(() => {
                return fetch(`https://hobby-hub-server-side.vercel.app/updateGroupSpot/${_id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
            })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0 || data.upsertedCount > 0) {
                    setSpotTaken((prev) => prev + 1);
                    setJoined(true);
                    Swal.fire({
                        icon: 'success',
                        title: 'Joined!',
                        text: 'You have successfully joined the group.',
                        timer: 1000,
                        showConfirmButton: false,
                    });
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                Swal.fire('Error', 'Failed to join group', 'error');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="max-w-5xl mx-auto px-6 py-10">
            <div className="relative w-full h-64 rounded-xl overflow-hidden mb-10">
                <img src={imageUrl} alt={groupName} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                    <span className="text-sm text-white bg-black/60 px-3 py-1 rounded-full w-fit mb-2">
                        {hobbyCategory}
                    </span>
                    <h1 className="text-3xl text-white md:text-4xl font-bold">{groupName}</h1>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-10">
                    <div>
                        <h2 className="text-xl font-semibold mb-2">About this group</h2>
                        <p className="text-base break-words">{description}</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-4">Meeting Details</h2>
                        <div className="bg-base border border-gray-300 rounded-lg p-4 grid sm:grid-cols-2 gap-4">
                            <div>
                                <div className="text-sm">Location</div>
                                <div className="font-semibold">{meetingLocation}</div>
                            </div>
                            <div>
                                <div className="text-sm">Starting Date</div>
                                <div className="font-semibold">{new Date(startDate).toLocaleDateString()}</div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-4">Organized by</h2>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-medium text-lg">
                                {groupCreatorName?.charAt(0)}
                            </div>
                            <div>
                                <div className="font-semibold">{groupCreatorName}</div>
                                <div className="text-sm">{groupCreatorEmail || "organizer@email.com"}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-base rounded-xl border border-gray-300 shadow p-6 space-y-4">
                    <h3 className="text-lg font-semibold">Group Status</h3>
                    <div className="text-sm">
                        <p>Members: <span className="font-bold">{spotTaken} / {maxMembers}</span></p>
                    </div>

                    <div className="w-full bg-gray-300 rounded-full h-3">
                        <div
                            className="bg-gray-800 h-3 rounded-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>

                    <button
                        onClick={handleJoinGroup}
                        disabled={joined || loading}
                        className={`w-full py-2 rounded-md transition duration-300 border border-gray-300 ${joined ? 'bg-green-600 text-white' :
                            loading ? 'bg-gray-400 text-white' :
                                'bg-gray-900 hover:bg-black text-white'
                            }`}
                    >
                        {joined ? 'Joined' : loading ? 'Joining...' : 'Join Group'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GroupDetails;

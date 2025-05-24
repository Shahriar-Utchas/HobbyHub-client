import React, { use, useEffect } from 'react';
import { AuthContext } from '../../Provider/AuthContext';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet';

const Profile = () => {
    const { user } = use(AuthContext);
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    return (
        <div>
            <Helmet>
                <title>HobbyHub | My Profile</title>
            </Helmet>
            <div className="flex items-center justify-center bg-base">
                <div className="p-4 text-center">
                    <h1 className="text-2xl font-semibold mb-4">My Profile</h1>

                    <div className="mb-4">
                        <img
                            src={user?.photoURL || 'https://via.placeholder.com/150'}
                            alt="Profile"
                            className="rounded-full w-32 h-32 mb-4 mx-auto transition duration-300 hover:scale-105 hover:ring-4 hover:ring-blue-300"
                        />
                        <p><strong>Name:</strong> {user?.displayName || 'No name available'}</p>
                        <p><strong>Email:</strong> {user?.email}</p>
                    </div>

                    <Link to="/">
                        <button className="bg-slate-800 text-white px-4 py-2 rounded-xl transition duration-300 hover:bg-slate-700 hover:scale-105 cursor-pointer">
                            Go Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Profile;
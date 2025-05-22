import React, { use, useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router';
import { Home, Users, PlusCircle, UserCircle, Menu, LogIn, UserPlus } from 'lucide-react';
import { AuthContext } from '../../Provider/AuthContext';

const Navbar = () => {
    const { user, logout } = use(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const profileRef = useRef(null);

    const toggleMobileMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleProfileMenu = () => setIsProfileOpen((prev) => !prev);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setIsProfileOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const navLinkClass = ({ isActive }) =>
        `flex items-center gap-1 transition ${isActive
            ? 'text-blue-800 underline underline-offset-8'
            : 'text-slate-700 hover:text-blue-800'
        }`;

    return (
        <nav className="bg-white shadow-sm px-4 lg:px-8 py-2 relative z-50">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-slate-500 to-blue-500 flex items-center justify-center">
                        <img src="/images/icon.png" alt="logo" className="w-6 h-6" />
                    </div>
                    <span className="text-xl font-bold text-slate-800">
                        <span className="text-slate-900">Hobby</span>
                        <span className="text-blue-500">Hub</span>
                    </span>
                </div>

                {/* Desktop Nav */}
                <ul className="hidden lg:flex gap-6">
                    <li><NavLink to="/" className={navLinkClass}><Home className="w-4 h-4" /> Home</NavLink></li>
                    <li><NavLink to="/groups" className={navLinkClass}><Users className="w-4 h-4" /> All Groups</NavLink></li>
                    {user && (
                        <>
                            <li>
                                <NavLink to="/create-group" className={navLinkClass}>
                                    <PlusCircle className="w-4 h-4" /> Create Group
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/my-groups" className={navLinkClass}>
                                    <UserCircle className="w-4 h-4" /> My Groups
                                </NavLink>
                            </li>
                        </>
                    )}

                </ul>

                {/* Auth / Profile */}
                <div className="flex items-center gap-2">
                    {user ? (
                        <div className="relative group" ref={profileRef}>
                            {/* Profile Image */}
                            <img
                                src={user.photoURL || '/images/default-avatar.png'}
                                alt="User"
                                onClick={toggleProfileMenu}
                                className="w-10 h-10 rounded-full border-2 border-slate-300 cursor-pointer"
                            />

                            {/* Tooltip on Hover */}
                            <div className="absolute right-full top-1/2 -translate-y-1/2 mr-2 bg-black text-white text-xs px-3 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition z-50">
                                {user.displayName || 'User'}
                            </div>


                            {/* Dropdown */}
                            {isProfileOpen && (
                                <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-lg ring-1 ring-slate-200 z-50 animate-fade-in">
                                    <NavLink
                                        to="/profile"
                                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg"
                                    >
                                        Profile
                                    </NavLink>
                                    <button
                                        onClick={logout}
                                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <NavLink
                                to="/login"
                                className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-slate-900 border border-slate-200 rounded-lg bg-white hover:bg-slate-100 transition"
                            >
                                <LogIn className="w-4 h-4" />
                                Login
                            </NavLink>
                            <NavLink
                                to="/register"
                                className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition"
                            >
                                <UserPlus className="w-4 h-4" />
                                Register
                            </NavLink>
                        </>
                    )}

                    {/* Mobile Menu Toggle */}
                    <button
                        className="btn btn-ghost btn-circle lg:hidden"
                        onClick={toggleMobileMenu}
                    >
                        <Menu className="w-5 h-5 text-slate-800" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden mt-3 bg-white shadow-md rounded-md p-4 absolute right-4 top-full w-60 z-40">
                    <ul className="flex flex-col gap-3 text-slate-700 font-medium">
                        <li><NavLink to="/" className={navLinkClass}><Home className="w-4 h-4" /> Home</NavLink></li>
                        <li><NavLink to="/groups" className={navLinkClass}><Users className="w-4 h-4" /> All Groups</NavLink></li>
                        <li><NavLink to="/create-group" className={navLinkClass}><PlusCircle className="w-4 h-4" /> Create Group</NavLink></li>
                        <li><NavLink to="/my-groups" className={navLinkClass}><UserCircle className="w-4 h-4" /> My Groups</NavLink></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

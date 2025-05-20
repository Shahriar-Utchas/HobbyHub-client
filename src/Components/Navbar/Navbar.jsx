import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { Home, Users, PlusCircle, UserCircle, Menu, LogIn, UserPlus } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMobileMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinkClass = ({ isActive }) =>
        `flex items-center gap-1 transition ${
            isActive
                ? 'text-blue-800 underline underline-offset-8'
                : 'text-slate-700 hover:text-blue-800'
        }`;

    return (
        <nav className="bg-white shadow-sm px-4 lg:px-8 py-2 relative z-50">
            <div className="flex items-center justify-between">
                {/* Left: Logo and Text */}
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-slate-500 to-blue-500 flex items-center justify-center">
                        <img src="/images/icon.png" alt="logo" className="w-6 h-6" />
                    </div>
                    <span className="text-xl font-bold text-slate-800">
                        <span className="text-slate-900">Hobby</span>
                        <span className="text-blue-500">Hub</span>
                    </span>
                </div>

                {/* Center: Nav links (desktop only) */}
                <ul className="hidden lg:flex gap-6">
                    <li>
                        <NavLink to="/" className={navLinkClass}>
                            <Home className="w-4 h-4" />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/groups" className={navLinkClass}>
                            <Users className="w-4 h-4" />
                            All Groups
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/create-group" className={navLinkClass}>
                            <PlusCircle className="w-4 h-4" />
                            Create Group
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/my-groups" className={navLinkClass}>
                            <UserCircle className="w-4 h-4" />
                            My Groups
                        </NavLink>
                    </li>
                </ul>

                {/* Right: Auth Buttons + Hamburger */}
                <div className="flex items-center gap-2">
                    <NavLink
                        to="/login"
                        className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-slate-900 border border-slate-200 rounded-lg bg-white hover:bg-slate-100 transition-colors duration-200"
                    >
                        <LogIn className="w-4 h-4" />
                        Login
                    </NavLink>

                    <NavLink
                        to="/register"
                        className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors duration-200"
                    >
                        <UserPlus className="w-4 h-4" />
                        Register
                    </NavLink>

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
                <div className="lg:hidden mt-3 bg-white shadow-md rounded-md p-4 absolute right-4 top-full w-60">
                    <ul className="flex flex-col gap-3 text-slate-700 font-medium">
                        <li>
                            <NavLink to="/" className={navLinkClass}>
                                <Home className="w-4 h-4" />
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/groups" className={navLinkClass}>
                                <Users className="w-4 h-4" />
                                All Groups
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/create-group" className={navLinkClass}>
                                <PlusCircle className="w-4 h-4" />
                                Create Group
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/my-groups" className={navLinkClass}>
                                <UserCircle className="w-4 h-4" />
                                My Groups
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

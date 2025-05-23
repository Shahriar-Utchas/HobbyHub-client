import React, { use, useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router';
import { Home, Users, PlusCircle, UserCircle, Menu, LogIn, UserPlus } from 'lucide-react';
import { AuthContext } from '../../Provider/AuthContext';
import ToggleTheme from '../ToggleTheme/ToggleTheme';

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
    `flex items-center gap-1 transition ${isActive ? 'text-primary underline underline-offset-8' : 'text-base-content hover:text-primary'
    }`;

  return (
    <nav className="bg-base-100 shadow-sm px-4 lg:px-8 py-2 relative z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-slate-500 to-blue-500">
            <img src="/images/icon.png" alt="logo" className="w-6 h-6" />
          </Link>
          <Link to="/" className="hidden lg:flex items-center gap-2">
            <span className="text-xl font-bold text-base-content">
              <span className="text-base-content">Hobby</span>
              <span className="text-blue-500">Hub</span>
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-6">
          <li><NavLink to="/" className={navLinkClass}><Home className="w-4 h-4" /> Home</NavLink></li>
          <li><NavLink to="/groups" className={navLinkClass}><Users className="w-4 h-4" /> All Groups</NavLink></li>
          {user && (
            <>
              <li><NavLink to="/create-group" className={navLinkClass}><PlusCircle className="w-4 h-4" /> Create Group</NavLink></li>
              <li><NavLink to="/my-groups" className={navLinkClass}><UserCircle className="w-4 h-4" /> My Groups</NavLink></li>
            </>
          )}
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-1 lg:gap-4">
          {user ? (
            <div className="relative group" ref={profileRef}>
              <img
                src={user.photoURL || '/images/default-avatar.png'}
                alt="User"
                onClick={toggleProfileMenu}
                className="w-10 h-10 rounded-full border-2 border-slate-300 cursor-pointer"
              />
              <div className="absolute right-full top-1/2 -translate-y-1/2 mr-2 bg-neutral text-neutral-content text-xs px-3 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition z-50">
                {user.displayName || 'User'}
              </div>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-base-100 rounded-xl shadow-lg ring-1 ring-base-300 z-50 animate-fade-in">
                  <NavLink
                    to="/profile"
                    className="block px-4 py-2 text-sm text-base-content hover:bg-base-200 rounded-lg"
                  >
                    Profile
                  </NavLink>
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 text-sm text-error hover:bg-error-content/10 rounded-lg transition"
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
                className="flex items-center gap-1 px-3 py-1 text-xs font-semibold text-base-content border rounded-lg bg-base-100 hover:bg-base-200 transition lg:px-5 lg:py-2 lg:text-sm lg:gap-2"
              >
                <LogIn className="w-4 h-6 md:h-4" />
                Login
              </NavLink>

              <NavLink
                to="/register"
                className="flex items-center gap-1 px-3 py-1 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition lg:px-5 lg:py-2 lg:text-sm lg:gap-2"
              >
                <UserPlus className="w-4 h-6 md:h-4" />
                Register
              </NavLink>
            </>
          )}

          {/* Mobile Menu Toggle */}
          <button className="btn btn-ghost btn-circle p-1 lg:hidden" onClick={toggleMobileMenu}>
            <Menu className="w-5 h-5 text-base-content" />
          </button>

          {/* Theme Toggle */}
          <div className="pl-1">
            <ToggleTheme />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-3 bg-base-100 shadow-md rounded-md p-4 absolute right-4 top-full w-60 z-40">
          <ul className="flex flex-col gap-3 text-base-content font-medium">
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

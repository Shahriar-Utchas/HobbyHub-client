import React, { use, useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router';
import {
  Home, Users, PlusCircle, UserCircle,
  Menu, LogIn, UserPlus, Users2
} from 'lucide-react';
import { AuthContext } from '../../Provider/AuthContext';
import ToggleTheme from '../ToggleTheme/ToggleTheme';

const Navbar = () => {
  const { user, logout } = use(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const profileRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfileMenu = () => setIsProfileOpen((prev) => !prev);

  useEffect(() => {
    setIsProfileOpen(false);
  }, [user]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // If clicking the menu button, don't close it
      if (
        mobileMenuRef.current &&
        (mobileMenuRef.current.contains(event.target) || event.target.closest("#menu-toggle-btn"))
      ) {
        return;
      }

      setIsMenuOpen(false);

      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-1 transition ${isActive ? 'text-primary underline underline-offset-8' : 'text-base-content hover:text-primary'}`;

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-[1000] px-4 lg:px-8 py-2 transition-colors duration-300 ${isScrolled
      ? 'bg-transparent backdrop-blur shadow-none'
      : 'bg-base-200 shadow-md'
      }`}>
      <div className="flex items-center justify-between">
        {/* Left Section: Mobile Menu & Logo */}
        <div className="flex items-center gap-2">
          {/* Mobile Menu Toggle */}
          <button
            id="menu-toggle-btn"
            className="btn btn-ghost btn-circle p-1 lg:hidden"
            onClick={toggleMobileMenu}
          >
            <Menu className="w-5 h-5 text-base-content" />
          </button>


          {/* Logo */}
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
              <li><NavLink to="/joinedGroups" className={navLinkClass}><Users2 className="w-4 h-4" /> Joined Groups</NavLink></li>
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
                className="flex items-center gap-1 px-3 py-1 text-xs font-semibold text-base-content border rounded-lg bg-base-100 hover:bg-base-300 transition lg:px-5 lg:py-2 lg:text-sm lg:gap-2 hover:rounded-xl"
              >
                <LogIn className="w-4 h-6 md:h-4" />
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="flex items-center gap-1 px-3 py-1 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition lg:px-5 lg:py-2 lg:text-sm lg:gap-2 hover:rounded-xl"
              >
                <UserPlus className="w-4 h-6 md:h-4" />
                Register
              </NavLink>
            </>
          )}

          {/* Theme Toggle */}
          <div className="pl-1">
            <ToggleTheme />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden mt-3 bg-base-100 shadow-md rounded-md p-4 absolute left-4 top-full w-60 z-40"
        >
          <ul className="flex flex-col gap-3 text-base-content font-medium">
            <li><NavLink to="/" onClick={() => setIsMenuOpen(false)} className={navLinkClass}><Home className="w-4 h-4" /> Home</NavLink></li>
            <li><NavLink to="/groups" onClick={() => setIsMenuOpen(false)} className={navLinkClass}><Users className="w-4 h-4" /> All Groups</NavLink></li>
            {user && (
              <>
                <li><NavLink to="/create-group" onClick={() => setIsMenuOpen(false)} className={navLinkClass}><PlusCircle className="w-4 h-4" /> Create Group</NavLink></li>
                <li><NavLink to="/my-groups" onClick={() => setIsMenuOpen(false)} className={navLinkClass}><UserCircle className="w-4 h-4" /> My Groups</NavLink></li>
                <li><NavLink to="/joinedGroups" onClick={() => setIsMenuOpen(false)} className={navLinkClass}><Users2 className="w-4 h-4" /> Joined Groups</NavLink></li>
              </>
            )}
          </ul>

        </div>
      )}
    </nav>
  );
};

export default Navbar;

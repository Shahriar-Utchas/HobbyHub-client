import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#0e1629] text-white py-10 px-6 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Logo and Description */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">
                        <span className="text-white">Hobby</span>
                        <span className="text-indigo-500">Hub</span>
                    </h2>
                    <p className="text-sm text-slate-300">
                        Connect with people who share your passions and interests. Join or create local
                        hobby groups in your area.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-slate-300">
                        <li><a href="/" className="hover:text-white transition">Home</a></li>
                        <li><a href="/groups" className="hover:text-white transition">All Groups</a></li>
                        <li><a href="/create-group" className="hover:text-white transition">Create Group</a></li>
                    </ul>
                </div>

                {/* Popular Hobbies */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Popular Hobbies</h3>
                    <ul className="space-y-2 text-slate-300">
                        <li>Photography</li>
                        <li>Hiking</li>
                        <li>Cooking</li>
                        <li>Reading</li>
                        <li>Painting</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Contact</h3>
                    <ul className="space-y-2 text-slate-300 text-sm">
                        <li>Email: info@hobbyhub.com</li>
                        <li>Phone: (123) 456-7890</li>
                        <li>Address: 123 Hobby St, Passion City</li>
                    </ul>
                </div>
            </div>

            {/* Bottom line */}
            <div className="border-t border-slate-700 mt-10 pt-4 text-center text-slate-400 text-sm">
                © 2025 HobbyHub@Shahriar-Utchas. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;

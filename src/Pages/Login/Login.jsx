import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <div className="max-w-md w-full space-y-6">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
                    <p className="mt-2 text-gray-500">Log in to your HobbyHub account</p>
                </div>

                <form className="space-y-5">
                    <div>
                        <label htmlFor="email" className="block mb-1 font-medium text-gray-900">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block mb-1 font-medium text-gray-900">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                onFocus={() => setPasswordFocused(true)}
                                onBlur={() => setTimeout(() => setPasswordFocused(false), 100)}
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            {passwordFocused && (
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-3 text-gray-500"
                                    onMouseDown={e => e.preventDefault()} // Prevent input losing focus on click
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            )}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                    >
                        Log In
                    </button>
                </form>

                <p className="text-center text-gray-700">
                    Don't have an account?{' '}
                    <a href="/register" className="text-gray-900 font-semibold hover:underline">
                        Register
                    </a>
                </p>
                <div className="mt-6 space-y-3">
                    <button
                        className="flex items-center justify-center w-full gap-2 border border-gray-300 rounded-xl py-2 transition duration-300 ease-in-out transform hover:bg-yellow-100 hover:scale-105 hover:shadow-md active:scale-95 cursor-pointer"
                    >
                        <FcGoogle className="text-xl" />
                        <span className="text-sm font-medium text-gray-700">Continue with Google</span>
                    </button>
                    <button
                        className="flex items-center justify-center w-full gap-2 border border-gray-300 rounded-xl py-2 transition duration-300 ease-in-out transform hover:bg-gray-200 hover:scale-105 hover:shadow-md active:scale-95 cursor-pointer"
                    >
                        <FaGithub className="text-xl text-black" />
                        <span className="text-sm font-medium text-gray-700">Continue with GitHub</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;

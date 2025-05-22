import React, { useContext, useEffect, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthContext';
import toast, { Toaster } from 'react-hot-toast';

const Registration = () => {
    const { createUser, handleGoogleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        password: '',
        confirmPassword: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    // Track if confirm password was touched (blurred once)
    const [confirmFocused, setConfirmFocused] = useState(false);
    const [confirmTouched, setConfirmTouched] = useState(false);

    const [loading, setLoading] = useState(false);

    // Validation functions
    const validateName = (name) => {
        if (!name || name.trim().length < 6) return "Name must be at least 6 characters.";
        return "";
    };

    const validatePassword = (password) => {
        if (password.length < 6) return "Password must be at least 6 characters.";
        if (!/[A-Z]/.test(password)) return "Password must contain at least one uppercase letter.";
        if (!/[a-z]/.test(password)) return "Password must contain at least one lowercase letter.";
        return "";
    };

    const validateConfirmPassword = (password, confirmPassword) => {
        if (confirmPassword && password !== confirmPassword) return "Passwords do not match.";
        return "";
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        setErrors(prev => {
            let newErrors = { ...prev };

            if (name === "name") newErrors.name = validateName(value);

            if (name === "password") {
                newErrors.password = validatePassword(value);
                // Also update confirm password error if confirmPassword has value
                newErrors.confirmPassword = validateConfirmPassword(value, formData.confirmPassword);
            }

            if (name === "confirmPassword") {
                newErrors.confirmPassword = validateConfirmPassword(formData.password, value);
            }

            return newErrors;
        });
    };

    // Confirm password focus/blur handlers to manage touched state
    const handleConfirmFocus = () => {
        setConfirmFocused(true);
    };

    const handleConfirmBlur = () => {
        setConfirmFocused(false);
        setConfirmTouched(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nameError = validateName(formData.name);
        const passwordError = validatePassword(formData.password);
        const confirmError = validateConfirmPassword(formData.password, formData.confirmPassword);

        const newErrors = {
            name: nameError,
            password: passwordError,
            confirmPassword: confirmError
        };

        setErrors(newErrors);

        // Prevent submission if errors exist
        if (nameError || passwordError || confirmError) return;

        try {
            setLoading(true);
            await createUser(formData.email, formData.password, formData.name);
            toast.success('Registration successful! Welcome to HobbyHub.');
            setTimeout(() => {
                setLoading(false);
                navigate('/');
            }, 1000);
        } catch (err) {
            setLoading(false);
            toast.error(err.message || 'Registration failed');
        }
    };

    const handleGoogle = async () => {
        try {
            setLoading(true);
            await handleGoogleLogin();
            toast.success('Registration successful! Welcome to HobbyHub.');
            setTimeout(() => {
                setLoading(false);
                navigate('/');
            }, 1000);
        } catch (err) {
            setLoading(false);
            toast.error(err.message || 'Google sign in failed');
        }
    };

    return (
        <>
            <Toaster position="top-right" />
            <div className="min-h-screen flex items-center justify-center bg-white px-4 my-8">
                <div className="max-w-md w-full space-y-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900">Create an Account</h2>
                        <p className="mt-2 text-gray-500">Join HobbyHub to connect with local hobby groups</p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                disabled={loading}
                                className="w-full px-4 py-3 border border-gray-200 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your name"
                            />
                            {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                disabled={loading}
                                className="w-full px-4 py-3 border border-gray-200 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <div className="relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    disabled={loading}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Create a password"
                                />
                                {/* Show toggle button always here */}
                                <button
                                    type="button"
                                    onMouseDown={(e) => e.preventDefault()}
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-3 text-gray-500"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                            {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                            <div className="relative">
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type={showConfirm ? 'text' : 'password'}
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    onFocus={handleConfirmFocus}
                                    onBlur={handleConfirmBlur}
                                    required
                                    disabled={loading}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Confirm your password"
                                />
                                {(confirmFocused || confirmTouched) && (
                                    <button
                                        type="button"
                                        onMouseDown={(e) => e.preventDefault()}
                                        onClick={() => setShowConfirm(!showConfirm)}
                                        className="absolute right-3 top-3 text-gray-500"
                                    >
                                        {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                )}
                            </div>
                            {(confirmFocused || confirmTouched) && errors.confirmPassword && (
                                <p className="text-sm text-red-500 mt-1">{errors.confirmPassword}</p>
                            )}
                        </div>

                        <div>
                            <button
                                type="submit"
                                className={`w-full py-3 rounded-md font-semibold transition cursor-pointer ${loading
                                    ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                                    : 'bg-[#0f172a] text-white hover:bg-[#1e293b]'
                                    }`}
                                disabled={loading}
                            >
                                {loading ? 'Registering...' : 'Register'}
                            </button>
                        </div>
                    </form>

                    <p className="mt-4 text-center text-sm text-gray-700">
                        Already have an account?{' '}
                        <a href="/login" className="font-medium text-black hover:underline">Log In</a>
                    </p>

                    <div className="mt-6 space-y-3 mb-8">
                        <button
                            onClick={handleGoogle}
                            disabled={loading}
                            className="flex items-center justify-center w-full gap-2 border border-gray-300 rounded-xl py-2 transition duration-300 ease-in-out transform hover:bg-yellow-100 hover:scale-105 hover:shadow-md active:scale-95 cursor-pointer"
                        >
                            <FcGoogle className="text-xl" />
                            <span className="text-sm font-medium text-gray-700">Continue with Google</span>
                        </button>

                        <button
                            disabled
                            className="flex items-center justify-center w-full gap-2 border border-gray-300 rounded-xl py-2 opacity-60 cursor-not-allowed"
                        >
                            <FaGithub className="text-xl text-black" />
                            <span className="text-sm font-medium text-gray-700">GitHub coming soon</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;

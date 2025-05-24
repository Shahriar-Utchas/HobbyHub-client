import React, { useContext, useEffect, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthContext';
import toast, { Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet';

const Registration = () => {
    const { user, createUser, handleGoogleLogin, handleGitHubLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    useEffect(() => {
        if (user) {
            navigate(location?.state || '/');
        }
    }, [user, navigate]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        photoURL: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        password: '',
        confirmPassword: '',
        photoURL: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [confirmFocused, setConfirmFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [loading, setLoading] = useState(false);

    // Validation
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

    const validatePhotoURL = (url) => {
        if (!url) return '';
        const pattern = /^(https?:\/\/.*\.(?:png|jpg|jpeg|webp|gif))$/i;
        return pattern.test(url) ? '' : 'Invalid image URL.';
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        setErrors(prev => {
            const newErrors = { ...prev };

            if (name === 'name') newErrors.name = validateName(value);
            if (name === 'password') {
                newErrors.password = validatePassword(value);
                newErrors.confirmPassword = validateConfirmPassword(value, formData.confirmPassword);
            }
            if (name === 'confirmPassword') {
                newErrors.confirmPassword = validateConfirmPassword(formData.password, value);
            }
            if (name === 'photoURL') {
                newErrors.photoURL = validatePhotoURL(value);
            }

            return newErrors;
        });
    };

    const handleConfirmFocus = () => setConfirmFocused(true);
    const handleConfirmBlur = () => setConfirmFocused(false);
    const handlePasswordFocus = () => setPasswordFocused(true);
    const handlePasswordBlur = () => setPasswordFocused(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const nameError = validateName(formData.name);
        const passwordError = validatePassword(formData.password);
        const confirmError = validateConfirmPassword(formData.password, formData.confirmPassword);
        const photoURLError = validatePhotoURL(formData.photoURL);

        const newErrors = {
            name: nameError,
            password: passwordError,
            confirmPassword: confirmError,
            photoURL: photoURLError
        };

        setErrors(newErrors);

        if (nameError || passwordError || confirmError || photoURLError) return;

        try {
            setLoading(true);
            await createUser(formData.email, formData.password, formData.name, formData.photoURL);
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

    const handleGithubLoginClick = async () => {
        try {
            setLoading(true);
            await handleGitHubLogin();
            toast.success('Registration successful! Welcome to HobbyHub.');
            setTimeout(() => {
                setLoading(false);
                navigate('/');
            }, 1000);
        } catch (err) {
            setLoading(false);
            toast.error(err.message || 'Github sign in failed');
        }
    }

    return (
        <>
            <Helmet>
                <title>HobbyHub | Registration</title>
            </Helmet>
            <Toaster position="top-right" />
            <div className="min-h-screen flex items-center justify-center bg-base px-6 md:px-4 my-8">
                <div className="max-w-md w-full space-y-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold">Create an Account</h2>
                        <p className="mt-2 text-base">Join HobbyHub to connect with local hobby groups</p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
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
                            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
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
                            <label htmlFor="photoURL" className="block text-sm font-medium mb-1">Photo URL</label>
                            <input
                                id="photoURL"
                                name="photoURL"
                                type="url"
                                value={formData.photoURL}
                                onChange={handleChange}
                                disabled={loading}
                                className="w-full px-4 py-3 border border-gray-200 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Paste profile photo URL"
                            />
                            {errors.photoURL && <p className="text-sm text-red-500 mt-1">{errors.photoURL}</p>}
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
                            <div className="relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={formData.password}
                                    onChange={handleChange}
                                    onFocus={handlePasswordFocus}
                                    onBlur={handlePasswordBlur}
                                    required
                                    disabled={loading}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Create a password"
                                />
                                {(passwordFocused || formData.password.length > 0) && (
                                    <button
                                        type="button"
                                        onMouseDown={(e) => e.preventDefault()}
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-3 text-gray-500"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                )}
                            </div>
                            {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">Confirm Password</label>
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
                                {(confirmFocused || formData.confirmPassword.length > 0) && (
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
                            {(confirmFocused || formData.confirmPassword.length > 0) && errors.confirmPassword && (
                                <p className="text-sm text-red-500 mt-1">{errors.confirmPassword}</p>
                            )}
                        </div>

                        <div>
                            <button
                                type="submit"
                                className={`w-full py-3 rounded-md font-semibold transition cursor-pointer border ${loading
                                    ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                                    : 'bg-[#0f172a] text-white hover:bg-[#1e293b]'
                                    }`}
                                disabled={loading}
                            >
                                {loading ? 'Registering...' : 'Register'}
                            </button>
                        </div>
                    </form>

                    <p className="mt-4 text-center">
                        Already have an account?{' '}
                        <a href="/login" className="font-semibold underline hover:text-blue-600">Log In</a>
                    </p>

                    <div className="mt-6 space-y-3 mb-8">
                        <button
                            onClick={handleGoogle}
                            disabled={loading}
                            className="flex items-center justify-center w-full gap-2 border border-gray-300 rounded-xl py-2 transition duration-300 ease-in-out transform hover:bg-yellow-100 hover:scale-105 hover:shadow-md active:scale-95 cursor-pointer hover:text-black"
                        >
                            <FcGoogle className="text-xl" />
                            <span className="text-sm font-medium">Continue with Google</span>
                        </button>

                        <button
                            className="flex items-center justify-center w-full gap-2 border border-gray-300 rounded-xl py-2 transition duration-300 ease-in-out transform hover:bg-gray-200 hover:scale-105 hover:shadow-md active:scale-95 cursor-pointer hover:text-black"
                            onClick={handleGithubLoginClick}
                        >
                            <FaGithub className="text-xl" />
                            <span className="text-sm font-medium">Continue with GitHub</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;

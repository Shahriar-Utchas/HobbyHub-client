import { Eye, EyeOff } from 'lucide-react';
import React, { useState, useContext, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Provider/AuthContext';
import { useNavigate, useLocation } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet';

const Login = () => {
    const { user, SetUser, handleGoogleLogin, loginWithEmail, handleGitHubLogin } = useContext(AuthContext);
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [loading, setLoading] = useState(false);
    const [redirectMessage, setRedirectMessage] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location?.state) {
            setRedirectMessage('You must log in to access that page.');
        }
    }, [location]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleGoogleLoginClick = () => {
        setLoading(true);
        handleGoogleLogin()
            .then((result) => {
                SetUser(result.user);
                toast.success('Welcome back!');
                setTimeout(() => {
                    setLoading(false);
                    navigate(location?.state || '/');
                }, 1000);
            })
            .catch((error) => {
                setLoading(false);
                console.error('Error signing in with Google:', error);
                toast.error('Google login failed.');
            });
    };

    const handleGithubLoginClick = () => {
        setLoading(true);
        handleGitHubLogin()
            .then((result) => {
                SetUser(result.user);
                toast.success('Welcome back!');
                setTimeout(() => {
                    setLoading(false);
                    navigate(location?.state || '/');
                }, 1000);
            })
            .catch((error) => {
                setLoading(false);
                console.error('Error signing in with GitHub:', error);
                toast.error('GitHub login failed.');
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        loginWithEmail(formData.email, formData.password)
            .then((userCredential) => {
                SetUser(userCredential.user);
                toast.success('Welcome back!');
                setTimeout(() => {
                    setLoading(false);
                    navigate(location?.state || '/');
                }, 1000);
            })
            .catch((error) => {
                setLoading(false);
                let errorMessage = 'Login failed.';
                switch (error.code) {
                    case 'auth/invalid-credential':
                        errorMessage = 'Invalid Email/password. Please try again.';
                        break;
                    case 'auth/user-not-found':
                        errorMessage = 'No user found with this email.';
                        break;
                    case 'auth/invalid-email':
                        errorMessage = 'Invalid email address.';
                        break;
                    default:
                        errorMessage = error.code;
                }
                setError(errorMessage);
            });
    };

    return (
        <>
        <Helmet>
            <title>HobbyHub | Login</title>
        </Helmet>
            <Toaster position="top-right" />
            <div className="relative min-h-screen flex items-center justify-center bg-base px-6 md:px-8 pb-8 md:pb-0">
                {redirectMessage && (
                    <p className="absolute top-6 text-yellow-600 text-sm text-center px-4">
                        {redirectMessage}
                    </p>
                )}
                <div className="w-full max-w-sm sm:max-w-md space-y-6 mx-auto py-8 sm:py-12">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold">Welcome Back</h2>
                        <p className="mt-2 text-base">Log in to your HobbyHub account</p>
                    </div>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block mb-1 font-medium text-base">
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
                                disabled={loading}
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block mb-1 font-medium text-base">
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
                                    disabled={loading}
                                />
                                {passwordFocused && (
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-3 text-gray-500"
                                        onMouseDown={e => e.preventDefault()}
                                        disabled={loading}
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                )}
                            </div>
                        </div>

                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        <button
                            type="submit"
                            className={`w-full py-3 rounded-lg transition-colors cursor-pointer border ${loading
                                ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                                : 'bg-gray-900 text-white hover:bg-gray-800'
                                }`}
                            disabled={loading}
                        >
                            {loading ? 'Logging in...' : 'Log In'}
                        </button>
                    </form>

                    <p className="text-center text-base">
                        Don't have an account?{' '}
                        <a href="/register" className="text-base font-semibold underline hover:text-blue-600">
                            Register Now
                        </a>
                    </p>

                    <div className="mt-6 space-y-3">
                        <button
                            className="flex items-center justify-center w-full gap-2 border border-gray-300 rounded-xl py-2 transition duration-300 ease-in-out transform hover:bg-yellow-100 hover:scale-105 hover:shadow-md active:scale-95 cursor-pointer hover:text-black"
                            onClick={handleGoogleLoginClick}
                            disabled={loading}
                        >
                            <FcGoogle className="text-xl" />
                            <span className="text-sm font-medium">Continue with Google</span>
                        </button>

                        <button
                            className="flex items-center justify-center w-full gap-2 border border-gray-300 rounded-xl py-2 transition duration-300 ease-in-out transform hover:bg-gray-200 hover:scale-105 hover:shadow-md active:scale-95 cursor-pointer hover:text-black"
                            onClick={handleGithubLoginClick}
                            disabled={loading}
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

export default Login;

import React from 'react';
import Lottie from 'lottie-react';
import { Link } from 'react-router';
import animationData from '../../../public/lotties/404_animation.json';
import { Helmet } from 'react-helmet';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-base-100 text-center">
            <Helmet>
                <title>HobbyHub | 404</title>
                <meta name="description" content="The page you are looking for does not exist." />
            </Helmet>
            <div className="w-full max-w-md">
                <Lottie animationData={animationData} loop={true} />
            </div>
            <h1 className="text-4xl font-bold text-base-content mt-4">Oops! Page Not Found</h1>
            <p className="text-base-content/70 mb-6">
                Sorry, the page you’re looking for doesn’t exist or has been moved.
            </p>
            <Link
                to="/"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default ErrorPage;

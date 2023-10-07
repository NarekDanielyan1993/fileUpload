// pages/Custom404.js

import { AUTH_ROUTES } from '@/constant';
import Link from 'next/link';

const Custom404 = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-primary-lighten">
            <h1 className="text-4xl font-bold text-white mb-4">
                404 - Page Not Found
            </h1>
            <p className="text-white text-lg mb-8">
                The page you are looking for does not exist.
            </p>
            <Link
                className="text-tertiary-lighten hover:underline"
                href={AUTH_ROUTES.AUTH}>
                Go back to the homepage
            </Link>
        </div>
    );
};

export default Custom404;

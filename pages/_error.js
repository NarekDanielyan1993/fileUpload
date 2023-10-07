import Link from 'next/link';
import { AUTH_ROUTES } from '../constant';

const ErrorPage = ({ statusCode }) => {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold text-red-600 mb-4">
                {statusCode || 'Error'}
            </h1>
            <p className="text-lg text-gray-600 mb-4">
                {statusCode
                    ? 'An error occurred on the server.'
                    : 'This page could not be found.'}
            </p>
            <Link
                className="text-blue-500 hover:underline"
                href={AUTH_ROUTES.AUTH}>
                Go back to the login page
            </Link>
        </div>
    );
};

ErrorPage.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default ErrorPage;

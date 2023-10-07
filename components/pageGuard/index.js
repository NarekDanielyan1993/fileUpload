import { AUTH_ROUTES } from '@/constant';
import { useAuth } from '@/store/auth/provider';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Loader from '../ui/loader';

const PageGuard = ({ children }) => {
    const router = useRouter();
    const { useCheckUserAuthentication } = useAuth();
    const { isLoading, data } = useCheckUserAuthentication();
    console.log(data);
    console.log(isLoading);
    useEffect(() => {
        if (isLoading || !router.isReady) return;
        if (!data.isAuth) {
            router.push({
                pathname: AUTH_ROUTES.AUTH,
                query: { returnUrl: router.asPath }
            });
        }
    }, [isLoading, data, router]);

    if (isLoading || !data?.isAuth) {
        return <Loader />;
    }

    return <>{children}</>;
};

export default PageGuard;

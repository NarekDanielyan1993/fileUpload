import {
    AUTH_ROUTES,
    ERROR_ROUTES,
    HTTP_METHODS,
    PROFILE_API
} from '@/constant';
import useCookie from '@/hook/useCookie';
import { NetworkError, apiRequest } from '@/utils';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

export const useUploadImage = () => {
    const { getItem } = useCookie();
    const router = useRouter();
    const uploadImage = async (url, { arg }) => {
        const formData = { image: arg };
        const token = getItem('token');
        const headers = {
            'token-tt': token
        };
        const response = await apiRequest({
            url: url,
            method: HTTP_METHODS.PUT,
            options: { headers: headers, data: JSON.stringify(formData) }
        });
        const data = await response.json();
        if (!data.ok || data.error) {
            if (
                typeof data.error === 'string' &&
                data.error.includes('expired')
            ) {
                router.push(AUTH_ROUTES.AUTH);
            }
            const error = new NetworkError(data);
            throw new Error(error);
        }
        return data;
    };

    return useSWRMutation(PROFILE_API.ADD_IMAGE, uploadImage);
};

export const fetchAvatar = async (url, token) => {
    const headers = { 'token-tt': token };
    const response = await apiRequest({
        url: url,
        method: HTTP_METHODS.GET,
        options: { headers: headers }
    });
    const data = await response.json();
    return data;
};

export const useGetAvatar = () => {
    const { getItem } = useCookie();
    const router = useRouter();
    const token = getItem('token');
    const getAvatar = async (url) => {
        const data = await fetchAvatar(url, token);
        if (data.error) {
            if (
                typeof data.error === 'string' &&
                data.error.includes('expired')
            ) {
                return router.push(AUTH_ROUTES.AUTH);
            }
            return router.push(ERROR_ROUTES.main);
        }
        return data;
    };

    return useSWR(PROFILE_API.GET_AVATAR, getAvatar, {
        revalidateOnFocus: false,
        revalidateOnMount: false,
        revalidateOnReconnect: false
    });
};

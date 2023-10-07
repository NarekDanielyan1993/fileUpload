import { API_ERRORS_MESSAGES, AUTH_API, HTTP_METHODS } from '@/constant';
import useCookie from '@/hook/useCookie';
import useNotifications from '@/hook/useNotification';
import { NetworkError, apiRequest } from '@/utils';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

export const useCheckUserAuthentication = () => {
    const fetchUserToken = async (url) => {
        const { getItem } = useCookie();
        const token = getItem('token');
        console.log(token);
        const headers = {
            'token-tt': token
        };
        const response = await apiRequest({
            url: url,
            method: HTTP_METHODS.GET,
            options: { headers: headers }
        });
        const data = await response.json();
        if (!data.ok || data.error) {
            console.log(data);
            if (
                typeof data.error === 'string' &&
                data.error.includes('expired')
            ) {
                return { data: null, isAuth: false };
            }
        }
        return { data: data, isAuth: true };
    };
    return useSWR(AUTH_API.VALIDATE_TOKEN, fetchUserToken);
};

export const useLogin = () => {
    const { showError } = useNotifications();
    const { setItem } = useCookie();
    const login = async (url, { arg }) => {
        const response = await apiRequest({
            url: url,
            method: HTTP_METHODS.POST,
            options: {
                data: JSON.stringify(arg)
            }
        });
        const data = await response.json();
        if (!data.ok) {
            const err = new NetworkError(data);
            throw new Error(err);
        }
        setItem('token', data.token);
        return data;
    };

    return useSWRMutation(AUTH_API.LOGIN, login, {
        onError: (error) => {
            console.log(error);
            showError(error.message);
        }
    });
};

export const useSignUp = () => {
    const { showError, showSuccess } = useNotifications();
    const signUp = async (url, { arg }) => {
        try {
            const response = await apiRequest({
                url: url,
                method: HTTP_METHODS.POST,
                options: {
                    data: JSON.stringify(arg)
                }
            });
            const data = await response.json();
            if (!data.ok) {
                const err = new NetworkError(data);
                throw err;
            }
            showSuccess(API_ERRORS_MESSAGES.SIGNUP.SUCCESS);
            return data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    return useSWRMutation(AUTH_API.SIGNUP, signUp, {
        onError: (error) => {
            console.log(error);
            showError(error.message);
        }
    });
};

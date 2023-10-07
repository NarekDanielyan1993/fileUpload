export const PROFILE_API = {
    GET_AVATAR: '/account/image',
    ADD_IMAGE: '/account/image'
};

export const AUTH_API = {
    VALIDATE_TOKEN: '/account/image',
    LOGIN: '/login',
    SIGNUP: '/user'
};

export const HTTP_METHODS = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete'
};

export const SWR_SETTINGS = {
    refreshInterval: 36000,
    revalidateOnMount: true,
    revalidateOnFocus: false,
    revalidateOnReconnect: true
};

export const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

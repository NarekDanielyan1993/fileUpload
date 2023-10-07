import { deleteCookie, getCookie, setCookie } from 'cookies-next';

const useCookie = () => {
    const setItem = (key, value, options = {}) => {
        try {
            setCookie(key, value, options);
        } catch (error) {
            console.error(`Error setting cookie: ${error}`);
        }
    };

    const getItem = (key) => {
        try {
            return getCookie(key) || null;
        } catch (error) {
            console.error(`Error getting cookie: ${error}`);
            return null;
        }
    };

    const removeItem = (key) => {
        try {
            deleteCookie(key);
        } catch (error) {
            console.error(`Error removing cookie: ${error}`);
        }
    };

    return {
        setItem,
        getItem,
        removeItem
    };
};

export default useCookie;

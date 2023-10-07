import { BASE_URL, HTTP_METHODS } from '@/constant';

export const apiRequest = ({
    url,
    method = HTTP_METHODS.GET,
    options = {}
}) => {
    if (url === undefined || method === undefined) {
        throw new Error('Url or method has not been set');
    }

    const defaultHeaders = {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    };

    const { headers, data, ...otherOptions } = options;

    if (method === HTTP_METHODS.GET && data) {
        const queryParams = new URLSearchParams(data);
        url = `${url}?${queryParams}`;
    }

    const mergedHeaders = { ...defaultHeaders, ...headers };

    const requestOptions = {
        ...otherOptions,
        method,
        ...(data && { body: data }),
        headers: mergedHeaders
    };

    return fetch(`${BASE_URL}${url}`, requestOptions);
};

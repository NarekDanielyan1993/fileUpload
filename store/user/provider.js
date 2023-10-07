import { useContext } from 'react';
import { useGetAvatar, useUploadImage } from './api';
import { UserContext } from './context';

export const UserProvider = ({ children }) => {
    const accountData = {
        useUploadImage: useUploadImage,
        useGetAvatar: useGetAvatar
    };

    return (
        <UserContext.Provider value={accountData}>
            {children}
        </UserContext.Provider>
    );
};

export const useAccount = () => {
    const context = useContext(UserContext);
    return context;
};

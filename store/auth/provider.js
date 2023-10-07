import { useContext } from 'react';
import { useCheckUserAuthentication, useLogin, useSignUp } from './api';
import { AuthContext } from './context';

export const AuthProvider = ({ children }) => {
    const authData = {
        useCheckUserAuthentication: useCheckUserAuthentication,
        useSignUp,
        useLogin
    };

    return (
        <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};

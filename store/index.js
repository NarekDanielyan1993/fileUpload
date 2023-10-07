import { AuthProvider } from './auth/provider';
import { UserProvider } from './user/provider';

const StoreProvider = ({ children }) => {
    return (
        <AuthProvider>
            <UserProvider>{children}</UserProvider>
        </AuthProvider>
    );
};

export default StoreProvider;

import { SWR_SETTINGS } from '@/constant';
import useNotifications from '@/hook/useNotification';
import { SWRConfig } from 'swr';

export const SWRProvider = ({ children, fallback }) => {
    const { showError } = useNotifications();
    return (
        <SWRConfig
            value={{
                ...SWR_SETTINGS,
                fallback: fallback,
                onError: (error, key) => {
                    console.log(error);
                    showError(error.message);
                }
            }}>
            {children}
        </SWRConfig>
    );
};

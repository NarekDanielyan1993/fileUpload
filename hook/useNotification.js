import {
    NOTIFICATION_MESSAGE_POSITION,
    NOTIFICATION_TYPES
} from '@/constant/notification';
import { useSnackbar } from 'notistack';
import { useCallback } from 'react';

const useNotifications = () => {
    const { enqueueSnackbar } = useSnackbar();

    const convertOptions = useCallback((options) => {
        return {
            ...(options?.position &&
                NOTIFICATION_MESSAGE_POSITION[options.position]),
            ...(options?.duration && { autoHideDuration: duration })
        };
    }, []);

    const showSuccess = (message, options = {}) => {
        enqueueSnackbar(message, {
            variant: NOTIFICATION_TYPES.SUCCESS,
            ...convertOptions(options)
        });
    };

    const showError = (message, options = {}) => {
        enqueueSnackbar(message, {
            variant: NOTIFICATION_TYPES.ERROR,
            ...convertOptions(options)
        });
    };

    const showWarning = (message, options = {}) => {
        enqueueSnackbar(message, {
            variant: NOTIFICATION_TYPES.WARNING,
            ...convertOptions(options)
        });
    };

    return {
        showSuccess,
        showError,
        showWarning
    };
};

export default useNotifications;
